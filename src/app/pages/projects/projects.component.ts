import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { orderBy } from 'lodash';

import { ProjectElement, projectElements, technologies } from './projects-data';
import { ImageGalleryComponent } from 'src/app/shared/components/image-gallery/image-gallery.component';
import { ElementService } from 'src/app/shared/services/element/element.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
    @ViewChild('imageGallery') imageGallery!: ImageGalleryComponent;
    @ViewChild('projectModal') projectModal!: ElementRef;

    public projectFilter = 'Hide';
    public projectFilters = ['Hide', 'Technology', 'Type'];
    public projectModalElement: ProjectElement | undefined;
    public imageDirectory!: string | undefined;
    public technologies = orderBy(technologies, 'name');
    public projectElements = this.elementService.sortData(projectElements) as ProjectElement[];
    public projectElements1: ProjectElement[] = [];
    public projectElements2: ProjectElement[] = [];

    constructor(private elementService: ElementService) { }

    public ngOnInit() {
        this.projectElements.forEach(element => element.technologies = orderBy(element.technologies, 'name'));

        for (let i = 0; i < this.projectElements.length; i++) {
            if (i % 2 === 0 && i < this.projectElements.length - 1) {
                this.projectElements1.push(this.projectElements[i]);
            } else {
                this.projectElements2.push(this.projectElements[i]);
            }
        }
    }

    public async openGallery(element: any) {
        this.imageDirectory = `projects/${element.imageDirectory}`;

        if (!this.imageGallery) {
            setTimeout(() => this.openGallery(element), 100);
        } else {
            this.imageGallery.openGallery(0);
        }
    }

    public onImageGalleryClose() {
        this.imageDirectory = undefined;
    }
}
