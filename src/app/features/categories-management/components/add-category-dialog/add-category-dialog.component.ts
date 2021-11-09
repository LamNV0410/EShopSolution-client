import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { CategoryEndpoint } from 'sdk/api-sdk-js/src/services/category/endpoints/category-endpoints';
import { Category } from 'sdk/api-sdk-js/src/services/category/models/category';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrls: ['./add-category-dialog.component.scss']
})
export class AddCategoryDialogComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  isProcessing = false;
  categoriesEndpoint!: CategoryEndpoint
  constructor(
    public dialogRef: MatDialogRef<AddCategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formbuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    dialogRef.disableClose = true;
  }

  createCategory = this.formbuilder.group({
    name: new FormControl(null, [Validators.required]),
    description: new FormControl('')
  });
  get name() { return this.createCategory.get('name') };
  get description() { return this.createCategory.get('description') };
  ngOnInit() {
    this.initialEnpoint();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit() {
    this.isProcessing = true;
    if (this.createCategory.valid) {
      let category: Category = { name: this.name?.value, description: this.description?.value }
      this.categoriesEndpoint
        .create(category)
        .then(res => {
          if (res) {
            this._snackBar.open('Success!!', 'Ok', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: 3000
            });
            this.dialogRef.close(true);
          } else {
            this._snackBar.open('Fail!!', 'Ok', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: 3000
            });
          }
        })
        .then(() => {
          this.isProcessing = false;
        })
        .catch(err => console.log(err));
    }
  }

  private initialEnpoint() {
    this.categoriesEndpoint = new CategoryEndpoint();
  }
}
