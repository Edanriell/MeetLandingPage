import { Component } from "@angular/core";

import { LinkComponent } from "@shared/ui/link";

@Component({
	selector: "app-footer-widget",
	standalone: true,
	imports: [LinkComponent],
	templateUrl: "./footer.widget.html",
	styleUrl: "./footer.widget.less"
})
export class FooterWidget {

}
