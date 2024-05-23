import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public base!: number;
  public altura!: number;
  public resultado!: string;

  constructor() {}



calcularArea(){
  this.resultado=" A área do triângulo é de "+(this.base*this.altura)/2;
}
}
