import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";

@Component({
	selector: "app-hero-section",
	standalone: true,
	imports: [NgOptimizedImage],
	templateUrl: "./hero.section.html",
	styleUrl: "./hero.section.less"
})
export class HeroSection {

}
