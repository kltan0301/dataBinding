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
var PropertyBindComponent = (function () {
    function PropertyBindComponent() {
    }
    PropertyBindComponent = __decorate([
        core_1.Component({
            selector: 'property-bind',
            template: "\n    <div class=\"propParent\">\n      <h1 class=\"binding\">Property Binding</h1>\n      <label>Parent Input:</label>\n      <input type=\"text\" #parentInput (click)=\"0\">\n      <prop-child [parentValue]=\"parentInput.value\"></prop-child>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], PropertyBindComponent);
    return PropertyBindComponent;
}());
exports.PropertyBindComponent = PropertyBindComponent;
//# sourceMappingURL=propertyBind.component.js.map