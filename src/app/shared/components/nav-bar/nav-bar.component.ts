import { Component, Input } from '@angular/core';
import { faHome, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faAngular, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { NavData, IconsFa } from '../../../core/models/nav-bar.model';
import { TranslateService } from '@ngx-translate/core';

/**
 * Nav Bar component contains the navigation bar of the web page
 * @example <app-nav-bar [navData]="navBarData"></app-nav-bar>
 */
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  /** Object to build the link to the web sites */
  @Input() navData: Array<NavData>;
  /** cons from FontAwesome */
  icons: IconsFa = {
    faHomeLanding: faHome,
    faHTMLLanding: faHtml5,
    faCSSLanding: faCss3Alt,
    faAngularLanding: faAngular,
    faJsLanding: faJsSquare
  };

  /**
   * The "constructor"
   */
  constructor(
    private translate: TranslateService
  ) { }

  changeLanguage(lang: string) {
    this.translate.setDefaultLang(lang);
  }

}
