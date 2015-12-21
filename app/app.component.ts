import {Component} from 'angular2/core'

@Component({
	selector:'my-app',
	template:`
        <h1>{{greeting}} Day 1: Understanding Components</h1>
	`
})
 export class AppComponent {
     greeting:"Welcome to";
 }