import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboveTheFoldComponent } from "./above-the-fold/above-the-fold.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, AboveTheFoldComponent]
})
export class AppComponent {
  title = 'Mark Hegedus';
}
