import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { AppComponent } from "src/app/app.component";

import PhotoSwipe, { PreparedPhotoSwipeOptions } from "photoswipe";

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

    private gallery?: PhotoSwipe;
    private onPopState: any;

    constructor(private location: LocationStrategy, private scrollService: ScrollService) {}

    get imageDirectoryPath() {
        return `assets/images/${this.imageDirectory}`;
    }

    getImageFilePath(imageName: string) {
        return `${this.imageDirectoryPath}/${imageName}.jpg`;
    }

    openGallery(index: number) {
        let images: any[] = [];
        this.scrollService.disableScroll();
        this.onPopState = this.location.onPopState;
        this.location.onPopState(() => {
            if (this.gallery) {
                this.gallery.close();
            }
        });
        history.pushState(null, "");

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

        this.gallery = new PhotoSwipe(options);

        this.gallery.on("close", () => {
            this.scrollService.enableScroll();
            AppComponent.temporarilyDisableHamburger();
            this.location.onPopState = this.onPopState;
            this.galleryClose.emit();
        });

        const env = this; // eslint-disable-line
        this.gallery.on("gettingData", (event) => {
            const item: any = event.data;

            if (item.w < 1 || item.h < 1) {
                const img = new Image();
                img.onload = () => {
                    item.w = img.width;
                    item.h = img.height;
                    env.gallery?.updateSize(true);
                    env.gallery?.refreshSlideContent(event.index);
                };
                img.src = item.src;
            }
        });

        this.gallery.init();
    }
}
