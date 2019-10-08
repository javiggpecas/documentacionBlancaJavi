import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faAngular, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { NavData } from './shared/models/nav-bar.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faHome = faHome;
  faHTML = faHtml5;
  faCSS = faCss3Alt;
  faAngular = faAngular;
  faJs = faJsSquare;
  title = 'Documentación Blanca Javi';

  navBarData: Array<NavData> = [
    {
      link: '/home',
      class: 'nav-link',
      activateClass: 'activated-tab',
      icon: 'faHome'
    },
    {
      link: '/angular',
      class: 'nav-link angColor',
      activateClass: 'activated-tab angColorActive',
      icon: 'faAngular'
    },
    {
      link: '/html',
      class: 'nav-link htmlColor',
      activateClass: 'activated-tab htmlColorActive',
      icon: 'faHTML'
    },
    {
      link: '/css',
      class: 'nav-link cssColor',
      activateClass: 'activated-tab cssColorActive',
      icon: 'faCSS'
    },
    {
      link: '/js',
      class: 'nav-link jsColor',
      activateClass: 'activated-tab jsColorActive',
      icon: 'faJs'
    }
  ];

  public isShowingRouteLoadIndicator: boolean;

  constructor(
    router: Router
  ) {
    this.isShowingRouteLoadIndicator = false;
    router.events.subscribe(( event: RouterEvent ): void => {
        if ( event instanceof RouteConfigLoadStart ) {
          this.isShowingRouteLoadIndicator = true;
        } else if ( event instanceof RouteConfigLoadEnd ) {
          this.isShowingRouteLoadIndicator = false;
        }
      }
    );
  }

  ngOnInit() { }

}
