import { Component, Input } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";

@Component({
	selector: "app-shared-link",
	standalone: true,
	templateUrl: "./link.component.html",
	styleUrl: "./link.component.less",
	animations: [
		trigger("linkAnimation", [
			state("default", style({
				transform: "scale(1, 1)",
				boxShadow: "none"
			})),
			state("hovered", style({
				transform: "scale(1.1, 1.1)",
				boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.1)"
			})),
			state("active", style({
				transform: "scale(0.95, 0.95)",
				boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.1)"
			})),
			transition("default <=> hovered", [
				animate("0.6s cubic-bezier(0.165, 0.84, 0.44, 1)")
			]),
			transition("hovered <=> active", [
				animate("0.6s cubic-bezier(0.165, 0.84, 0.44, 1)")
			]),
			transition("default <=> active", [
				animate("0.6s cubic-bezier(0.165, 0.84, 0.44, 1)")
			])
		])
	] 
})
export class LinkComponent {
	@Input({ required: true }) linkHref = "#";
	@Input() size: "normal" | "small" = "normal";
	@Input() shape: "pill" | "" = "";
	@Input() color: "lusty-lavender" | "acapulco-cliffs" = "lusty-lavender";

	isHovered = false;
	isActive = false;

	get linkClasses(): string[] {
		return [
			"link",
			`link--size-${this.size}`,
			`link--shape--${this.shape}`,
			`link--color--${this.color}`
		];
	}

	get dynamicBackgroundColor() {
		if (this.isHovered) {
			if (this.color === "lusty-lavender") {
				return {
					backgroundColor: "#b18bdd"
				}
			} else if (this.color === "acapulco-cliffs") {
				return {
					backgroundColor: "#71c0d4"
				}
			}
		}
		return {};
	}

	onMouseEnter() {
		this.isHovered = true;
	}

	onMouseLeave() {
		this.isHovered = false;
		this.isActive = false;
	}

	onMouseDown() {
		this.isActive = true;
	}

	onMouseUp() {
		this.isActive = false;
	}

	onTouchStart() {
		this.isHovered = true;
		this.isActive = true;
	}

	onTouchEnd() {
		this.isHovered = false;
		this.isActive = false;
	}
}
 