import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent {
    public readonly imageDirectory = 'about';
    public readonly galleryData = [
        { name: 'motorcycle', description: 'One of our favorite engagement photos' },
        { name: 'cabo', description: 'Having fun during our first trip to Cabo San Lucas' },
        { name: 'zugspitze', description: 'Staying warm on top of Zugspitze Mountain in Germany' },
        { name: 'fonteinen', description: 'Enjoying a lambic at 3 Fonteinen brewery in Belgium' },
        { name: 'wedding1', description: 'Posing together after our first look' },
        { name: 'wedding2', description: 'Trying to casually walk and not step on Sarah\'s dress' }
    ];

    public getImageFilePath(name: string) {
        return `assets/images/about/${name}.jpg`;
    }
}
