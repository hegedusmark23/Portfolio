import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  technologies = [
    {
      path: 'angular-logo.png',
      name: 'Angular'
    },
    {
      path: 'typescript-logo.png',
      name: 'TypeScript'
    },
    {
      path: 'javascript-logo.png',
      name: 'JavaScript'
    },
    {
      path: 'html-logo.png',
      name: 'HTML'
    },
    {
      path: 'firebase-logo.png',
      name: 'Firebase'
    },
    {
      path: 'git-logo.png',
      name: 'GIT'
    },
    {
      path: 'css-logo.png',
      name: 'CSS'
    },
    {
      path: 'restapi-logo.png',
      name: 'Rest-Api'
    },
    {
      path: 'scrum-logo.png',
      name: 'Scrum'
    },
    {
      path: 'material-design-logo.png',
      name: 'Material Design'
    },

  ]
  

}
