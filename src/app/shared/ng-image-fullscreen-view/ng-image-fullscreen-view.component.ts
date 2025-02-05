import {
    ChangeDetectorRef,
    Component,
    Inject,
    OnDestroy,
    Input,
    Output,
    EventEmitter,
    ViewEncapsulation,
    HostListener,
    ElementRef
} from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { DomSanitizer } from "@angular/platform-browser";
import { NgImageFullscreenViewService } from "./ng-image-fullscreen-view.service";

const LIGHTBOX_NEXT_ARROW_CLICK_MESSAGE = "lightbox next",
    LIGHTBOX_PREV_ARROW_CLICK_MESSAGE = "lightbox previous";

@Component({
    selector: "ng-image-fullscreen-view",
    templateUrl: "./ng-image-fullscreen-view.html",
    styleUrls: ["./ng-image-fullscreen-view.scss"],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class NgImageFullscreenViewComponent implements OnDestroy {
    totalImages: any = 0;
    nextImageIndex: any = -1;
    popupWidth: any = 1200;
    marginLeft: any = 0;
    imageFullscreenView = false;
    lightboxPrevDisable = false;
    lightboxNextDisable = false;
    showLoading = true;
    effectStyle = "none";
    speed: any = 0.6; // default speed in second
    title = "";
    currentImageIndex: any = 0;

    // for swipe event
    private swipeLightboxImgCoord?: [any, any];
    private swipeLightboxImgTime?: any;

    //@ViewChild('lightboxDiv') lightboxDiv : any;
    //@ViewChild('lightboxImageDiv') lightboxImageDiv;

    // @Inputs
    @Input() images: Array<any> = [];
    @Input()
    set imageIndex(index: any) {
        if (index !== undefined && index > -1 && index < this.images.length) {
            this.currentImageIndex = index;
        }
        this.nextPrevDisable();
    }
    @Input()
    set show(visiableFlag: any) {
        this.imageFullscreenView = visiableFlag;
        this.elRef.nativeElement.ownerDocument.body.style.overflow = "";
        if (visiableFlag === true) {
            this.elRef.nativeElement.ownerDocument.body.style.overflow = "hidden";
            this.setPopupSliderWidth();
        }
    }
    @Input() videoAutoPlay = false;
    @Input() direction = "ltr";
    @Input() paginationShow = true;
    @Input()
    set animationSpeed(data: any) {
        if (data && typeof data === "number" && data >= 0.1 && data <= 5) {
            this.speed = data;
        }
    }
    @Input() infinite = true;
    @Input() arrowKeyMove = true;
    @Input() showVideoControls = true;

    // @Output
    @Output() close = new EventEmitter<any>();
    @Output() prevImage = new EventEmitter<any>();
    @Output() nextImage = new EventEmitter<any>();

    @HostListener("window:resize", ["$event"])
    onResize(event: any) {
        this.effectStyle = "none";
        this.setPopupSliderWidth();
    }
    @HostListener("document:keyup", ["$event"])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (event && event.key && this.arrowKeyMove) {
            if (event.key.toLowerCase() === "arrowright") {
                this.nextImageLightbox();
            }

            if (event.key.toLowerCase() === "arrowleft") {
                this.prevImageLightbox();
            }

            if (event.key.toLowerCase() === "escape") {
                this.closeLightbox();
            }
        }
    }

    constructor(
        private cdRef: ChangeDetectorRef,
        private sanitizer: DomSanitizer,
        private elRef: ElementRef,
        public imageFullscreenViewService: NgImageFullscreenViewService,
        @Inject(DOCUMENT) private document: any
    ) {}

    ngOnDestroy() {
        this.resetState();
    }

    setPopupSliderWidth() {
        if (window && window.innerWidth) {
            this.popupWidth = window.innerWidth;
            this.totalImages = this.images.length;
            if (
                typeof this.currentImageIndex === "number" &&
                this.currentImageIndex !== undefined
            ) {
                this.marginLeft = -1 * this.popupWidth * this.currentImageIndex;
                this.getImageData();
                this.nextPrevDisable();
                setTimeout(() => {
                    this.showLoading = false;
                }, 500);
            }
        }
    }

    closeLightbox() {
        this.close.emit();
    }

    prevImageLightbox() {
        this.effectStyle = `all ${this.speed}s ease-in-out`;
        if (this.currentImageIndex > 0 && !this.lightboxPrevDisable) {
            this.currentImageIndex--;
            this.prevImage.emit();
            this.marginLeft = -1 * this.popupWidth * this.currentImageIndex;
            this.getImageData();
            this.nextPrevDisable();
        }
    }

    nextImageLightbox() {
        this.effectStyle = `all ${this.speed}s ease-in-out`;
        if (!this.lightboxNextDisable) {
            this.currentImageIndex =
                this.currentImageIndex < this.images.length - 1 ? this.currentImageIndex + 1 : 0;
            this.nextImage.emit();
            this.marginLeft = -1 * this.popupWidth * this.currentImageIndex;
            this.getImageData();
            this.nextPrevDisable();
        }
    }

    nextPrevDisable() {
        this.lightboxNextDisable = true;
        this.lightboxPrevDisable = true;
        setTimeout(() => {
            this.applyButtonDisableCondition();
        }, this.speed * 1000);
    }

    applyButtonDisableCondition() {
        this.lightboxNextDisable = false;
        this.lightboxPrevDisable = false;
        // if (!this.infinite && this.currentImageIndex >= this.images.length - 1) {
        //     this.lightboxNextDisable = true;
        // }
        // if (!this.infinite && this.currentImageIndex <= 0) {
        //     this.lightboxPrevDisable = true;
        // }
    }

    getImageData() {
        if (
            this.images &&
            this.images.length &&
            typeof this.currentImageIndex === "number" &&
            this.currentImageIndex !== undefined &&
            this.images[this.currentImageIndex] &&
            ((this.images as any)[this.currentImageIndex]["image"] ||
                (this.images as any)[this.currentImageIndex]["video"])
        ) {
            this.title = (this.images as any)[this.currentImageIndex]["title"] || "";
            this.totalImages = this.images.length;
            for (const iframeI in this.document.getElementsByTagName("iframe")) {
                if (
                    this.document.getElementsByTagName("iframe")[iframeI] &&
                    this.document.getElementsByTagName("iframe")[iframeI].contentWindow
                ) {
                    this.document
                        .getElementsByTagName("iframe")
                        [iframeI].contentWindow.postMessage(
                            '{"event":"command","func":"pauseVideo","args":""}',
                            "*"
                        );
                }
            }
            for (const videoI in this.document.getElementsByTagName("video")) {
                if (
                    this.document.getElementsByTagName("video")[videoI] &&
                    this.document.getElementsByTagName("video")[videoI].pause
                ) {
                    this.document.getElementsByTagName("video")[videoI].pause();
                }
            }
        }
    }

    resetState() {
        this.images = [];
    }

    /**
     * Swipe event handler
     * Reference from https://stackoverflow.com/a/44511007/2067646
     */
    swipeLightboxImg(e: TouchEvent, when: string): void {
        const coord: [any, any] = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
        const time = new Date().getTime();

        if (when === "start") {
            this.swipeLightboxImgCoord = coord;
            this.swipeLightboxImgTime = time;
        } else if (when === "end") {
            const direction = [
                coord[0] - (this.swipeLightboxImgCoord as any)[0],
                coord[1] - (this.swipeLightboxImgCoord as any)[1]
            ];
            const duration = time - this.swipeLightboxImgTime;

            if (
                duration < 1000 && //
                Math.abs(direction[0]) > 30 && // Long enough
                Math.abs(direction[0]) > Math.abs(direction[1] * 3)
            ) {
                // Horizontal enough
                if (direction[0] < 0) {
                    this.nextImageLightbox();
                } else {
                    this.prevImageLightbox();
                }
            }
        }
    }
}
