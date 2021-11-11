import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserTypeEndpoint } from 'sdk/api-sdk-js/src/services/systems/user-types/endpoints/user-type-endpoint';
import { UserType } from 'sdk/api-sdk-js/src/services/systems/user-types/models/user-type';
import { GetUserTypesPagingRequest } from 'sdk/api-sdk-js/src/services/systems/user-types/requests/get-user-types-paging-request';
import { ELEMENT_DATA } from 'src/app/data-fake/table-data-fake';
import { PeriodicElement } from 'src/app/data-fake/table-model';
import { CreateUsertypeDialogComponent } from '../../components/create-usertype-dialog/create-usertype-dialog.component';
import { EditUsertypeDialogComponent } from '../../components/edit-usertype-dialog/edit-usertype-dialog.component';

@Component({
  selector: 'app-user-types',
  templateUrl: './user-types.component.html',
  styleUrls: ['./user-types.component.scss']
})
export class UserTypesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  userTypeEndpoint!: UserTypeEndpoint;
  createIcon: string = `add_circle`
  editIcon: string = `mode_edit_outline`;
  deleteIcon: string = `delete_outline`;
  totalItems: number = 0;
  request: GetUserTypesPagingRequest = { page: 0, size: 10, keyword: '' };
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.generateEndpoint();
    this.getData();
  }
  displayedColumns: string[] = ['position', 'name', 'userTypeRoleName', 'createdDate', 'action'];
  dataSource = new MatTableDataSource<UserType>();

  public addUserTypeHandleClick() {
    this.openCreateDialog();

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  public onEditUserTypeHandleClick(id: string) {
    this.openEditDialogs(id)
  }
  public onDeleteUserTypeHandleClick() {

  }
  private getData() {
    this.userTypeEndpoint
      .getAllPaging(this.request)
      .then(res => {
        this.dataSource = new MatTableDataSource<UserType>(res.items);
        this.totalItems = res.totalItems ?? 0;
      });
  }
  private generateEndpoint() {
    this.userTypeEndpoint = new UserTypeEndpoint();
  }
  private openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateUsertypeDialogComponent, {
      width: '550px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getData();
      }
    });
  }
  private openEditDialogs(id: string): void {
    const dialogRef = this.dialog.open(EditUsertypeDialogComponent, {
      width: '550px',
      data: { id },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getData();
      }
    });
  }
}
