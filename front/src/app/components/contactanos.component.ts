import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../services/global';

@Component({
	selector: 'contactanos',
	templateUrl: '../views/formulario.html',
})
export class ContactanosComponent{

	constructor(
		private _route: ActivatedRoute,
		private _router: Router
	){}

	ngOnInit(){
		console.log('contactanos.component.ts cargado...');
	}

	onSubmit(){

				this.enviarFormulario();
	}

	enviarFormulario(){
		this._router.navigate(['/postContacto']);
	}
	}