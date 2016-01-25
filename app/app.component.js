System.register(['angular2/core', './color.service', './color-detail.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, color_service_1, color_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (color_service_1_1) {
                color_service_1 = color_service_1_1;
            },
            function (color_detail_component_1_1) {
                color_detail_component_1 = color_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_colorService) {
                    this._colorService = _colorService;
                    this.title = 'Color Combo';
                    this.color = {
                        id: 1,
                        name: "Red",
                        rgb: "#FF0000"
                    };
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getColors();
                };
                AppComponent.prototype.onSelect = function (color) { this.selectedColor = color; };
                AppComponent.prototype.getColors = function () {
                    var _this = this;
                    this._colorService.getColors().then(function (colors) { return _this.colors = colors; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'color-combo',
                        template: "\n    <h1>{{title}}</h1>\n\n    <h2>COLORS!</h2>\n    <ul class=\"colors\">\n      <li *ngFor=\"#color of colors\"\n        [class.selected]=\"color === selectedColor\"\n        (click)=\"onSelect(color)\">\n        <span class=\"badge\">{{color.id}}</span> {{color.name}}\n      </li>\n    </ul>\n    <my-color-detail [color]=\"selectedColor\"></my-color-detail>\n  ",
                        styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .colors {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 10em;\n    }\n    .colors li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0em;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .colors li.selected:hover {\n      color: white;\n    }\n    .colors li:hover {\n      color: #607D8B;\n      background-color: #EEE;\n      left: .1em;\n    }\n    .colors .text {\n      position: relative;\n      top: -3px;\n    }\n    .colors .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0em 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0px 0px 4px;\n    }\n  "],
                        directives: [color_detail_component_1.ColorDetailComponent],
                        providers: [color_service_1.ColorService]
                    }), 
                    __metadata('design:paramtypes', [color_service_1.ColorService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map