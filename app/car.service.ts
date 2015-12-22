import {Car} from './car.interface'
import {Injectable} from 'angular2/core'

@Injectable()
export class CarService {
    private cars: Car[] = [
    {model:'GT', year:2017, vendor:'Ford'},
    {model:'Defender', year:2018, vendor:'Land Rover'},
    {model:'GT4', year:2016, vendor:'Porsche'},
    {model:'P14', year:2016, vendor:'McLaren'},
    ];
	getCars () {
        return Promise.resolve(this.cars);
	}
}