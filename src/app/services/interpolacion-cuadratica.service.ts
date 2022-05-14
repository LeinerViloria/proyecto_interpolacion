import { Injectable } from '@angular/core';
import { InterpolacionService } from './interpolacion.service';

@Injectable({
  providedIn: 'root'
})
export class InterpolacionCuadraticaService extends InterpolacionService {

  constructor() { 
    super();
  }

  protected recorrerTabla(){
    for (let i = 0; i < this.tableSize; i++){
      if(this.tablaOriginal[0][i]==='' && this.tablaOriginal[1][i]==='') break;

      if(this.tablaOriginal[1][i]===''){
        if(i==0 || i==1 || i==(this.tableSize-1)) break;

        let x0 = this.tablaOriginal[0][i-2].toString();
        let y0 = this.tablaOriginal[1][i-2].toString();
        let x1 = this.tablaOriginal[0][i-1].toString();
        let y1 = this.tablaOriginal[1][i-1].toString();
        let x2 = this.tablaOriginal[0][i+1].toString();
        let y2 = this.tablaOriginal[1][i+1].toString();

        let x = Number(this.tablaOriginal[0][i].toString());
        let y:number;

        if(y2==""){
          let aux:any;
          aux = this.buscarSiguiente(1, i+1);
          if(aux[0]==false) break;
          aux = aux[0];
          y2 = aux[0];
          x2 = this.tablaOriginal[0][Number(aux[1])].toString();
        }
       
        y=this.calcular(x, Number(x0), Number(x1), Number(x2), Number(y0), Number(y1), Number(y2));
        this.tablaOriginal[1][i] = y;
        this.agregarValores(x, y, i);
      }else if(this.tablaOriginal[0][i]===''){
        break;
      }else{
        this.agregarValores(Number(this.tablaOriginal[0][i]), Number(this.tablaOriginal[1][i]), i);
      }
    }
    
  }

  private calcular(x:number, x0:number, x1:number, x2:number, y0:number, y1:number, y2:number):number{
    return (((x-x1)*(x-x2))/((x0-x1)*(x0-x2))*(y0))+(((x-x0)*(x-x2))/((x1-x0)*(x1-x2))*(y1)) + (((x-x0)*(x-x1))/((x2-x0)*(x2-x1))*(y2));
  }
}
