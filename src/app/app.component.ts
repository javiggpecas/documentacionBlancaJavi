import { Component } from '@angular/core';
import { Router, RouterEvent, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faAngular, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { NavData } from './core/models/nav-bar.model';

/**
 * Base and init app component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /** Home icon */
  faHome = faHome;
  /** HTML5 icon */
  faHTML = faHtml5;
  /** CSS3 icon */
  faCSS = faCss3Alt;
  /** Angular icon */
  faAngular = faAngular;
  /** JavaScript icon */
  faJs = faJsSquare;
  /** Title of the webpage */
  title: string = 'Documentación Blanca Javi' as string;

  /** Object to make the navigation bar */
  navBarData: Array<NavData> = [
    {
      link: '/home',
      class: 'nav-enlace',
      activateClass: 'activated-tab',
      icon: 'faHomeLanding',
      title: 'Home'
    },
    {
      link: '/angular-landing',
      class: 'nav-enlace angColor',
      activateClass: 'activated-tab angColorActive',
      icon: 'faAngularLanding',
      title: 'Angular'
    },
    {
      link: '/html-landing',
      class: 'nav-enlace htmlColor',
      activateClass: 'activated-tab htmlColorActive',
      icon: 'faHTMLLanding',
      title: 'HTML'
    },
    {
      link: '/css-landing',
      class: 'nav-enlace cssColor',
      activateClass: 'activated-tab cssColorActive',
      icon: 'faCSSLanding',
      title: 'CSS'
    },
    {
      link: '/js-landing',
      class: 'nav-enlace jsColor',
      activateClass: 'activated-tab jsColorActive',
      icon: 'faJsLanding',
      title: 'JavaScript'
    }
  ];
  /** Booleano que indica si está mostrandose la url que se ha solicitado */
  public isShowingRouteLoadIndicator: boolean;

  /**
   * The "constructor"
   *
   * @param router Init angular routes
   */
  constructor(
    private router: Router
  ) {
    this.isPageLoading();
  }

  /**
   * Subscribe and detect when is loading on change route
   */
  isPageLoading(): void {
    this.isShowingRouteLoadIndicator = false;
    this.router.events.subscribe(( event: RouterEvent ): void => {
      if ( event instanceof RouteConfigLoadStart ) { // Modifica la variable del spinner a true cuando inicia la carga de la pagina
        this.isShowingRouteLoadIndicator = true;
      } else if ( event instanceof RouteConfigLoadEnd ) { // Lo modifica a false cuando finaliza la carga de la pagina
        this.isShowingRouteLoadIndicator = false;
      }
    });
  }
}
