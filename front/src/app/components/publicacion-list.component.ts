import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PublicacionService } from '../services/publicacion.service';
import { Publicacion } from '../models/publicacion';

@Component({
	selector: 'publicacion-list',
	templateUrl: '../views/blog-all.component.html',
	providers: [PublicacionService]
})
export class PublicacionListComponent{
	public titulo1: string;
	public postsBlog: Publicacion[];
	public confirmado;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _publicacionService: PublicacionService
	){
		this.titulo1 = 'Blogs';
		this.confirmado = null;
	}

	ngOnInit(){
		console.log('publicacion-list.component.ts cargado');
		this.getPublicaciones();
	}

	getPublicaciones(){
		this._publicacionService.getPublicaciones().subscribe(
			result => {
					this.postsBlog = result;
					console.log(result.status);
				console.log(result);

			},
			error => {
				console.log(<any>error);
			}
		);
	}

	borrarConfirm(id){
		this.confirmado = id;
	}

	cancelarConfirm(){
		this.confirmado = null;
	}

	

}