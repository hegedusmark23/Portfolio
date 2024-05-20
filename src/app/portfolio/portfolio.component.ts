import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  portfolio = [
    {
      name: 'Join',
      image: 'join.png',
      techstack: 'Angular | Typescript | HTML | CSS | Firebase',
      description: 'Task Manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories',
      flex_style: 'row',
      alignment: 'start',
      github_link: 'https://github.com/hegedusmark23/Join',
      test_link: 'https://portfolio.mark-hegedus.com/join/'
    },
    {
      name: 'El Pollo Loco',
      image: 'pollo-loco.png',
      techstack: 'JavaScript | HTML | CSS ',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to collect coins, and defeat the chikens.',
      flex_style: 'row-reverse',
      alignment: 'end',
      github_link: 'https://github.com/hegedusmark23/El-Pollo-Loco',
      test_link: 'https://portfolio.mark-hegedus.com/el_pollo_loco/'
    },
    {
      name: 'Pokedex',
      image: 'pokedex.png',
      techstack: 'JavaScript | HTML | CSS | Api ',
      description: 'Based on the PokéAPI a simple library that provides and catalouges pokemon information.',
      flex_style: 'row',
      alignment: 'start',
      github_link: 'https://github.com/hegedusmark23/Pokedex',
      test_link: 'https://portfolio.mark-hegedus.com/pokedex/'
    }
  ]
}
