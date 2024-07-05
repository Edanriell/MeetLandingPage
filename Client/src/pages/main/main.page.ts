import { Component } from "@angular/core";

import { HeaderWidget } from "@widgets/header";
import { FooterWidget } from "@widgets/footer";

import { HeroSection, UsageSection } from "@pages/main/sections";

@Component({
	selector: "app-main-page",
	standalone: true,
	imports: [HeaderWidget, HeroSection, UsageSection, FooterWidget],
	templateUrl: "./main.page.html",
	styleUrl: "./main.page.less"
})
export class MainPage {

} 
