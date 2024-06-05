import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { AppComponent } from "src/app/app.component";

import { default as assetsFilePaths } from "src/assets/file-paths.json";
import { ScrollService } from "src/app/shared/services/scroll/scroll.service";

interface ImageData {
    name: string;
    description: string;
}

@Component({
    selector: "app-image-gallery",
    templateUrl: "./image-gallery.component.html",
    styleUrls: ["./image-gallery.component.css"]
})
export class ImageGalleryComponent {
    @Input()
    imageDirectory!: string | undefined;

    @Input()
    galleryData!: ImageData[] | undefined;

    @Output()
    galleryClose: EventEmitter<any> = new EventEmitter();

    @ViewChild("photoswipeElement")
    photoswipeElement!: ElementRef;

    showFlag = false;
    currentIndex = -1;
    selectedImageIndex = -1;
    imageObject: Array<object> = [];

    constructor(private scrollService: ScrollService) {}

    get imageDirectoryPath() {
        return `assets/images/${this.imageDirectory}`;
    }

    closeEventHandler() {
        this.showFlag = false;
        this.currentIndex = -1;
        this.scrollService.enableScroll();
        AppComponent.temporarilyDisableHamburger();
        this.galleryClose.emit();
    }

    getImageFilePath(imageName: string) {
        return `${this.imageDirectoryPath}/${imageName}.jpg`;
    }

    openGallery(index: number) {
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
