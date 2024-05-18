import { Component } from '@angular/core';
import { ContactformComponent } from "../../app/contactform/contactform.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
    imports: [ContactformComponent]
})
export class ContactComponent {
imgSrc: string = '../../assets/img/design-components/goup-btn.png';

}
