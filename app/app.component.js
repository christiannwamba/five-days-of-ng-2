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
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.greeting = "Welcome to";
                    this.cars = [
                        { model: 'GT', year: 2017, vendor: 'Ford' },
                        { model: 'Defender', year: 2018, vendor: 'Land Rover' },
                        { model: 'GT4', year: 2016, vendor: 'Porsche' },
                        { model: 'P14', year: 2016, vendor: 'McLaren' },
                    ];
                    //Empt car
                    this.car = {
                        model: "", year: 0, vendor: ""
                    };
                }
                //Update list of cars with new car
                AppComponent.prototype.addCar = function () {
                    this.cars.push(this.car);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t  <div class=\"container\">\n        <h1>{{greeting}} Day 1: Understanding Components</h1>\n        <div class=\"cars\">\n            <ul>\n                <li *ngFor=\"#car of cars\"><a href=\"#\">{{car.year}} {{car.vendor}} {{car.model}}</a></li>\n            </ul>\n        </div>\n        <div class=\"car-form\">\n            <form (ngSubmit)=\"addCar()\">\n                <label>Model: </label>\n                <input class=\"form-control\" [(ngModel)]=\"car.model\">\n\n                <label>Year: </label>\n                <input class=\"form-control\" [(ngModel)]=\"car.year\">\n\n                <label>Vendor: </label>\n                <input class=\"form-control\" [(ngModel)]=\"car.vendor\">\n\n                <button class=\"btn btn-primary\" type=\"submit\">Add</button>\n            </form>\n        </div>\n      </div>\n\t",
                        styles: ["\n        .container{\n            width:70%;\n            margin: 50px auto;\n        }\n\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map