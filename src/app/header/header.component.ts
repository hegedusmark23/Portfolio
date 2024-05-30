import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../app-translate/translation.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BurgerMenuComponent } from "../burger-menu/burger-menu.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [TranslateModule, CommonModule, FormsModule, BurgerMenuComponent]
})
export class HeaderComponent {
  focusEffect: number | null = null;
  activeLang: number | null = 1;
model: any;
constructor(private translationService: TranslationService){}

setLanguage(lang: string, index: number) {
  this.translationService.setDefaultLang(lang);
  this.activeLang = index;
}

FocusEffectActive(index: number){
  this.focusEffect = index
}

}
