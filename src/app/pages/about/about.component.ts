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

    get yearsWorking(): number {
        return Math.abs(
            new Date(Date.now() - Date.parse("01 May 2018 00:00:00 GMT")).getUTCFullYear() - 1970
        );
    }

    getImageFilePath(name: string) {
        return `assets/images/about/${name}.jpg`;
    }
}
