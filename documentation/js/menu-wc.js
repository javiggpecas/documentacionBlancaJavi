'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">documentacion-blanca-javi documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AngularLandingModule.html" data-type="entity-link">AngularLandingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AngularLandingModule-13ea63d867a8cbd86b9f0aedce8ab5dd"' : 'data-target="#xs-components-links-module-AngularLandingModule-13ea63d867a8cbd86b9f0aedce8ab5dd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AngularLandingModule-13ea63d867a8cbd86b9f0aedce8ab5dd"' :
                                            'id="xs-components-links-module-AngularLandingModule-13ea63d867a8cbd86b9f0aedce8ab5dd"' }>
                                            <li class="link">
                                                <a href="components/AngularLandingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AngularLandingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AngularLandingRoutingModule.html" data-type="entity-link">AngularLandingRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-97a919a8ad33047160478be43495bcde"' : 'data-target="#xs-components-links-module-AppModule-97a919a8ad33047160478be43495bcde"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-97a919a8ad33047160478be43495bcde"' :
                                            'id="xs-components-links-module-AppModule-97a919a8ad33047160478be43495bcde"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CssLandingModule.html" data-type="entity-link">CssLandingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CssLandingModule-7e5af29babcadd2d856cddc7f7abea15"' : 'data-target="#xs-components-links-module-CssLandingModule-7e5af29babcadd2d856cddc7f7abea15"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CssLandingModule-7e5af29babcadd2d856cddc7f7abea15"' :
                                            'id="xs-components-links-module-CssLandingModule-7e5af29babcadd2d856cddc7f7abea15"' }>
                                            <li class="link">
                                                <a href="components/CssLandingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CssLandingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CssLandingRoutingModule.html" data-type="entity-link">CssLandingRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FormComponentsModule.html" data-type="entity-link">FormComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormComponentsModule-82f84771bb534cb54ab27aaf0a99598c"' : 'data-target="#xs-components-links-module-FormComponentsModule-82f84771bb534cb54ab27aaf0a99598c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormComponentsModule-82f84771bb534cb54ab27aaf0a99598c"' :
                                            'id="xs-components-links-module-FormComponentsModule-82f84771bb534cb54ab27aaf0a99598c"' }>
                                            <li class="link">
                                                <a href="components/FormComponentsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormComponentsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormComponentsRoutingModule.html" data-type="entity-link">FormComponentsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FormModule.html" data-type="entity-link">FormModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormModule-8e17c8ae6882759772732b5ba1b18197"' : 'data-target="#xs-components-links-module-FormModule-8e17c8ae6882759772732b5ba1b18197"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormModule-8e17c8ae6882759772732b5ba1b18197"' :
                                            'id="xs-components-links-module-FormModule-8e17c8ae6882759772732b5ba1b18197"' }>
                                            <li class="link">
                                                <a href="components/FormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormRoutingModule.html" data-type="entity-link">FormRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-a236d856893d42dc1256655b6c323120"' : 'data-target="#xs-components-links-module-HomeModule-a236d856893d42dc1256655b6c323120"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-a236d856893d42dc1256655b6c323120"' :
                                            'id="xs-components-links-module-HomeModule-a236d856893d42dc1256655b6c323120"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link">HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HtmlLandingModule.html" data-type="entity-link">HtmlLandingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HtmlLandingModule-9464ed0c6a71b1d1c6fa115982d14e33"' : 'data-target="#xs-components-links-module-HtmlLandingModule-9464ed0c6a71b1d1c6fa115982d14e33"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HtmlLandingModule-9464ed0c6a71b1d1c6fa115982d14e33"' :
                                            'id="xs-components-links-module-HtmlLandingModule-9464ed0c6a71b1d1c6fa115982d14e33"' }>
                                            <li class="link">
                                                <a href="components/HtmlLandingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HtmlLandingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HtmlLandingRoutingModule.html" data-type="entity-link">HtmlLandingRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/JsLandingModule.html" data-type="entity-link">JsLandingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JsLandingModule-18d7d5bff1837267bea78e2e4399ec14"' : 'data-target="#xs-components-links-module-JsLandingModule-18d7d5bff1837267bea78e2e4399ec14"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JsLandingModule-18d7d5bff1837267bea78e2e4399ec14"' :
                                            'id="xs-components-links-module-JsLandingModule-18d7d5bff1837267bea78e2e4399ec14"' }>
                                            <li class="link">
                                                <a href="components/JsLandingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">JsLandingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JsLandingRoutingModule.html" data-type="entity-link">JsLandingRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OthersModule.html" data-type="entity-link">OthersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OthersModule-23d2e49a175a81fa1f1ce2b724a9cc7d"' : 'data-target="#xs-components-links-module-OthersModule-23d2e49a175a81fa1f1ce2b724a9cc7d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OthersModule-23d2e49a175a81fa1f1ce2b724a9cc7d"' :
                                            'id="xs-components-links-module-OthersModule-23d2e49a175a81fa1f1ce2b724a9cc7d"' }>
                                            <li class="link">
                                                <a href="components/OthersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OthersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OthersRoutingModule.html" data-type="entity-link">OthersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-3edeea2690abd34b884a57c71ecb8c51"' : 'data-target="#xs-components-links-module-SharedModule-3edeea2690abd34b884a57c71ecb8c51"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-3edeea2690abd34b884a57c71ecb8c51"' :
                                            'id="xs-components-links-module-SharedModule-3edeea2690abd34b884a57c71ecb8c51"' }>
                                            <li class="link">
                                                <a href="components/AccordionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccordionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavBarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IconsFa.html" data-type="entity-link">IconsFa</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NavData.html" data-type="entity-link">NavData</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});