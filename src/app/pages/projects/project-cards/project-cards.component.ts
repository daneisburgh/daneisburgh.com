import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faExternalLinkAlt, faFileAlt, faImage } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { ProjectElement } from '../projects-data';
import { ElementService } from 'src/app/shared/services/element/element.service';

@Component({
    selector: 'app-project-cards',
    templateUrl: './project-cards.component.html',
    styleUrls: [
        './project-cards.component.css',
        '../projects.component.css'
    ]
})
export class ProjectCardsComponent {
    @Input()
    public projectElements: ProjectElement[] = [];

    @Output()
    public openGallery: EventEmitter<ProjectElement> = new EventEmitter();

    public faExternalLinkAlt = faExternalLinkAlt;
    public faFileAlt = faFileAlt;
    public faGithub = faGithub;
    public faImage = faImage;

    constructor(public elementService: ElementService) {}
}
