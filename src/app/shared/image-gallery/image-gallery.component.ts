import { Component, EventEmitter, HostListener, Input, Output } from "@angular/core";
import { AppComponent } from "src/app/app.component";

import { default as assetsFilePaths } from "src/assets/file-paths.json";
import { ScrollService } from "src/app/shared/services/scroll/scroll.service";
import { LocationStrategy } from "@angular/common";

interface ImageData {
    name: string;
    description: string;
}

@Component({
    selector: "app-image-gallery",
    templateUrl: "./image-gallery.component.html",
    styleUrls: ["./image-gallery.component.css"],
    standalone: false
})
export class ImageGalleryComponent {
    @Input()
    imageDirectory!: string | undefined;

    @Input()
    galleryData!: ImageData[] | undefined;

    @Output()
    galleryClose: EventEmitter<any> = new EventEmitter();

    showFlag = false;
    selectedImageIndex = -1;
    imageObject: Array<object> = [];
    private onPopState: any;

    constructor(private location: LocationStrategy, private scrollService: ScrollService) {}

    get imageDirectoryPath() {
        return `assets/images/${this.imageDirectory}`;
    }

    closeEventHandler() {
        this.showFlag = false;
        this.scrollService.enableScroll();
        this.location.onPopState = this.onPopState;
        AppComponent.temporarilyDisableHamburger();
        this.galleryClose.emit();
    }

    getImageFilePath(imageName: string) {
        return `${this.imageDirectoryPath}/${imageName}.jpg`;
    }

    openGallery(index: number) {
        this.onPopState = this.location.onPopState;
        this.location.onPopState(() => this.closeEventHandler());
        history.pushState(null, "");

        if (this.galleryData) {
            this.imageObject = this.galleryData.map((imageData) => ({
                image: `${location.origin}/${this.getImageFilePath(imageData.name)}`,
                title: imageData.description,
                alt: imageData.description
            }));
        } else {
            this.imageObject = (assetsFilePaths as string[])
                .filter((path) => path.includes(this.imageDirectoryPath))
                .map((path) => ({
                    image: `${location.origin}/${path}`
                }));
        }

        this.selectedImageIndex = index;
        this.showFlag = true;
        this.scrollService.disableScroll();
    }
}
