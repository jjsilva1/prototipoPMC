import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PublicacionService } from '../services/publicacion.service';
import { Publicacion } from '../models/publicacion';
import { GLOBAL } from '../services/global';

@Component({
	selector: 'publicacion-add',
	templateUrl: '../views/publicacion-add.html',
	providers: [PublicacionService]
})
export class PublicacionAddComponent{
	public tituloA: string;
	public publicacion: Publicacion;
	public filesToUpload;
	public resultUpload;

	constructor(
		private _publicacionService: PublicacionService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.tituloA = 'Hacer una publicación';
		this.publicacion = new Publicacion('','',"","", "", 0);
	}

	ngOnInit(){
		console.log('publicacion-add.component.ts cargado...');
	}

	onSubmit(){
		console.log(this.publicacion);

		//if(this.filesToUpload && this.filesToUpload.length >= 1){
			//this._productoService.makeFileRequest(GLOBAL.url+'upload-file', [], this.filesToUpload).then((result) => {
				//console.log(result);

				//this.resultUpload = result;
				//this.producto.image = this.filesToUpload[0].name;
				//console.log(this.producto);
				this.savePublicacion();

			//}, (error) =>{
				//console.log(error);
			//});
		//}else{
			//this.saveProducto();	
		//}

	}

	savePublicacion(){
			//this._productoService.addProducto(this.producto).subscribe(
				//response => {
					//if(response.code == 200){
						this._router.navigate(['/postVenta']);
					//}else{
						//console.log(response);
					//}
				//},
				//error => {
					//console.log(<any>error);
				//}
			//);
	}

	fileChangeEvent(fileInput: any){
		this.filesToUpload = <Array<File>>fileInput.target.files;
		console.log(this.filesToUpload);
	}
}