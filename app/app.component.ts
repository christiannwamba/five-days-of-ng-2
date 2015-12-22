import {Component, OnInit} from 'angular2/core'
import {Car} from './car.interface'
import {CarService} from './car.service'

@Component({
	selector:'my-app',
	template:`
	  <div class="container">
        <h1>{{greeting}} 5 days of Angular</h1>
        <div class="cars">
            <ul>
                <li *ngFor="#car of cars"><a href="#">{{car.year}} {{car.vendor}} {{car.model}}</a></li>
            </ul>
        </div>
        <div class="car-form">
            <form (ngSubmit)="addCar()">
                <label>Model: </label>
                <input class="form-control" [(ngModel)]="car.model">

                <label>Year: </label>
                <input class="form-control" [(ngModel)]="car.year">

                <label>Vendor: </label>
                <input class="form-control" [(ngModel)]="car.vendor">

                <button class="btn btn-primary" type="submit">Add</button>
            </form>
        </div>
      </div>
	`,
	styles:[`
        .container{
            width:70%;
            margin: 50px auto;
        }
	`],
	providers:[CarService]
})
 export class AppComponent implements OnInit {         
    public greeting = "Welcome to";
    public cars : Car[];

    constructor(private _carService: CarService){ 

    }
    //Get cars using CarService
    getCars(){
        this._carService.getCars().then(cars => this.cars = cars);
    }
    //Load the cars on initialization
    ngOnInit(){
        this.getCars()
    }
    //Empty car
    public car: Car = {
    model:"", year:0, vendor:""
    };   

    //Update list of cars with new car
    addCar(){
        this.cars.push(this.car);
    }
 }