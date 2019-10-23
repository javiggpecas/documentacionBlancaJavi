import { Component, OnInit } from '@angular/core';
import { NavData } from '../../core/models/nav-bar.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class AngularComponent implements OnInit {

  navBarData: Array<NavData> = [
    {
      link: '/angular/forms',
      class: 'nav-enlace',
      activateClass: 'activated-tab',
      text: 'Formularios',
      title: 'Formularios'
    },
    {
      link: '/angular/prueba-uno',
      class: 'nav-enlace',
      activateClass: 'activated-tab',
      text: 'Servicios',
      title: 'Servicios'
    },
    {
      link: '/angular/prueba-dos',
      class: 'nav-enlace',
      activateClass: 'activated-tab',
      text: 'Contacto',
      title: 'Contacto'
    }
  ];

  constructor() { }

  ngOnInit() { }
}
