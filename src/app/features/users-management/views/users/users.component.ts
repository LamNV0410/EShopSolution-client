import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserTypeEndpoint } from 'sdk/api-sdk-js/src/services/systems/user-types/endpoints/user-type-endpoint';
import { UsersEndpoint } from 'sdk/api-sdk-js/src/services/systems/users/endpoints/users-endpoint';
import { User } from 'sdk/api-sdk-js/src/services/systems/users/models/user';
import { GetUsersPagingRequest } from 'sdk/api-sdk-js/src/services/systems/users/requests/get-users-paging-request';
import { UserDTO } from 'sdk/api-sdk-js/src/services/systems/users/responses/user-dto';
import { ELEMENT_DATA } from 'src/app/data-fake/table-data-fake';
import { PeriodicElement } from 'src/app/data-fake/table-model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  createIcon: string = `add_circle`
  editIcon: string = `mode_edit_outline`;
  deleteIcon: string = `delete_outline`;
  request: GetUsersPagingRequest = { keyword: '' }
  usersEndpoint!: UsersEndpoint;
  users!: UserDTO[];
  totalItems!: number;
  isHasData: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.generateEndpoint();
    this.getData();
  }
  displayedColumns: string[] = ['position', 'name', 'userName', 'userTypeName', 'email', 'phoneNumber', 'action'];
  dataSource = new MatTableDataSource<UserDTO>([]);


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  public addUsersHandleClick() {
    this.router.navigateByUrl('/organizational-structure/users/create')
  }

  public onEditUserHandleClick(id: string) {
    console.log(id);
    this.router.navigateByUrl(`/organizational-structure/users/${id}/edit`)
  }

  public onDeleteUserHandleClick(id: string) {

  }
  private getData() {
    this.usersEndpoint
      .getAll(this.request)
      .then(res => {
        this.users = res.items;
        this.dataSource = new MatTableDataSource<UserDTO>(res.items);
        console.log(this.dataSource);
        this.totalItems = res.totalItems ?? 0;
      })
  }
  private generateEndpoint() {
    this.usersEndpoint = new UsersEndpoint();
  }
}