import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";

@Component({
	selector: "app-header-widget",
	standalone: true, 
	imports: [NgOptimizedImage],
	templateUrl: "./header.widget.html",
	styleUrl: "./header.widget.less"
})
export class HeaderWidget {}
