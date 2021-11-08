import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsersEndpoint } from 'sdk/api-sdk-js/src/services/systems/users/endpoints/users-endpoint';
import { GetUsersPagingRequest } from 'sdk/api-sdk-js/src/services/systems/users/requests/get-users-paging-request';
import { ELEMENT_DATA } from 'src/app/data-fake/table-data-fake';
import { PeriodicElement } from 'src/app/data-fake/table-model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  request: GetUsersPagingRequest = { keyword: '' }
  usersEndpoint!: UsersEndpoint
  isHasData: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.generateEndpoint();
    this.getData();
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  public addUsersHandleClick() {
    
  }
  private getData() {
    this.usersEndpoint
      .getAll(this.request)
      .then(res => {
        console.log(res);
      })
  }
  private generateEndpoint() {
    this.usersEndpoint = new UsersEndpoint();
  }
}