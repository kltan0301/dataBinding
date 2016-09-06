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
var SiblingComponent = (function () {
    function SiblingComponent() {
    }
    SiblingComponent = __decorate([
        core_1.Component({
            selector: 'sibling-component',
            template: "\n    <div class=\"propParent\">\n      <h1 class=\"binding\">Sibling Components</h1>\n      <child (myOutput)=\"child1Output = $event\" [siblingInput]=\"child2Output\"></child>\n      <child [siblingInput]=\"child1Output\" (myOutput)=\"child2Output = $event\"></child>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], SiblingComponent);
    return SiblingComponent;
}());
exports.SiblingComponent = SiblingComponent;
//# sourceMappingURL=sibling.component.js.map