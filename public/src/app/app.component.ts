import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'managment-tool';

  icons = { label: 'New', icon: 'c-icons create-new-icon' };
  svgIcon = '../assets/svg/create-new.svg';

  svgIcons = [
    {
      name: 'New', path: '../assets/svg/create-new.svg'
    },
    {
      name: 'List', path: '../assets/svg/list-mode.svg'
    },
    {
      name: 'Tiles', path: '../assets/svg/tiles-mode.svg'
    }
  ]

}
