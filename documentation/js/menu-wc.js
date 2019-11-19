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
                                            'data-target="#components-links-module-AngularLandingModule-e1c9d41d5c71f942da4dfb3d95016940"' : 'data-target="#xs-components-links-module-AngularLandingModule-e1c9d41d5c71f942da4dfb3d95016940"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AngularLandingModule-e1c9d41d5c71f942da4dfb3d95016940"' :
                                            'id="xs-components-links-module-AngularLandingModule-e1c9d41d5c71f942da4dfb3d95016940"' }>
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
                                            'data-target="#components-links-module-AppModule-4b510f0307c8bf938f51600194bd8b80"' : 'data-target="#xs-components-links-module-AppModule-4b510f0307c8bf938f51600194bd8b80"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-4b510f0307c8bf938f51600194bd8b80"' :
                                            'id="xs-components-links-module-AppModule-4b510f0307c8bf938f51600194bd8b80"' }>
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
                                            'data-target="#components-links-module-FormComponentsModule-6f4434794e66ce33c89bde11c038dfc9"' : 'data-target="#xs-components-links-module-FormComponentsModule-6f4434794e66ce33c89bde11c038dfc9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormComponentsModule-6f4434794e66ce33c89bde11c038dfc9"' :
                                            'id="xs-components-links-module-FormComponentsModule-6f4434794e66ce33c89bde11c038dfc9"' }>
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
                                            'data-target="#components-links-module-FormModule-d6f1ec6a79f94dfdd452d27e528da6ed"' : 'data-target="#xs-components-links-module-FormModule-d6f1ec6a79f94dfdd452d27e528da6ed"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormModule-d6f1ec6a79f94dfdd452d27e528da6ed"' :
                                            'id="xs-components-links-module-FormModule-d6f1ec6a79f94dfdd452d27e528da6ed"' }>
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
                                            'data-target="#components-links-module-HomeModule-df125aa6b190a28b77dd7af40d679b36"' : 'data-target="#xs-components-links-module-HomeModule-df125aa6b190a28b77dd7af40d679b36"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-df125aa6b190a28b77dd7af40d679b36"' :
                                            'id="xs-components-links-module-HomeModule-df125aa6b190a28b77dd7af40d679b36"' }>
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
                                            'data-target="#components-links-module-SharedModule-3bc92661665339c413b3e8009cd9baa1"' : 'data-target="#xs-components-links-module-SharedModule-3bc92661665339c413b3e8009cd9baa1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-3bc92661665339c413b3e8009cd9baa1"' :
                                            'id="xs-components-links-module-SharedModule-3bc92661665339c413b3e8009cd9baa1"' }>
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
                            <img data-src="images/compodoc-vectorise-inverted.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});