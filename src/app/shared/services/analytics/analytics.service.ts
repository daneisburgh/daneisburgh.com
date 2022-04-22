import { Injectable } from "@angular/core";

// eslint-disable-next-line @typescript-eslint/ban-types
declare const gtag: Function;

type EventNames = "open_gallery" | "open_project_file" | "open_github_repo";
interface EventParams {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    image_directory?: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    github_repo?: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    file_name?: string;
}

@Injectable({
    providedIn: "root"
})
export class AnalyticsService {
    constructor() {}

    pageView() {
        this.event("page_view");
    }

    openGallery(imageDirectory: string) {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.event("open_gallery", { image_directory: imageDirectory });
    }

    openGitHubRepo(githubRepo: string) {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.event("open_github_repo", { github_repo: githubRepo });
    }

    openProjectFile(fileName: string) {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.event("open_project_file", { file_name: fileName });
    }

    private event(name: EventNames | Gtag.EventNames, params?: EventParams | Gtag.EventParams) {
        gtag("event", name, params);
    }
}
