import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ELEMENT_DATA } from 'src/app/data-fake/table-data-fake';
import { PeriodicElement } from 'src/app/data-fake/table-model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
