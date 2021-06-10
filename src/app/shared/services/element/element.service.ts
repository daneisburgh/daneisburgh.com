import { Injectable } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { orderBy } from 'lodash';

export interface Element {
    icon: IconDefinition;
    title: string;
    startDate: Date;
    endDate: Date | undefined;
    imageDirectory: string | undefined;
    description: string;
}

@Injectable({
    providedIn: 'root'
})
export class ElementService {
    public sortData(elements: Element[]) {
        return orderBy(elements, 'endDate', 'desc');
    }

    public getDateSubtitle(element: Element) {
        const startDate = element.startDate;
        const endDate = element.endDate;

        if (endDate === undefined) {
            return `${this.getDateString(startDate)} - Present`;
        } else if (startDate.getTime() === endDate.getTime()) {
            return `${this.getDateString(startDate)}`;
        } else if (startDate.getFullYear() === endDate.getFullYear()) {
            return `${this.getDateMonth(startDate)} - ${this.getDateMonth(endDate)} ${startDate.getFullYear()}`;
        } else {
            return `${this.getDateString(startDate)} - ${this.getDateString(endDate)}`;
        }
    }

    private getDateString(date: Date) {
        return `${this.getDateMonth(date)} ${date.getFullYear()}`;
    }

    private getDateMonth(date: Date) {
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        return monthNames[date.getMonth()];
    }

}
