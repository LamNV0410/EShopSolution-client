import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ELEMENT_DATA } from 'src/app/data-fake/table-data-fake';
import { PeriodicElement } from 'src/app/data-fake/table-model';
import { CreateUsertypeDialogComponent } from '../../components/create-usertype-dialog/create-usertype-dialog.component';

@Component({
  selector: 'app-user-types',
  templateUrl: './user-types.component.html',
  styleUrls: ['./user-types.component.scss']
})
export class UserTypesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  public addUserTypeHandleClick() {
    this.openDialog();

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  private openDialog(): void {
    const dialogRef = this.dialog.open(CreateUsertypeDialogComponent, {
      width: '550px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
