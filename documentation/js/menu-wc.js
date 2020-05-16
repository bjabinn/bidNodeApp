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
                    <a href="index.html" data-type="index-link">bid documentation</a>
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
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-b6f3b6138085ba95c92ae6a53168897e"' : 'data-target="#xs-components-links-module-AppModule-b6f3b6138085ba95c92ae6a53168897e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b6f3b6138085ba95c92ae6a53168897e"' :
                                            'id="xs-components-links-module-AppModule-b6f3b6138085ba95c92ae6a53168897e"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-c2f45fe48c4051928b46a448b3854afa-1"' : 'data-target="#xs-components-links-module-AppModule-c2f45fe48c4051928b46a448b3854afa-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c2f45fe48c4051928b46a448b3854afa-1"' :
                                            'id="xs-components-links-module-AppModule-c2f45fe48c4051928b46a448b3854afa-1"' }>
                                            <li class="link">
                                                <a href="components/AppComponent-1.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ButtonsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ButtonsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorHandlerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ErrorHandlerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeadingsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeadingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OldStyleGuideComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OldStyleGuideComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OperationFiltersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OperationFiltersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OperationListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OperationListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectLanguageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SelectLanguageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TablesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TablesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-deb2cfc231d5f9bc5d7f7bdf7542fba7-2"' : 'data-target="#xs-controllers-links-module-AppModule-deb2cfc231d5f9bc5d7f7bdf7542fba7-2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-deb2cfc231d5f9bc5d7f7bdf7542fba7-2"' :
                                            'id="xs-controllers-links-module-AppModule-deb2cfc231d5f9bc5d7f7bdf7542fba7-2"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-deb2cfc231d5f9bc5d7f7bdf7542fba7-2"' : 'data-target="#xs-injectables-links-module-AppModule-deb2cfc231d5f9bc5d7f7bdf7542fba7-2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-deb2cfc231d5f9bc5d7f7bdf7542fba7-2"' :
                                        'id="xs-injectables-links-module-AppModule-deb2cfc231d5f9bc5d7f7bdf7542fba7-2"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BidApiServiceModule.html" data-type="entity-link">BidApiServiceModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BidHandleErrorsModule.html" data-type="entity-link">BidHandleErrorsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BidSecurityModule.html" data-type="entity-link">BidSecurityModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BidTranslateModule.html" data-type="entity-link">BidTranslateModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BidUiModule.html" data-type="entity-link">BidUiModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BidUtilsModule.html" data-type="entity-link">BidUtilsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DistributionListModule.html" data-type="entity-link">DistributionListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DistributionListModule-158084e87044c8227a55728ee7d8398f"' : 'data-target="#xs-components-links-module-DistributionListModule-158084e87044c8227a55728ee7d8398f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DistributionListModule-158084e87044c8227a55728ee7d8398f"' :
                                            'id="xs-components-links-module-DistributionListModule-158084e87044c8227a55728ee7d8398f"' }>
                                            <li class="link">
                                                <a href="components/DistributionListPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DistributionListPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalConfirmComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalConfirmComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableViewerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableViewerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DistributionListRouting.html" data-type="entity-link">DistributionListRouting</a>
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
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-0aeda5d3d4f565adfd0dd1b2b571ec72"' : 'data-target="#xs-components-links-module-SharedModule-0aeda5d3d4f565adfd0dd1b2b571ec72"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-0aeda5d3d4f565adfd0dd1b2b571ec72"' :
                                            'id="xs-components-links-module-SharedModule-0aeda5d3d4f565adfd0dd1b2b571ec72"' }>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Step0Module.html" data-type="entity-link">Step0Module</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Step0Module-a62dc3e8755525a26a01e5a72863253b"' : 'data-target="#xs-components-links-module-Step0Module-a62dc3e8755525a26a01e5a72863253b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Step0Module-a62dc3e8755525a26a01e5a72863253b"' :
                                            'id="xs-components-links-module-Step0Module-a62dc3e8755525a26a01e5a72863253b"' }>
                                            <li class="link">
                                                <a href="components/Step0Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Step0Component</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Step0RoutingModule.html" data-type="entity-link">Step0RoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Step3Module.html" data-type="entity-link">Step3Module</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Step3Module-de62bd5a831c68d833a1dcf1f8d411af"' : 'data-target="#xs-components-links-module-Step3Module-de62bd5a831c68d833a1dcf1f8d411af"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Step3Module-de62bd5a831c68d833a1dcf1f8d411af"' :
                                            'id="xs-components-links-module-Step3Module-de62bd5a831c68d833a1dcf1f8d411af"' }>
                                            <li class="link">
                                                <a href="components/CirculationDistributedPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CirculationDistributedPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CirculationPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CirculationPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Step3RoutingModule.html" data-type="entity-link">Step3RoutingModule</a>
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
                            <li class="link">
                                <a href="modules/UploadPackageModule.html" data-type="entity-link">UploadPackageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UploadPackageModule-8197601be68c7d11057358ba32b1848d"' : 'data-target="#xs-components-links-module-UploadPackageModule-8197601be68c7d11057358ba32b1848d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UploadPackageModule-8197601be68c7d11057358ba32b1848d"' :
                                            'id="xs-components-links-module-UploadPackageModule-8197601be68c7d11057358ba32b1848d"' }>
                                            <li class="link">
                                                <a href="components/UploadPackagePageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UploadPackagePageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UploadPackageModule.html" data-type="entity-link">UploadPackageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UploadPackageModule-6c0b0e87c68a6d4c6370153fe624a393-1"' : 'data-target="#xs-components-links-module-UploadPackageModule-6c0b0e87c68a6d4c6370153fe624a393-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UploadPackageModule-6c0b0e87c68a6d4c6370153fe624a393-1"' :
                                            'id="xs-components-links-module-UploadPackageModule-6c0b0e87c68a6d4c6370153fe624a393-1"' }>
                                            <li class="link">
                                                <a href="components/DocumentItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DocumentItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DocumentViewerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DocumentViewerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UploadFilesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UploadFilesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UploadPackageRoutingModule.html" data-type="entity-link">UploadPackageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/VpcManagerModule.html" data-type="entity-link">VpcManagerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VpcManagerModule-e65ef426f209e7a5477661af05fdb6d7"' : 'data-target="#xs-components-links-module-VpcManagerModule-e65ef426f209e7a5477661af05fdb6d7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VpcManagerModule-e65ef426f209e7a5477661af05fdb6d7"' :
                                            'id="xs-components-links-module-VpcManagerModule-e65ef426f209e7a5477661af05fdb6d7"' }>
                                            <li class="link">
                                                <a href="components/VpcManagerPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VpcManagerPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VpcManagerRoutingModule.html" data-type="entity-link">VpcManagerRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ApiDemoComponent.html" data-type="entity-link">ApiDemoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ModalConfirmComponent-1.html" data-type="entity-link">ModalConfirmComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ModalConfirmComponent-2.html" data-type="entity-link">ModalConfirmComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SelectLanguageComponent-1.html" data-type="entity-link">SelectLanguageComponent</a>
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
                                <a href="classes/CirculationPeriodMapper.html" data-type="entity-link">CirculationPeriodMapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/DistributionListMapper.html" data-type="entity-link">DistributionListMapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/DistributionListMemberMapper.html" data-type="entity-link">DistributionListMemberMapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/DocumentAction.html" data-type="entity-link">DocumentAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/DocumentBuilder.html" data-type="entity-link">DocumentBuilder</a>
                            </li>
                            <li class="link">
                                <a href="classes/DocumentLanguageMapper.html" data-type="entity-link">DocumentLanguageMapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/DocumentMapper.html" data-type="entity-link">DocumentMapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/DocumentMetadata.html" data-type="entity-link">DocumentMetadata</a>
                            </li>
                            <li class="link">
                                <a href="classes/DocumentModel.html" data-type="entity-link">DocumentModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/DocumentsPackageMapper.html" data-type="entity-link">DocumentsPackageMapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/Dtos.html" data-type="entity-link">Dtos</a>
                            </li>
                            <li class="link">
                                <a href="classes/ErrorMapper.html" data-type="entity-link">ErrorMapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/FaceToFaceMeetingMapper.html" data-type="entity-link">FaceToFaceMeetingMapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpError.html" data-type="entity-link">HttpError</a>
                            </li>
                            <li class="link">
                                <a href="classes/LanguageModel.html" data-type="entity-link">LanguageModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeetingDesignationMapper.html" data-type="entity-link">MeetingDesignationMapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeetingMapper.html" data-type="entity-link">MeetingMapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/Response.html" data-type="entity-link">Response</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role.html" data-type="entity-link">Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/StepMapper.html" data-type="entity-link">StepMapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/TemporalDocumentModel.html" data-type="entity-link">TemporalDocumentModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/TimestampToDate.html" data-type="entity-link">TimestampToDate</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
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
                                    <a href="injectables/AppStepsStepIdService.html" data-type="entity-link">AppStepsStepIdService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BidStorageService.html" data-type="entity-link">BidStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BidTranslateLoader.html" data-type="entity-link">BidTranslateLoader</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BidTranslateService.html" data-type="entity-link">BidTranslateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BlobDeletesViewStateService.html" data-type="entity-link">BlobDeletesViewStateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BlobDownloadsViewStateService.html" data-type="entity-link">BlobDownloadsViewStateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BlobSharedViewStateService.html" data-type="entity-link">BlobSharedViewStateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BlobStorageService.html" data-type="entity-link">BlobStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BlobUploadsViewStateService.html" data-type="entity-link">BlobUploadsViewStateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DocumentService.html" data-type="entity-link">DocumentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilesService.html" data-type="entity-link">FilesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggingService.html" data-type="entity-link">LoggingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MockErrorService.html" data-type="entity-link">MockErrorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationGlobalService.html" data-type="entity-link">NotificationGlobalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SasGeneratorService.html" data-type="entity-link">SasGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StateProcessService.html" data-type="entity-link">StateProcessService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StepsService.html" data-type="entity-link">StepsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TemporalDocumentService.html" data-type="entity-link">TemporalDocumentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/BidHttpInterceptor.html" data-type="entity-link">BidHttpInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/LoginGuard.html" data-type="entity-link">LoginGuard</a>
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
                                <a href="interfaces/BlobContainerRequest.html" data-type="entity-link">BlobContainerRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BlobFileRequest.html" data-type="entity-link">BlobFileRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BlobItem.html" data-type="entity-link">BlobItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BlobItemDownload.html" data-type="entity-link">BlobItemDownload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BlobItemUpload.html" data-type="entity-link">BlobItemUpload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BlobStorageRequest.html" data-type="entity-link">BlobStorageRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Chainable.html" data-type="entity-link">Chainable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Chainable-1.html" data-type="entity-link">Chainable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CirculationPeriod.html" data-type="entity-link">CirculationPeriod</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CirculationPeriodDto.html" data-type="entity-link">CirculationPeriodDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DistributionList.html" data-type="entity-link">DistributionList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DistributionListDto.html" data-type="entity-link">DistributionListDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DistributionListMember.html" data-type="entity-link">DistributionListMember</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DistributionListMemberDto.html" data-type="entity-link">DistributionListMemberDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Document.html" data-type="entity-link">Document</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocumentDto.html" data-type="entity-link">DocumentDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocumentLanguage.html" data-type="entity-link">DocumentLanguage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocumentsPackage.html" data-type="entity-link">DocumentsPackage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocumentsPackageDto.html" data-type="entity-link">DocumentsPackageDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Error.html" data-type="entity-link">Error</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ErrorDto.html" data-type="entity-link">ErrorDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FaceToFaceMeeting.html" data-type="entity-link">FaceToFaceMeeting</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FaceToFaceMeetingDto.html" data-type="entity-link">FaceToFaceMeetingDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Language.html" data-type="entity-link">Language</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Meeting.html" data-type="entity-link">Meeting</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MeetingDesignation.html" data-type="entity-link">MeetingDesignation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MeetingDesignationDto.html" data-type="entity-link">MeetingDesignationDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MeetingDto.html" data-type="entity-link">MeetingDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Step.html" data-type="entity-link">Step</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StepDto.html" data-type="entity-link">StepDto</a>
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
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
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