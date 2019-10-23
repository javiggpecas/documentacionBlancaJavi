import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faAngular, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { NavData } from './core/models/nav-bar.model';

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
      class: 'nav-enlace',
      activateClass: 'activated-tab',
      icon: 'faHome',
      title: 'Home'
    },
    {
      link: '/angular',
      class: 'nav-enlace angColor',
      activateClass: 'activated-tab angColorActive',
      icon: 'faAngular',
      title: 'Angular'
    },
    {
      link: '/html',
      class: 'nav-enlace htmlColor',
      activateClass: 'activated-tab htmlColorActive',
      icon: 'faHTML',
      title: 'HTML'
    },
    {
      link: '/css',
      class: 'nav-enlace cssColor',
      activateClass: 'activated-tab cssColorActive',
      icon: 'faCSS',
      title: 'CSS'
    },
    {
      link: '/js',
      class: 'nav-enlace jsColor',
      activateClass: 'activated-tab jsColorActive',
      icon: 'faJs',
      title: 'JavaScript'
    }
  ];

  public isShowingRouteLoadIndicator: boolean;

  constructor(
    private router: Router
  ) {
    this.isPageLoading();
  }

  ngOnInit() { }

  /**
   * @description Subscribe and detect when is loading on change route
  */
  isPageLoading(): void {
    this.isShowingRouteLoadIndicator = false;
    this.router.events.subscribe(( event: RouterEvent ): void => {
      if ( event instanceof RouteConfigLoadStart ) {
        this.isShowingRouteLoadIndicator = true;
      } else if ( event instanceof RouteConfigLoadEnd ) {
        this.isShowingRouteLoadIndicator = false;
      }
    });
  }
}
