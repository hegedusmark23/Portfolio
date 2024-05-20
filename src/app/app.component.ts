import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MainContentComponent } from "./main-content/main-content.component";
import * as AOS from "aos"

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FooterComponent, HeaderComponent, MainContentComponent]
})
export class AppComponent {
  title = 'Mark Hegedus';
  ngOnInit(){
   if (typeof document !== 'undefined') {
     AOS.init();
   }
  }
}
