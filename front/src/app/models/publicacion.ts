export class Publicacion{
	constructor(
		public _id: string,
		public titulo: string,
        public contenido: string,
        public autor: string,
        public categoria: string,
		public __v: number
	){}
}