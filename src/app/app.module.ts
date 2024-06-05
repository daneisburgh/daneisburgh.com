import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./pages/about/about.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { TimelineComponent } from "./pages/timeline/timeline.component";
import { HomeComponent } from "./pages/home/home.component";
import { ProjectCardsComponent } from "./pages/projects/project-cards/project-cards.component";
import { ImageGalleryComponent } from "./shared/image-gallery/image-gallery.component";
import { NgImageFullscreenViewModule } from "./shared/ng-image-fullscreen-view/ng-image-fullscreen-view.module";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        TimelineComponent,
        ProjectsComponent,
        ProjectCardsComponent,
        ImageGalleryComponent
    ],
    imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, NgImageFullscreenViewModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
