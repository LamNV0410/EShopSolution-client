import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserLoginHub } from 'sdk/api-sdk-js/src/services/authentication/hubs/user-login-hub';
import { CategoryEndpoint } from 'sdk/api-sdk-js/src/services/category/endpoints/category-endpoints';
import { Category } from 'sdk/api-sdk-js/src/services/category/models/category';
import { GetCategoriesRequest } from 'sdk/api-sdk-js/src/services/category/requests/get-categories-request';
import { AuthService } from 'src/app/core/services/auth.service';
import { SNACKBAR_HORIZALPOSITION, SNACKBAR_VERTICALPOSITION } from 'src/app/features/common-const/eshop-common';
import { EShopMessageCommon } from 'src/app/features/common-const/eshop-messages-common-const';
import { AddCategoryDialogComponent } from '../../components/add-category-dialog/add-category-dialog.component';
import { EditCategoryDialogComponent } from '../../components/edit-category-dialog/edit-category-dialog.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  userLoginHub = new UserLoginHub();
  createIcon: string = `add_circle`
  editIcon: string = `mode_edit_outline`;
  deleteIcon: string = `delete_outline`;
  private categoriesEndpoint!: CategoryEndpoint;
  private request!: GetCategoriesRequest;
  public isHasData: boolean = false;
  constructor(
    public dialog: MatDialog,
    public _authSevice: AuthService,
    private _snackbar: MatSnackBar
  ) {
    this.request = { sortField: 'CRE', sortDirection: 'DESC', page: 0, size: 10 }
  }

  ngOnInit(): void {
    this.generateEndpoint();
    this.getData();

    this.userLoginHub.connection.start().then(function () {  
      console.log('SignalR Connected!');  
    }).catch(function (err) {  
      return console.error(err.toString());  
    });  
  }
  displayedColumns: string[] = ['position', 'name', 'createdBy', 'description', 'createdDate', 'action'];
  dataSource: Category[] = [];


  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  public addCategoryHandleClick() {
    this.openDialog();
  }

  public pageChangeCategories(event: any) {
    this.getFilterParam();
    this.getData();
  }
  public onEditCategoryHandleClick(id: string) {
    const dialogRef = this.dialog.open(EditCategoryDialogComponent
      , {
        width: '500px',
        data: { id },
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.resetPage();
        this.getFilterParam();
        this.getData();
      }
      console.log('The dialog was closed');
    });
  }
  public onDeleteCategoryHandleClick(id: string) {

  }
  private getData() {
    this.isHasData = false;
    this.categoriesEndpoint
      .getAll(this.request)
      .then(res => {
        this.dataSource = res.items;
      })
      .then(() => {
        this.isHasData = true;
      })
      .catch(err => {
        this._snackbar
          .open(
            EShopMessageCommon.MESSAGE_WRONG_SERVER_ERROR,
            EShopMessageCommon.MESSAGE_BUTTON_CONFIRM,
            {
              horizontalPosition: SNACKBAR_HORIZALPOSITION,
              verticalPosition: SNACKBAR_VERTICALPOSITION,
            });

      })
  }

  private generateEndpoint() {
    this.categoriesEndpoint = new CategoryEndpoint();
  }

  private getFilterParam() {
    this.request = {
      page: this.paginator.pageIndex,
      size: this.paginator.pageSize,
      sortField: 'CRE',
      sortDirection: 'DESC'
    }
  }
  private resetPage() {
    this.paginator.pageIndex = 0;
    this.paginator.pageSize = 10
  }
  private openDialog(): void {
    const dialogRef = this.dialog.open(AddCategoryDialogComponent
      , {
        width: '500px',
        data: { name: "hiih", animal: {} },
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.resetPage();
        this.getFilterParam();
        this.getData();
      }
      console.log('The dialog was closed');
    });
  }
}
