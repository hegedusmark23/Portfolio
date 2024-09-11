import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent{

  portfolio = [
    {
    name: 'DABubble',
      image: 'dabubble.png',
      techstack: 'Angular | Typescript | HTML | CSS | Firebase',
      description: 'daBubbleDescription',
      flex_style: 'row-reverse',
      alignment: 'end',
      github_link: 'https://github.com/hegedusmark23/dabubble',
      test_link: 'https://dabubble.mark-hegedus.com/',
      fade: 'fade-left'
    },
    {
      name: 'Join',
      image: 'join.png',
      techstack: 'JavaScript | HTML | CSS ',
      description: 'joinDescription',
      flex_style: 'row',
      alignment: 'start',
      github_link: 'https://github.com/hegedusmark23/Join',
      test_link: 'https://portfolio.mark-hegedus.com/join/',
      fade: 'fade-right'
    },
    {
      name: 'El Pollo Loco',
      image: 'pollo-loco.png',
      techstack: 'JavaScript | HTML | CSS',
      description: 'elPolloLocoDescription',
      flex_style: 'row-reverse',
      alignment: 'end',
      github_link: 'https://github.com/hegedusmark23/El-Pollo-Loco',
      test_link: 'https://portfolio.mark-hegedus.com/el_pollo_loco/',
      fade: 'fade-left'
    }
  ]


}
