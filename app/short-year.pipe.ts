import {Pipe} from 'angular2/core'

@Pipe({name: 'shortYear'})
export class ShortYearPipe {
	transform(value:number,args:string[]) : string{
        return '\''+value.toString().substr(2,3);
	}
}