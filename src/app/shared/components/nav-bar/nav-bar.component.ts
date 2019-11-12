import { Component, OnInit, Input } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faAngular, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { NavData, IconsFa } from '../../../core/models/nav-bar.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() navData: Array<NavData>;
  icons: IconsFa = {
    faHomeLanding: faHome,
    faHTMLLanding: faHtml5,
    faCSSLanding: faCss3Alt,
    faAngularLanding: faAngular,
    faJsLanding: faJsSquare
  };

  constructor() { }

  ngOnInit() {
  }

}
