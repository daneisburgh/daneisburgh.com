import { Location } from "@angular/common";
import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { NavigationStart, Router } from "@angular/router";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { orderBy, upperFirst } from "lodash";

import { AnalyticsService } from "./shared/services/analytics/analytics.service";
import { ScrollService } from "./shared/services/scroll/scroll.service";

interface Link {
    id: string;
    icon: string;
    bottom: number;
}

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    standalone: false
})
export class AppComponent implements OnInit, AfterViewChecked {
    static isHamburgerDisabled = false;

    readonly email = "hello@daneisburgh.com";
    readonly currentYear = new Date().getFullYear();
    readonly links: Link[] = [
        { id: "home", icon: "home", bottom: 0 },
        { id: "about", icon: "info", bottom: 0 },
        { id: "timeline", icon: "timeline", bottom: 0 },
        { id: "projects", icon: "support", bottom: 0 }
    ];

    isContentReady = false;
    isError = false;
    isHamburgerActive = false;
    showContent = false;
    activeLink: Link | undefined;
    faExternalLinkAlt = faExternalLinkAlt;
    upperFirst = upperFirst;

    private isNavigating = false;
    private isScrollNavigation = false;
    private isFirstNavigation = true;
    private navigationTimeout: ReturnType<typeof setTimeout> | undefined = undefined;

    constructor(
        private analyticsService: AnalyticsService,
        private cdr: ChangeDetectorRef,
        private location: Location,
        private scrollService: ScrollService,
        private router: Router,
        private title: Title
    ) {}

    get isHamburgerDisabled() {
        return AppComponent.isHamburgerDisabled;
    }

    private get topDiff() {
        return window.innerWidth < 768 ? 88 : 108;
    }

    static temporarilyDisableHamburger() {
        this.isHamburgerDisabled = true;
        setTimeout(() => (this.isHamburgerDisabled = false), 350);
    }

    ngOnInit() {
        this.scrollService.setWheelOpt();
        this.watchScroll();
        this.watchRoute();
    }

    ngAfterViewChecked() {
        setTimeout(() => {
            if (!this.isError) {
                this.isContentReady = true;
                this.cdr.detectChanges();
            }
        }, 1500);
    }

    toggleHamburger() {
        this.isHamburgerActive = !this.isHamburgerActive;
        AppComponent.temporarilyDisableHamburger();
    }

    getLinkIcon(icon: string) {
        return `assets/flat-color-icons/${icon}.svg`;
    }

    private setTitle() {
        const linkId = this.activeLink?.id;
        this.title.setTitle("Dane Isburgh" + (linkId === "home" ? "" : ` | ${upperFirst(linkId)}`));
    }

    private watchRoute() {
        this.router.events.subscribe((event) => {
            if (!this.isScrollNavigation && event instanceof NavigationStart) {
                this.analyticsService.pageView();
                this.disableScroll();

                const id = event.url === "/" ? "home" : event.url.substring(1);
                const activeLink = this.links.find((link) => id.startsWith(link.id));
                this.isError = activeLink === undefined;

                if (activeLink) {
                    if (id !== activeLink.id) {
                        this.router.navigate([activeLink.id]);
                    } else {
                        this.activeLink = activeLink;
                        this.setTitle();

                        setTimeout(
                            (isFirstNavigation: boolean) => {
                                const elementTop =
                                    this.getBoundingClientRect(this.activeLink?.id).top -
                                    this.topDiff;
                                window.scrollTo(0, window.scrollY + elementTop);

                                if (isFirstNavigation) {
                                    this.setNavigationTimeout();
                                }
                            },
                            this.isFirstNavigation ? 500 : 0,
                            this.isFirstNavigation
                        );

                        this.isFirstNavigation = false;
                    }
                }
            }
        });
    }

    private watchScroll() {
        window.addEventListener("scroll", () => {
            this.setNavigationTimeout();
            this.links.forEach(
                (link) => (link.bottom = this.getBoundingClientRect(link.id).bottom)
            );

            if (!this.isNavigating) {
                this.activeLink = orderBy(
                    this.links.filter((link) => link.bottom > 0),
                    "bottom",
                    "asc"
                )[0];
                this.setTitle();

                if (!this.location.isCurrentPathEqualTo(`/${this.activeLink.id}`)) {
                    this.isScrollNavigation = true;
                    this.router.navigate([this.activeLink.id]);
                    setTimeout(() => (this.isScrollNavigation = false), 100);
                }
            }
        });
    }

    private setNavigationTimeout() {
        if (this.isContentReady) {
            if (this.navigationTimeout) {
                clearTimeout(this.navigationTimeout);
            }

            this.navigationTimeout = setTimeout(() => this.enableScroll(), 100);
        } else {
            setTimeout(() => this.setNavigationTimeout(), 100);
        }
    }

    private getBoundingClientRect(id?: string) {
        const element = document.getElementById(id ? id : "");
        return element ? element.getBoundingClientRect() : new DOMRect();
    }

    private enableScroll() {
        this.isNavigating = false;
        this.scrollService.enableScroll();
    }

    private disableScroll() {
        this.isNavigating = true;
        this.scrollService.disableScroll();
    }
}
