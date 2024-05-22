import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MainContentComponent } from "./main-content/main-content.component";
import * as AOS from "aos"
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from './app-translate/translation.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FooterComponent, HeaderComponent, MainContentComponent, TranslateModule]
})
export class AppComponent implements OnInit{
  title = 'Mark Hegedus';
  ngOnInit(){
   if (typeof document !== 'undefined') {
     AOS.init();
   }
   this.translationService.setDefaultLang('en');
  }

  translationService = inject(TranslationService)
}
