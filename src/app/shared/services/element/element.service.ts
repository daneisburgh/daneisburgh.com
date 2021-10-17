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
    sortData(elements: Element[]) {
        return orderBy(elements, 'endDate', 'desc');
    }

    getDateSubtitle(element: Element) {
        const startDate = element.startDate;
        const endDate = element.endDate;
        const startDateString = this.getDateString(startDate);

        if (endDate === undefined) {
            return `${startDateString} - Present`;
        } else if (startDate.getTime() === endDate.getTime()) {
            return `${startDateString}`;
        } else if (startDate.getFullYear() === endDate.getFullYear()) {
            return `${this.getDateMonth(startDate)} - ${this.getDateMonth(endDate)} ${startDate.getFullYear()}`;
        } else {
            return `${startDateString} - ${this.getDateString(endDate)}`;
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
