import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})

export class PrivacyPolicyComponent implements OnInit {
  imgSrc: string = '../../assets/img/design-components/goup-btn.png';
  dataTypesList!: string[];
  categoriesList!: string[];
  purposesList!: string[];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translate.get('privacyPolicy.dataTypesList').subscribe((res: any) => {
      this.dataTypesList = Array.isArray(res) ? res : [];
    });

    this.translate.get('privacyPolicy.categoriesList').subscribe((res: any) => {
      this.categoriesList = Array.isArray(res) ? res : [];
    });

    this.translate.get('privacyPolicy.purposesList').subscribe((res: any) => {
      this.purposesList = Array.isArray(res) ? res : [];
    });
  }
}
