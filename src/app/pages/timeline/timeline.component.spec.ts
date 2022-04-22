import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TimelineComponent } from "./timeline.component";

describe("TimelineComponent", () => {
    let component: TimelineComponent;
    let fixture: ComponentFixture<TimelineComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TimelineComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TimelineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
