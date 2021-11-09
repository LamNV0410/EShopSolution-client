import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUsertypeDialogComponent } from './create-usertype-dialog.component';

describe('CreateUsertypeDialogComponent', () => {
  let component: CreateUsertypeDialogComponent;
  let fixture: ComponentFixture<CreateUsertypeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUsertypeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUsertypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
