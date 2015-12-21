import {Component} from 'angular2/core'
import {Car} from './car.interface';

@Component({
	selector:'my-app',
	template:`
        <h1>{{greeting}} Day 1: Understanding Components</h1>
        <div class="cars">
            <ul>
                <li *ngFor="#car of cars">{{car.year}} {{car.vendor}} {{car.model}}</li>
            </ul>
        </div>
	`
})
 export class AppComponent {
    public greeting = "Welcome to";
    public cars: Car[] = [
    {model:'GT', year:2017, vendor:'Ford'},
    {model:'Defender', year:2018, vendor:'Land Rover'},
    {model:'GT4', year:2016, vendor:'Porsche'},
    {model:'P14', year:2016, vendor:'McLaren'},
    ];
 }