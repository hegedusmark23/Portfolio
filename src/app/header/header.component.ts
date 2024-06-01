import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../app-translate/translation.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [TranslateModule, CommonModule, FormsModule]
})
export class HeaderComponent {
  focusEffect: number | null = null;
  activeLang: number | null = 1;
  model: any;
  @Input() init: boolean | undefined;
  @Output() opened = new EventEmitter<any>();
  overlayActive: boolean = false;
  active = false;

  constructor(private translationService: TranslationService) { }

  ngOnInit() {
    this.active = this.init || false;
  }

  toggleOverlay() {
    this.overlayActive = !this.overlayActive;
  }

  onBurgerClicked() {
    this.active = !this.active;
    this.opened.emit();
    this.toggleOverlay();
  }

  setLanguage(lang: string, index: number) {
    this.translationService.setDefaultLang(lang);
    this.activeLang = index;
  }

  FocusEffectActive(index: number) {
    this.focusEffect = index
  }

}
