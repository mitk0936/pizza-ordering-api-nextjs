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
                    <a href="index.html" data-type="index-link">pizza-ordering-api documentation</a>
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
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-2474b73d790d89e1abc33b62603765687a57d6ff87e38bd234ba309a50c2437a0ca0043c429832618a31a613c65e387c2ddbd5ea00eb69ae3bb67d4b16c9139c"' : 'data-bs-target="#xs-controllers-links-module-AppModule-2474b73d790d89e1abc33b62603765687a57d6ff87e38bd234ba309a50c2437a0ca0043c429832618a31a613c65e387c2ddbd5ea00eb69ae3bb67d4b16c9139c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-2474b73d790d89e1abc33b62603765687a57d6ff87e38bd234ba309a50c2437a0ca0043c429832618a31a613c65e387c2ddbd5ea00eb69ae3bb67d4b16c9139c"' :
                                            'id="xs-controllers-links-module-AppModule-2474b73d790d89e1abc33b62603765687a57d6ff87e38bd234ba309a50c2437a0ca0043c429832618a31a613c65e387c2ddbd5ea00eb69ae3bb67d4b16c9139c"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-2474b73d790d89e1abc33b62603765687a57d6ff87e38bd234ba309a50c2437a0ca0043c429832618a31a613c65e387c2ddbd5ea00eb69ae3bb67d4b16c9139c"' : 'data-bs-target="#xs-injectables-links-module-AppModule-2474b73d790d89e1abc33b62603765687a57d6ff87e38bd234ba309a50c2437a0ca0043c429832618a31a613c65e387c2ddbd5ea00eb69ae3bb67d4b16c9139c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-2474b73d790d89e1abc33b62603765687a57d6ff87e38bd234ba309a50c2437a0ca0043c429832618a31a613c65e387c2ddbd5ea00eb69ae3bb67d4b16c9139c"' :
                                        'id="xs-injectables-links-module-AppModule-2474b73d790d89e1abc33b62603765687a57d6ff87e38bd234ba309a50c2437a0ca0043c429832618a31a613c65e387c2ddbd5ea00eb69ae3bb67d4b16c9139c"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CoreModule-ba4e98eb686b799c3fe734082d5e2f86f8fe4f8eed82ba2dc98298767edc93927a4b5206b3e4e654e819dea59bec2220b387a79336661e0acb4bca730b08bf65"' : 'data-bs-target="#xs-injectables-links-module-CoreModule-ba4e98eb686b799c3fe734082d5e2f86f8fe4f8eed82ba2dc98298767edc93927a4b5206b3e4e654e819dea59bec2220b387a79336661e0acb4bca730b08bf65"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-ba4e98eb686b799c3fe734082d5e2f86f8fe4f8eed82ba2dc98298767edc93927a4b5206b3e4e654e819dea59bec2220b387a79336661e0acb4bca730b08bf65"' :
                                        'id="xs-injectables-links-module-CoreModule-ba4e98eb686b799c3fe734082d5e2f86f8fe4f8eed82ba2dc98298767edc93927a4b5206b3e4e654e819dea59bec2220b387a79336661e0acb4bca730b08bf65"' }>
                                        <li class="link">
                                            <a href="injectables/FirestoreService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FirestoreService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderModule.html" data-type="entity-link" >OrderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-OrderModule-5b1d9299845b86614bbacfd2ab2dc4cb99d924b0ad6136ddcd2d5f8b1b44be1489530cd071c2ca483fe6a1d5283276e7d917f12ec367cdd35cd1b53c4b16b531"' : 'data-bs-target="#xs-controllers-links-module-OrderModule-5b1d9299845b86614bbacfd2ab2dc4cb99d924b0ad6136ddcd2d5f8b1b44be1489530cd071c2ca483fe6a1d5283276e7d917f12ec367cdd35cd1b53c4b16b531"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrderModule-5b1d9299845b86614bbacfd2ab2dc4cb99d924b0ad6136ddcd2d5f8b1b44be1489530cd071c2ca483fe6a1d5283276e7d917f12ec367cdd35cd1b53c4b16b531"' :
                                            'id="xs-controllers-links-module-OrderModule-5b1d9299845b86614bbacfd2ab2dc4cb99d924b0ad6136ddcd2d5f8b1b44be1489530cd071c2ca483fe6a1d5283276e7d917f12ec367cdd35cd1b53c4b16b531"' }>
                                            <li class="link">
                                                <a href="controllers/OrderController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-OrderModule-5b1d9299845b86614bbacfd2ab2dc4cb99d924b0ad6136ddcd2d5f8b1b44be1489530cd071c2ca483fe6a1d5283276e7d917f12ec367cdd35cd1b53c4b16b531"' : 'data-bs-target="#xs-injectables-links-module-OrderModule-5b1d9299845b86614bbacfd2ab2dc4cb99d924b0ad6136ddcd2d5f8b1b44be1489530cd071c2ca483fe6a1d5283276e7d917f12ec367cdd35cd1b53c4b16b531"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrderModule-5b1d9299845b86614bbacfd2ab2dc4cb99d924b0ad6136ddcd2d5f8b1b44be1489530cd071c2ca483fe6a1d5283276e7d917f12ec367cdd35cd1b53c4b16b531"' :
                                        'id="xs-injectables-links-module-OrderModule-5b1d9299845b86614bbacfd2ab2dc4cb99d924b0ad6136ddcd2d5f8b1b44be1489530cd071c2ca483fe6a1d5283276e7d917f12ec367cdd35cd1b53c4b16b531"' }>
                                        <li class="link">
                                            <a href="injectables/OrderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ValidateCartHandler.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ValidateCartHandler</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaymentsModule.html" data-type="entity-link" >PaymentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PaymentsModule-c39d5bf2693803e938007e3d79c56b63d7d5e9d2b9ce04c8807d71cd48d2a0b971c5e19a7f127e031bf5222432a36f33b45fc7fee7ebc6cf8f64ca2a75a8cb21"' : 'data-bs-target="#xs-controllers-links-module-PaymentsModule-c39d5bf2693803e938007e3d79c56b63d7d5e9d2b9ce04c8807d71cd48d2a0b971c5e19a7f127e031bf5222432a36f33b45fc7fee7ebc6cf8f64ca2a75a8cb21"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PaymentsModule-c39d5bf2693803e938007e3d79c56b63d7d5e9d2b9ce04c8807d71cd48d2a0b971c5e19a7f127e031bf5222432a36f33b45fc7fee7ebc6cf8f64ca2a75a8cb21"' :
                                            'id="xs-controllers-links-module-PaymentsModule-c39d5bf2693803e938007e3d79c56b63d7d5e9d2b9ce04c8807d71cd48d2a0b971c5e19a7f127e031bf5222432a36f33b45fc7fee7ebc6cf8f64ca2a75a8cb21"' }>
                                            <li class="link">
                                                <a href="controllers/PaymentsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentsController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProductModule-ca50a65aec7d6425c4b8261914c58cc62c9f2bfc30af3a9fa3026f3f1b640c90b79dc21b9925238a030cedd145cbbb302559fb954476908223dbc5e0d8111960"' : 'data-bs-target="#xs-controllers-links-module-ProductModule-ca50a65aec7d6425c4b8261914c58cc62c9f2bfc30af3a9fa3026f3f1b640c90b79dc21b9925238a030cedd145cbbb302559fb954476908223dbc5e0d8111960"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductModule-ca50a65aec7d6425c4b8261914c58cc62c9f2bfc30af3a9fa3026f3f1b640c90b79dc21b9925238a030cedd145cbbb302559fb954476908223dbc5e0d8111960"' :
                                            'id="xs-controllers-links-module-ProductModule-ca50a65aec7d6425c4b8261914c58cc62c9f2bfc30af3a9fa3026f3f1b640c90b79dc21b9925238a030cedd145cbbb302559fb954476908223dbc5e0d8111960"' }>
                                            <li class="link">
                                                <a href="controllers/ProductController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductModule-ca50a65aec7d6425c4b8261914c58cc62c9f2bfc30af3a9fa3026f3f1b640c90b79dc21b9925238a030cedd145cbbb302559fb954476908223dbc5e0d8111960"' : 'data-bs-target="#xs-injectables-links-module-ProductModule-ca50a65aec7d6425c4b8261914c58cc62c9f2bfc30af3a9fa3026f3f1b640c90b79dc21b9925238a030cedd145cbbb302559fb954476908223dbc5e0d8111960"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-ca50a65aec7d6425c4b8261914c58cc62c9f2bfc30af3a9fa3026f3f1b640c90b79dc21b9925238a030cedd145cbbb302559fb954476908223dbc5e0d8111960"' :
                                        'id="xs-injectables-links-module-ProductModule-ca50a65aec7d6425c4b8261914c58cc62c9f2bfc30af3a9fa3026f3f1b640c90b79dc21b9925238a030cedd145cbbb302559fb954476908223dbc5e0d8111960"' }>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CompleteOrderCommand.html" data-type="entity-link" >CompleteOrderCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/GeolocationDto.html" data-type="entity-link" >GeolocationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetOrderQuery.html" data-type="entity-link" >GetOrderQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetOrdersByStatus.html" data-type="entity-link" >GetOrdersByStatus</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetOrdersByStatusQuery.html" data-type="entity-link" >GetOrdersByStatusQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetOrderStatusHandler.html" data-type="entity-link" >GetOrderStatusHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderStatusUpdatedEvent.html" data-type="entity-link" >OrderStatusUpdatedEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderStatusUpdateHandler.html" data-type="entity-link" >OrderStatusUpdateHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaymentWebhookDto.html" data-type="entity-link" >PaymentWebhookDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlaceOrderCommand.html" data-type="entity-link" >PlaceOrderCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlaceOrderHandler.html" data-type="entity-link" >PlaceOrderHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductDto.html" data-type="entity-link" >ProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TakeOrderForDelivery.html" data-type="entity-link" >TakeOrderForDelivery</a>
                            </li>
                            <li class="link">
                                <a href="classes/TakeOrderForDeliveryHandler.html" data-type="entity-link" >TakeOrderForDeliveryHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/TakeOrderInKitchenCommand.html" data-type="entity-link" >TakeOrderInKitchenCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/TakeOrderInKitchenHandler.html" data-type="entity-link" >TakeOrderInKitchenHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValidateCartCommand.html" data-type="entity-link" >ValidateCartCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValidateCartResponseDto.html" data-type="entity-link" >ValidateCartResponseDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
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
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});