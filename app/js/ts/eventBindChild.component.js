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
var EventChild = (function () {
    function EventChild() {
        this.childChanged = new core_1.EventEmitter();
    }
    EventChild.prototype.onChange = function (value) {
        this.childChanged.emit(value);
    };
    EventChild = __decorate([
        core_1.Component({
            selector: 'event-child',
            template: "\n    <div class=\"propChild\">\n      <label>Child Input:</label>\n      <input type=\"text\" #childInput (keyup)=\"onChange(childInput.value)\" >\n    </div>\n  ",
            outputs: ['childChanged']
        }), 
        __metadata('design:paramtypes', [])
    ], EventChild);
    return EventChild;
}());
exports.EventChild = EventChild;
//# sourceMappingURL=eventBindChild.component.js.map