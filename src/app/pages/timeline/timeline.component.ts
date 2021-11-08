import { Component, OnInit, ViewChild } from "@angular/core";
import { faImage, faSortUp, faSortDown, faWrench } from "@fortawesome/free-solid-svg-icons";

import { ImageGalleryComponent } from "src/app/shared/components/image-gallery/image-gallery.component";
import { AnalyticsService } from "src/app/shared/services/analytics.service";
import { ElementService } from "src/app/shared/services/element/element.service";
import { TimelineElement, timelineElements } from "./timeline-data";

@Component({
    selector: "app-timeline",
    templateUrl: "./timeline.component.html",
    styleUrls: ["./timeline.component.css"]
})
export class TimelineComponent implements OnInit {
    @ViewChild("imageGallery") imageGallery!: ImageGalleryComponent;

    faImage = faImage;
    faWrench = faWrench;
    faSortUp = faSortUp;
    faSortDown = faSortDown;
    imageDirectory!: string | undefined;
    timelineElements = this.elementService.sortData(timelineElements) as TimelineElement[];

    constructor(
        private analyticsService: AnalyticsService,
        public elementService: ElementService
    ) {}

    ngOnInit() {
        let colorIndex = 0;
        const timelineColors = ["teal", "purple", "blue"];
        this.timelineElements.forEach((element) => {
            element.color = timelineColors[colorIndex];
            colorIndex = colorIndex === timelineColors.length - 1 ? 0 : colorIndex + 1;
        });
    }

    async openGallery(element: TimelineElement) {
        this.imageDirectory = `timeline/${element.imageDirectory}`;

        if (!this.imageGallery) {
            setTimeout(() => this.openGallery(element), 100);
        } else {
            this.imageGallery.openGallery(0);
            this.analyticsService.openGallery(this.imageDirectory);
        }
    }

    onImageGalleryClose() {
        this.imageDirectory = undefined;
    }
}
