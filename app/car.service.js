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
    var CarService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CarService = (function () {
                function CarService() {
                    this.cars = [
                        { model: 'GT', year: 2017, vendor: 'Ford' },
                        { model: 'Defender', year: 2018, vendor: 'Land Rover' },
                        { model: 'GT4', year: 2016, vendor: 'Porsche' },
                        { model: 'P14', year: 2016, vendor: 'McLaren' },
                    ];
                }
                CarService.prototype.getCars = function () {
                    return Promise.resolve(this.cars);
                };
                CarService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CarService);
                return CarService;
            })();
            exports_1("CarService", CarService);
        }
    }
});
//# sourceMappingURL=car.service.js.map