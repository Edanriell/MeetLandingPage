import { Component, Input } from "@angular/core";

@Component({
	selector: "app-shared-link",
	standalone: true,
	imports: [],
	templateUrl: "./link.component.html",
	styleUrl: "./link.component.less"
})
export class LinkComponent {
	@Input({ required: true }) linkHref = "#";
	@Input() size: "normal" | "small" = "normal";
	@Input() shape: "pill" | "" = "";
	@Input() color: "lusty-lavender" | "acapulco-cliffs" = "lusty-lavender";

	get linkClasses(): string[] {
		return [
			'link',
			`link--size-${this.size}`,
			`link--shape--${this.shape}`,
			`link--color--${this.color}`
		];
	}
}
 