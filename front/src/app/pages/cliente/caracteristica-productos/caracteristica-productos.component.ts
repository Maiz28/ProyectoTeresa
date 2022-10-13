import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caracteristica-productos',
  templateUrl: './caracteristica-productos.component.html',
  styleUrls: ['./caracteristica-productos.component.css']
})
export class CaracteristicaProductosComponent implements OnInit {
  public yaExiste: boolean | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
