import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Publicacion } from '../models/publicacion';
import { GLOBAL } from './global';

@Injectable()
export class PublicacionService{
	public url: string;

	constructor(
		public _http: Http
	){
		this.url = GLOBAL.url;
	}

	getPublicaciones(){
		return this._http.get(this.url+'publicacion').map(res => res.json());
	}

	getPublicacion(id){
		return this._http.get(this.url + 'publicacion/' + ":" + id).map(res => res.json());
	}

	addPublicacion(publicacion: Publicacion){
		console.log(publicacion);
		let json = JSON.stringify(publicacion);
		console.log(json);
		let params = 'json='+json;
		//let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'publicacion', json)
						 .map(res => res.json());
	}

	editPublicacion(id, publicacion: Publicacion){
		let json = JSON.stringify(publicacion);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'update-publicacion/'+id, params, {headers: headers})
						 .map(res => res.json());
	}

	deletePublicacion(id){
		return this._http.get(this.url+'delete-publicacion/'+id)
						 .map(res => res.json());
	}

	makeFileRequest(url: string, params: Array<string>, files: Array<File>){
		return new Promise((resolve, reject)=>{
			var formData: any = new FormData();
			var xhr = new XMLHttpRequest();

			for(var i = 0; i < files.length; i++){
				formData.append('uploads[]', files[i], files[i].name);
			}

			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4){
					if(xhr.status == 200){
						resolve(JSON.parse(xhr.response));
					}else{
						reject(xhr.response);
					}
				}
			};

			xhr.open("POST", url, true);
			xhr.send(formData);
		});
	}

}