import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { CategoryEndpoint } from 'sdk/api-sdk-js/src/services/category/endpoints/category-endpoints';
import { Category } from 'sdk/api-sdk-js/src/services/category/models/category';
@Component({
  selector: 'app-edit-category-dialog',
  templateUrl: './edit-category-dialog.component.html',
  styleUrls: ['./edit-category-dialog.component.scss']
})
export class EditCategoryDialogComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  isProcessing = false;
  categoriesEndpoint!: CategoryEndpoint;
  editCategory = this.formbuilder.group({
    name: new FormControl(null, [Validators.required]),
    description: new FormControl('')
  });

  get name() { return this.editCategory.get('name') };
  get description() { return this.editCategory.get('description') };

  constructor(
    public dialogRef: MatDialogRef<EditCategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formbuilder: FormBuilder,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.initialEnpoint();
    console.log(this.data.id);
    this.categoriesEndpoint
      .getById(this.data.id)
      .then(res => {
        if (res) {
          this.editCategory.controls['name'].setValue(res.name);
          this.editCategory.controls['description'].setValue(res.description);
        }
      })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit() {
    if (this.editCategory.valid) {
      let category = { id: this.data.id, name: this.name?.value, description: this.description?.value };
      this.categoriesEndpoint
        .update(category)
        .then(res => {
          if (res) {
            this._snackBar.open('Success!!', 'Ok', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });
            this.dialogRef.close(true);
          } else {
            this._snackBar.open('Fail!!', 'Ok', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });
          }
        })
    }
  }
  private initialEnpoint() {
    this.categoriesEndpoint = new CategoryEndpoint();
  }
}
