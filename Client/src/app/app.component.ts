import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { MainPage } from "@pages/main";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, MainPage],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.less"
})
export class AppComponent {
	title = "MeetLandingPage";
}