import {Component} from 'angular2/core'
import {Car} from './car.interface';

@Component({
	selector:'my-app',
	template:`
	  <div class="container">
        <h1>{{greeting}} Day 1: Understanding Components</h1>
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
	`]
})
 export class AppComponent {     
    public greeting = "Welcome to";
    public cars: Car[] = [
    {model:'GT', year:2017, vendor:'Ford'},
    {model:'Defender', year:2018, vendor:'Land Rover'},
    {model:'GT4', year:2016, vendor:'Porsche'},
    {model:'P14', year:2016, vendor:'McLaren'},
    ];
    //Empt car
    public car: Car = {
    model:"", year:0, vendor:""
    };   
    //Update list of cars with new car
    addCar(){
        this.cars.push(this.car);
    }
 }