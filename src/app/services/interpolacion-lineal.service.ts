import { Injectable } from '@angular/core';
import { InterpolacionService } from './interpolacion.service';

@Injectable({
  providedIn: 'root'
})
export class InterpolacionLinealService extends InterpolacionService{

  constructor() {
    super();
  }

  protected recorrerTabla(){
    
    for (let i = 0; i < this.tableSize; i++) {
      //Tanto x como y, en la misma posicion no tienen valores
      if(this.tablaOriginal[0][i]==='' && this.tablaOriginal[1][i]==='') break;
      
      if(this.tablaOriginal[1][i]===''){
        if(i==0 || i==(this.tableSize-1)) break;

        let x1 = this.tablaOriginal[0][i-1].toString();
        let y1 = this.tablaOriginal[1][i-1].toString();
        let x2:any;
        x2 = this.tablaOriginal[0][i+1].toString();
        let y2:any;
        y2 = this.tablaOriginal[1][i+1].toString();

        let x = Number(this.tablaOriginal[0][i].toString());
        let y:[number | boolean] = [false];

        if(y2==""){
          let aux:any;
          aux = this.buscarSiguiente(1, i+1);
          if(aux[0]==false) break;
          aux = aux[0];
          y2 = aux[0];
          x2 = this.tablaOriginal[0][Number(aux[1])].toString();
        }

        y = this.calcular(x, Number(x1), Number(x2), Number(y1), Number(y2));

        if((typeof y)=='boolean') break;

        this.tablaOriginal[1][i] = Number(y[0]);
        this.agregarValores(x, Number(y[0]), i);
        
      }else if(this.tablaOriginal[0][i]===''){
        if(i==0 || i==(this.tableSize-1)) break;

        let y = Number(this.tablaOriginal[1][i]);
        let x1 = Number(this.tablaOriginal[0][i-1]);
        let x2:any;
        x2 = Number(this.tablaOriginal[0][i+1]);
        let y1 = Number(this.tablaOriginal[1][i-1]);
        let y2:any;
        y2 = Number(this.tablaOriginal[1][i+1]);

        if(y2==""){
          let aux:any;
          aux = this.buscarSiguiente(0, i+1);
          if(aux[0]==false) break;
          aux = aux[0];
          y2 = aux[0];
          x2 = this.tablaOriginal[0][Number(aux[1])].toString();
        }

        let x = this.calcular(y, y1, y2, x1, x2);
        if((typeof x)=='boolean') break;

        this.agregarValores(Number(x[0]), y, i);

      }else{
        this.agregarValores(Number(this.tablaOriginal[0][i]), Number(this.tablaOriginal[1][i]), i);
      }

    }
    
  }

  private calcular(base:number,n1:number,n2:number,n3:number,n4:number):[number | boolean]{
    let divisor = n2-n1;
    return (divisor === 0) 
      ? [false]
      : [(((base-n1)/divisor)) * (n4-n3) + n3];
  }


}
