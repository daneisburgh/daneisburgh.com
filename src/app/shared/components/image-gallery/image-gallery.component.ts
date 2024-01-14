import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { AppComponent } from "src/app/app.component";

import PhotoSwipe, { PreparedPhotoSwipeOptions } from "photoswipe";

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

    constructor(private scrollService: ScrollService) {}

    get imageDirectoryPath() {
        return `assets/images/${this.imageDirectory}`;
    }

    getImageFilePath(imageName: string) {
        return `${this.imageDirectoryPath}/${imageName}.jpg`;
    }

    openGallery(index: number) {
        let images: any[] = [];
        this.scrollService.disableScroll();

        if (this.galleryData) {
            images = this.galleryData.map((imageData) => ({
                src: `${location.origin}/${this.getImageFilePath(imageData.name)}`,
                title: imageData.description
            }));
        } else {
            images = (assetsFilePaths as string[])
                .filter((path) => path.includes(this.imageDirectoryPath))
                .map((path) => ({
                    src: `${location.origin}/${path}`
                }));
        }

        for (const image of images) {
            image.h = 0;
            image.w = 0;
        }

        const options: Partial<PreparedPhotoSwipeOptions> = {
            index,
            dataSource: images,
            pinchToClose: false,
            closeOnVerticalDrag: false,
            zoomSVG: undefined
        };

        const gallery = new PhotoSwipe(options);

        gallery.on("close", () => {
            this.scrollService.enableScroll();
            AppComponent.temporarilyDisableHamburger();
            this.galleryClose.emit();
        });

        gallery.on("gettingData", (event) => {
            console.log(event);
            const item: any = event.data;

            if (item.w < 1 || item.h < 1) {
                const img = new Image();
                img.onload = () => {
                    console.log(img);
                    item.w = img.width;
                    item.h = img.height;
                    gallery.updateSize(true);
                    gallery.refreshSlideContent(event.index);
                };
                img.src = item.src;
            }
        });

        gallery.init();
    }
}
