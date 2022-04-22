import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProjectsComponent } from "./projects.component";

describe("ProjectsComponent", () => {
    let component: ProjectsComponent;
    let fixture: ComponentFixture<ProjectsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProjectsComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
