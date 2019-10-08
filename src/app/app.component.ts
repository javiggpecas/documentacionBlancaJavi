import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faAngular, faJsSquare } from '@fortawesome/free-brands-svg-icons';

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
  title = 'proyecto-pruebas';
  ngOnInit() { }

}
