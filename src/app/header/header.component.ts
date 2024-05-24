import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../app-translate/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  focusEffect: number | null = null;
  activeLang: number | null = 1;
constructor(private translationService: TranslationService){}

setLanguage(lang: string, index: number) {
  this.translationService.setDefaultLang(lang);
  this.activeLang = index;
}

FocusEffectActive(index: number){
  this.focusEffect = index
}

}
