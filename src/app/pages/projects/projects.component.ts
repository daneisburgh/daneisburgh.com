import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { orderBy } from "lodash";

import { ProjectElement, projectElements, technologies } from "./projects-data";
import { ImageGalleryComponent } from "src/app/shared/components/image-gallery/image-gallery.component";
import { ElementService } from "src/app/shared/services/element/element.service";
import { AnalyticsService } from "src/app/shared/services/analytics/analytics.service";

@Component({
    selector: "app-projects",
    templateUrl: "./projects.component.html",
    styleUrls: ["./projects.component.css"]
})
export class ProjectsComponent implements OnInit {
    @ViewChild("imageGallery") imageGallery!: ImageGalleryComponent;
    @ViewChild("projectModal") projectModal!: ElementRef;

    projectFilter = "Hide";
    projectFilters = ["Hide", "Technology", "Type"];
    projectModalElement: ProjectElement | undefined;
    imageDirectory!: string | undefined;
    technologies = orderBy(technologies, "name");
    projectElements = this.elementService.sortData(projectElements) as ProjectElement[];
    projectElements1: ProjectElement[] = [];
    projectElements2: ProjectElement[] = [];

    constructor(
        private analyticsService: AnalyticsService,
        private elementService: ElementService
    ) {}

    ngOnInit() {
        this.projectElements.forEach(
            (element) => (element.technologies = orderBy(element.technologies, "name"))
        );

        for (let i = 0; i < this.projectElements.length; i++) {
            if (i % 2 === 0 && i < this.projectElements.length - 1) {
                this.projectElements1.push(this.projectElements[i]);
            } else {
                this.projectElements2.push(this.projectElements[i]);
            }
        }
    }

    async openGallery(element: any) {
        this.imageDirectory = `projects/${element.imageDirectory}`;

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
