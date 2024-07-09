import { Component } from "@angular/core";

import { HeroSection, UsageSection } from "@pages/main/sections";

@Component({
	selector: "app-main-page",
	standalone: true,
	imports: [HeroSection, UsageSection],
	templateUrl: "./main.page.html"
})
export class MainPage {}
