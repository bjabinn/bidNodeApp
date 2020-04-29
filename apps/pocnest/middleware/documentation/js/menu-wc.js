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
                    <a href="index.html" data-type="index-link">Application documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
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
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-deb2cfc231d5f9bc5d7f7bdf7542fba7"' : 'data-target="#xs-controllers-links-module-AppModule-deb2cfc231d5f9bc5d7f7bdf7542fba7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-deb2cfc231d5f9bc5d7f7bdf7542fba7"' :
                                            'id="xs-controllers-links-module-AppModule-deb2cfc231d5f9bc5d7f7bdf7542fba7"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-deb2cfc231d5f9bc5d7f7bdf7542fba7"' : 'data-target="#xs-injectables-links-module-AppModule-deb2cfc231d5f9bc5d7f7bdf7542fba7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-deb2cfc231d5f9bc5d7f7bdf7542fba7"' :
                                        'id="xs-injectables-links-module-AppModule-deb2cfc231d5f9bc5d7f7bdf7542fba7"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DocumentsModule.html" data-type="entity-link">DocumentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-DocumentsModule-4734993b93c12c0a56c0ec3a2daf6b5c"' : 'data-target="#xs-controllers-links-module-DocumentsModule-4734993b93c12c0a56c0ec3a2daf6b5c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DocumentsModule-4734993b93c12c0a56c0ec3a2daf6b5c"' :
                                            'id="xs-controllers-links-module-DocumentsModule-4734993b93c12c0a56c0ec3a2daf6b5c"' }>
                                            <li class="link">
                                                <a href="controllers/DocumentsController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DocumentsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DocumentsModule-4734993b93c12c0a56c0ec3a2daf6b5c"' : 'data-target="#xs-injectables-links-module-DocumentsModule-4734993b93c12c0a56c0ec3a2daf6b5c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DocumentsModule-4734993b93c12c0a56c0ec3a2daf6b5c"' :
                                        'id="xs-injectables-links-module-DocumentsModule-4734993b93c12c0a56c0ec3a2daf6b5c"' }>
                                        <li class="link">
                                            <a href="injectables/DocumentService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DocumentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StepsModule.html" data-type="entity-link">StepsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-StepsModule-d484d86574b4d7cb952d7acbbe6ef67e"' : 'data-target="#xs-controllers-links-module-StepsModule-d484d86574b4d7cb952d7acbbe6ef67e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StepsModule-d484d86574b4d7cb952d7acbbe6ef67e"' :
                                            'id="xs-controllers-links-module-StepsModule-d484d86574b4d7cb952d7acbbe6ef67e"' }>
                                            <li class="link">
                                                <a href="controllers/StepsController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StepsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-StepsModule-d484d86574b4d7cb952d7acbbe6ef67e"' : 'data-target="#xs-injectables-links-module-StepsModule-d484d86574b4d7cb952d7acbbe6ef67e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StepsModule-d484d86574b4d7cb952d7acbbe6ef67e"' :
                                        'id="xs-injectables-links-module-StepsModule-d484d86574b4d7cb952d7acbbe6ef67e"' }>
                                        <li class="link">
                                            <a href="injectables/StepsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>StepsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link">AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DocumentsController.html" data-type="entity-link">DocumentsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/StepsController.html" data-type="entity-link">StepsController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/DocumentBuilder.html" data-type="entity-link">DocumentBuilder</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link">AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DocumentService.html" data-type="entity-link">DocumentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StepsService.html" data-type="entity-link">StepsService</a>
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