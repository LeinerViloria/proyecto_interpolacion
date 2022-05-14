import { Component, OnInit } from '@angular/core';
import { InterpolacionLinealService } from 'src/app/services/interpolacion-lineal.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { InterpolacionCuadraticaService } from 'src/app/services/interpolacion-cuadratica.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  message: string = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 3;

  // public tabla:[Array<number | string>, Array<number | string>] = [
  //   [2,3,5,6,8,9,10,11,12,14,15],
  //   [3.4,3.5,"",3.67,3.8,3.88,3.89,4.8,"","",6]
  // ];

  public tabla:[Array<number | string>, Array<number | string>] = [
    [1,2,3,4,5,6,7,8,9,10],
    [0.18,0.18,"",0.35,"",1.26,1.95,2.3,"",2.71]
  ];

  constructor(
    private _interpolacionLineal:InterpolacionLinealService,
    private _interpolacionCuadratica:InterpolacionCuadraticaService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  public interpolacionLineal(){
    if(this.tabla[0].length != this.tabla[1].length){
      this.message = "El tamaño de X debe ser igual que el de Y";
      this.openSnackBarError();
    }else{
      this._interpolacionLineal.tablaOriginal = this.tabla;
      this._interpolacionLineal.completarValores();
      let n = this._interpolacionLineal.tablaResultante[0].length;
      if(n<this.tabla[0].length){
        this.message = "No se pudo calcular todo, revise su tabla";
        this.openSnackBarError();
      }else{
        console.log(this._interpolacionLineal.tablaResultante);
      }
    }
  }

  public interpolacionCuadratica(){
    if(this.tabla[0].length != this.tabla[1].length){
      this.message = "El tamaño de X debe ser igual que el de Y";
      this.openSnackBarError();
    }else{
      this._interpolacionCuadratica.tablaOriginal = this.tabla;
      this._interpolacionCuadratica.completarValores();
      let n = this._interpolacionCuadratica.tablaResultante[0].length;

      if(n<this.tabla[0].length){
        this.message = "No se pudo calcular todo, revise su tabla";
        this.openSnackBarError();
      }else{
        console.log(this._interpolacionCuadratica.tablaResultante);
      }

    }
  }

  openSnackBarSuccesfull() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['style-snackBarTrue'],
    });
  }

  openSnackBarError() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['style-snackBarFalse'],
    });
  }

}
