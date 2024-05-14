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
      image: '',
      techstack: 'Angular | Typescript | HTML | CSS | Firebase',
      description: 'Task Manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories',
      style: 'row'
    },
    {
      name: 'El Pollo Loco',
      image: '',
      techstack: 'JavaScript | HTML | CSS ',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to collect coins, and defeat the chikens.',
      style: 'row-reverse'
    },
    {
      name: 'Pokedex',
      image: '',
      techstack: 'JavaScript | HTML | CSS | Api ',
      description: 'Based on the PokéAPI a simple library that provides and catalouges pokemon information.',
      style: 'row'
    }
  ]
}
