var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","redirectTo":"home","pathMatch":"full"},{"path":"home","loadChildren":"./containers/home/home.module#HomeModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/containers/home/home-routing.module.ts","module":"HomeRoutingModule","children":[{"path":"","component":"HomeComponent"}],"kind":"module"}],"module":"HomeModule"}]},{"path":"angular-landing","loadChildren":"./containers/angular-landing/angular-landing.module#AngularLandingModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/containers/angular-landing/angular-landing-routing.module.ts","module":"AngularLandingRoutingModule","children":[{"path":"","component":"AngularLandingComponent","children":[{"path":"form-components","loadChildren":"./containers/form-components/form-components.module#FormComponentsModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/containers/angular-landing/containers/form-components/form-components-routing.module.ts","module":"FormComponentsRoutingModule","children":[{"path":"","component":"FormComponentsComponent"}],"kind":"module"}],"module":"FormComponentsModule"}]},{"path":"form","loadChildren":"./containers/form/form.module#FormModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/containers/angular-landing/containers/form/form-routing.module.ts","module":"FormRoutingModule","children":[{"path":"","component":"FormComponent"}],"kind":"module"}],"module":"FormModule"}]},{"path":"others","loadChildren":"./containers/others/others.module#OthersModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/containers/angular-landing/containers/others/others-routing.module.ts","module":"OthersRoutingModule","children":[{"path":"","component":"OthersComponent"}],"kind":"module"}],"module":"OthersModule"}]}]}],"kind":"module"}],"module":"AngularLandingModule"}]},{"path":"html-landing","loadChildren":"./containers/html-landing/html-landing.module#HtmlLandingModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/containers/html-landing/html-landing-routing.module.ts","module":"HtmlLandingRoutingModule","children":[{"path":"","component":"HtmlLandingComponent"}],"kind":"module"}],"module":"HtmlLandingModule"}]},{"path":"css-landing","loadChildren":"./containers/css-landing/css-landing.module#CssLandingModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/containers/css-landing/css-landing-routing.module.ts","module":"CssLandingRoutingModule","children":[{"path":"","component":"CssLandingComponent"}],"kind":"module"}],"module":"CssLandingModule"}]},{"path":"js-landing","loadChildren":"./containers/js-landing/js-landing.module#JsLandingModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/containers/js-landing/js-landing-routing.module.ts","module":"JsLandingRoutingModule","children":[{"path":"","component":"JsLandingComponent"}],"kind":"module"}],"module":"JsLandingModule"}]},{"path":"**","redirectTo":"home"}],"kind":"module"}]}