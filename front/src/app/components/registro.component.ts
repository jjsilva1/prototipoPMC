import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../services/global';

@Component({
	selector: 'registro',
	templateUrl: '../views/registro.html',
})
export class RegistroComponent{

	constructor(
		private _route: ActivatedRoute,
		private _router: Router
	){}

	ngOnInit(){
		console.log('registro.component.ts cargado...');
	}

	onSubmit(){

                this.enviarRegistro();
                console.log("object");
	}

	enviarRegistro(){
		this._router.navigate(['/postRegistro']);
	}
	}