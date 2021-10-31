import { Component } from "@angular/core";

@Component({
    selector: "app-about",
    templateUrl: "./about.component.html",
    styleUrls: ["./about.component.css"]
})
export class AboutComponent {
    readonly imageDirectory = "about";
    readonly galleryData = [
        {
            name: "motorcycle",
            description: "One of our favorite engagement photos"
        },
        {
            name: "cabo",
            description: "Having fun during our first trip to Cabo San Lucas"
        },
        {
            name: "zugspitze",
            description: "Staying warm on top of Zugspitze Mountain in Germany"
        },
        {
            name: "fonteinen",
            description: "Enjoying a lambic at 3 Fonteinen brewery in Belgium"
        },
        {
            name: "wedding",
            description: "Posing together after our first look"
        },
        { name: "house", description: "Our first home in West Chester, Ohio" }
    ];

    getImageFilePath(name: string) {
        return `assets/images/about/${name}.jpg`;
    }
}
