import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class InterpolacionService {

  public tablaOriginal:[Array<number | string>, Array<number | string>] = [[],[]];
  
  public tablaResultante:[Array<number>, Array<number>] = [[],[]];

  public tableSize:number=0;

  constructor() { }

  protected agregarValores(x:number, y:number, i:number){
    this.tablaResultante[0][i] = x;
    this.tablaResultante[1][i] = y;
  }

  public completarValores():boolean{
    if(this.tablaOriginal[0].length != this.tablaOriginal[1].length) return false;
    this.tablaResultante = [[],[]];
    this.tableSize = this.tablaOriginal[0].length;
    this.recorrerTabla();
    return false;
  }

  protected abstract recorrerTabla():void;

  protected buscarSiguiente(columna:number,iteracion:number):[[number, number] | boolean]{
    if(iteracion>(this.tableSize-1)) return [false];
    
    return (this.tablaOriginal[columna][iteracion]=="") 
            ? this.buscarSiguiente(columna, iteracion+1)
            : [[Number(this.tablaOriginal[columna][iteracion]), iteracion]];
  }

}
 