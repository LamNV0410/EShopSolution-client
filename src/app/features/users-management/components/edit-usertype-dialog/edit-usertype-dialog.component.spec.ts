import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUsertypeDialogComponent } from './edit-usertype-dialog.component';

describe('EditUsertypeDialogComponent', () => {
  let component: EditUsertypeDialogComponent;
  let fixture: ComponentFixture<EditUsertypeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUsertypeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUsertypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
