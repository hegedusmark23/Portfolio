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
      name: 'Join',
      image: 'join.png',
      techstack: 'Angular | Typescript | HTML | CSS | Firebase',
      description: 'joinDescription',
      flex_style: 'row',
      alignment: 'start',
      github_link: 'https://github.com/hegedusmark23/Join',
      test_link: 'https://portfolio.mark-hegedus.com/join/',
      fade: 'fade-left'
    },
    {
      name: 'El Pollo Loco',
      image: 'pollo-loco.png',
      techstack: 'JavaScript | HTML | CSS ',
      description: 'elPolloLocoDescription',
      flex_style: 'row-reverse',
      alignment: 'end',
      github_link: 'https://github.com/hegedusmark23/El-Pollo-Loco',
      test_link: 'https://portfolio.mark-hegedus.com/el_pollo_loco/',
      fade: 'fade-right'
    },
    {
      name: 'Pokedex',
      image: 'pokedex.png',
      techstack: 'JavaScript | HTML | CSS | Api ',
      description: 'pokedexDescription',
      flex_style: 'row',
      alignment: 'start',
      github_link: 'https://github.com/hegedusmark23/Pokedex',
      test_link: 'https://portfolio.mark-hegedus.com/pokedex/',
      fade: 'fade-left'
    },
    {
      name: 'Simple CRM',
      image: 'simplecrm.png',
      techstack: 'Angular | Firebase ',
      description: 'simpleCrmDescription',
      flex_style: 'row-reverse',
      alignment: 'end',
      github_link: 'https://github.com/hegedusmark23/SimpleCRM',
      test_link: 'https://portfolio.mark-hegedus.com/simplecrm/',
      fade: 'fade-right'
    }
  ]


}
