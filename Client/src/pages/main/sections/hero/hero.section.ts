import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";

import { LinkComponent } from "@shared/ui/link";

@Component({
	selector: "app-hero-section",
	standalone: true,
	imports: [NgOptimizedImage, LinkComponent],
	templateUrl: "./hero.section.html",
	styleUrl: "./hero.section.less"
})
export class HeroSection {

}
