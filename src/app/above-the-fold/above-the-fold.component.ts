import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-above-the-fold',
    standalone: true,
    templateUrl: './above-the-fold.component.html',
    styleUrl: './above-the-fold.component.scss',
    imports: [HeaderComponent]
})
export class AboveTheFoldComponent {

}
