import { Component, EventEmitter, Input, Output } from "@angular/core";
import { faExternalLinkAlt, faFileAlt, faImage } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { ProjectElement } from "../projects-data";
import { ElementService } from "src/app/shared/services/element/element.service";
import { AnalyticsService } from "src/app/shared/services/analytics.service";

@Component({
    selector: "app-project-cards",
    templateUrl: "./project-cards.component.html",
    styleUrls: ["./project-cards.component.css", "../projects.component.css"]
})
export class ProjectCardsComponent {
    @Input()
    projectElements: ProjectElement[] = [];

    @Output()
    openGallery: EventEmitter<ProjectElement> = new EventEmitter();

    faExternalLinkAlt = faExternalLinkAlt;
    faFileAlt = faFileAlt;
    faGithub = faGithub;
    faImage = faImage;

    constructor(
        private analyticsService: AnalyticsService,
        public elementService: ElementService
    ) {}

    openGitHubRepo(githubRepo: string) {
        this.analyticsService.openGitHubRepo(githubRepo);
    }

    openProjectFile(fileName: string) {
        this.analyticsService.openProjectFile(fileName);
    }
}
