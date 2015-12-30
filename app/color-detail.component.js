System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ColorDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ColorDetailComponent = (function () {
                function ColorDetailComponent() {
                }
                ColorDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-color-detail',
                        inputs: ['color'],
                        template: "\n    <div *ngIf=\"color\">\n      <h2>{{color.name}} is chosen!</h2>\n      <div><label>id: </label>{{color.id}}</div>\n      <div>\n        <label>name: </label>\n        <div><input [(ngModel)]=\"color.name\" placeholder=\"name\"></div>\n      </div>\n      <div>\n        <label>RGB: </label>\n        <div><input [(ngModel)]=\"color.rgb\" placeholder=\"rgb\"></div>\n      </div>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ColorDetailComponent);
                return ColorDetailComponent;
            })();
            exports_1("ColorDetailComponent", ColorDetailComponent);
        }
    }
});
//# sourceMappingURL=color-detail.component.js.map