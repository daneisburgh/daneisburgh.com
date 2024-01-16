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
    private slideOpacities: number[] = [];

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
                title: imageData.description,
                h: 0,
                w: 0
            }));
        } else {
            images = (assetsFilePaths as string[])
                .filter((path) => path.includes(this.imageDirectoryPath))
                .map((path) => ({
                    src: `${location.origin}/${path}`,
                    h: 0,
                    w: 0
                }));
        }

        for (let i = 0; i < images.length; i++) {
            this.slideOpacities[i] = 0;
        }

        const options: Partial<PreparedPhotoSwipeOptions> = {
            index,
            dataSource: images,
            pinchToClose: false,
            closeOnVerticalDrag: false,
            zoomSVG: undefined
        };

        this.gallery = new PhotoSwipe(options);

        const env = this; // eslint-disable-line

        this.gallery.on("gettingData", (event) => {
            if (event.data.w == 0 || event.data.h == 0) {
                this.slideOpacities[event.index] = 0;
                const img = new Image();
                img.onload = () => {
                    event.data.w = img.width;
                    event.data.h = img.height;
                    env.gallery?.refreshSlideContent(event.index);
                    env.gallery?.updateSize(true);
                };
                img.src = event.data.src as string;
            } else {
                this.slideOpacities[event.index] = 1;
            }
        });

        this.gallery.on("slideActivate", (event) => {
            setTimeout(
                () => {
                    var elements = document.getElementsByTagName("img");
                    for (var i = 0; i < elements.length; ++i) {
                        const element = elements[i];
                        if (
                            element.className == "pswp__img" &&
                            element.src == event.slide.data.src
                        ) {
                            element.style.opacity =
                                this.slideOpacities[event.slide.index].toString();
                        }
                    }
                },
                event.slide.index === 0 ? 500 : 0
            );
        });

        this.gallery.on("close", () => {
            this.scrollService.enableScroll();
            AppComponent.temporarilyDisableHamburger();
            this.location.onPopState = this.onPopState;
            this.galleryClose.emit();
        });

        this.gallery.init();
    }
}
