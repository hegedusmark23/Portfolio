import { Component } from '@angular/core';
import { ContactformComponent } from "../../app/contactform/contactform.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
    imports: [ContactformComponent, CommonModule]
})
export class ContactComponent {
imgSrc: string = '../../assets/img/design-components/goup-btn.png';

}
