import { Component } from '@angular/core';

@Component({
	selector: 'login',
	templateUrl: '../views/login.html'
})
export class LoginComponent{

	ngOnInit(){
		console.log('Se ha cargado el componente login.component.ts');
	}
}