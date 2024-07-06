import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { HeaderWidget } from "@widgets/header";
import { FooterWidget } from "@widgets/footer";

import { MainPage } from "@pages/main";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, HeaderWidget, MainPage, FooterWidget],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.less"
})
export class AppComponent {
	title = "Meet";
}