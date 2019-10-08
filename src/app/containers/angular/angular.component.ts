import { Component, OnInit } from '@angular/core';
import { NavData } from 'src/app/shared/models/nav-bar.model';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {

  navBarData: Array<NavData> = [
    {
      link: '/angular/forms',
      class: 'nav-link',
      activateClass: 'activated-tab',
      text: 'Formularios'
    },
    {
      link: '/angular/prueba-uno',
      class: 'nav-link',
      activateClass: 'activated-tab',
      text: 'Servicios'
    },
    {
      link: '/angular/prueba-dos',
      class: 'nav-link',
      activateClass: 'activated-tab',
      text: 'Contacto'
    }
  ];

  constructor() { }

  ngOnInit() { }
}
