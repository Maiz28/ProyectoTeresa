import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablero-productos',
  templateUrl: './tablero-productos.component.html',
  styleUrls: ['./tablero-productos.component.css']
})
export class TableroProductosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public detalles() {
    this.router.navigate(["/caracteristicas_producto"])
  }


}
