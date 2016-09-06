"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var interpolation_component_1 = require('./interpolation.component');
var propertyBind_component_1 = require('./propertyBind.component');
var propertyBindChild_component_1 = require('./propertyBindChild.component');
var eventBind_component_1 = require('./eventBind.component');
var eventBindChild_component_1 = require('./eventBindChild.component');
var sibling_component_1 = require('./sibling.component');
var sibling_child1_component_1 = require('./sibling.child1.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [app_component_1.AppComponent,
                interpolation_component_1.InterpolationComponent,
                propertyBind_component_1.PropertyBindComponent,
                propertyBindChild_component_1.PropChild,
                eventBind_component_1.EventBind,
                eventBindChild_component_1.EventChild,
                sibling_component_1.SiblingComponent,
                sibling_child1_component_1.Child1
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map