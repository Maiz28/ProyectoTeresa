import { Component, OnInit } from '@angular/core';
import {Cliente} from "../models/cliente";
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';


export interface PeriodicElement {
  producto: string;
  descripcion: string;
  categoria: string;
  precio: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {producto: "Laptop", descripcion: 'Este es una laptop', categoria: "Tecnologia", precio: 25000},
  {producto: "Mouse", descripcion: 'HP', categoria: "Tecnologia", precio: 1000},
];

@Component({
  selector: 'app-proceso-compras',
  templateUrl: './proceso-compras.component.html',
  styleUrls: ['./proceso-compras.component.css']
})
export class ProcesoComprasComponent implements OnInit {
  displayedColumns: string[] = ['producto', 'descripcion', 'categoria', 'precio', 'cantidad', 'quitar'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(private router: Router) { }

  public clienteModel = new Cliente("", "");

  public compraTerminada = false;
  ngOnInit(): void {
  }

  public async revisarYTerminar(stepper: { next: () => void; }) {
    if (!this.clienteModel.direccion) {
      return alert("Falta escribir la dirección del cliente");
    }
    if (!this.clienteModel.nombre) {
      return alert("Falta escribir el nombre del cliente");
    }


    this.compraTerminada=true;
    stepper.next();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  SeguirComprando(){
    this.router.navigate(["/home"])
  }
}
