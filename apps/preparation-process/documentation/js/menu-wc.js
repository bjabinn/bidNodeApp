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
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
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
                                            <li class="link">
                                                <a href="components/SelectLanguageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SelectLanguageComponent</a>
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
                                <a href="modules/UploadPackageModule.html" data-type="entity-link">UploadPackageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UploadPackageModule-6c0b0e87c68a6d4c6370153fe624a393"' : 'data-target="#xs-components-links-module-UploadPackageModule-6c0b0e87c68a6d4c6370153fe624a393"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UploadPackageModule-6c0b0e87c68a6d4c6370153fe624a393"' :
                                            'id="xs-components-links-module-UploadPackageModule-6c0b0e87c68a6d4c6370153fe624a393"' }>
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
                                <a href="modules/UploadPackageModule.html" data-type="entity-link">UploadPackageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UploadPackageModule-8197601be68c7d11057358ba32b1848d-1"' : 'data-target="#xs-components-links-module-UploadPackageModule-8197601be68c7d11057358ba32b1848d-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UploadPackageModule-8197601be68c7d11057358ba32b1848d-1"' :
                                            'id="xs-components-links-module-UploadPackageModule-8197601be68c7d11057358ba32b1848d-1"' }>
                                            <li class="link">
                                                <a href="components/ModalConfirmComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalConfirmComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UploadPackagePageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UploadPackagePageComponent</a>
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
                                                <a href="components/ModalConfirmComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalConfirmComponent</a>
                                            </li>
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
                                <a href="components/ModalConfirmComponent-1.html" data-type="entity-link">ModalConfirmComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ModalConfirmComponent-2.html" data-type="entity-link">ModalConfirmComponent</a>
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