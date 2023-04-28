import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubjcetComponent } from './add-subjcet.component';

describe('AddSubjcetComponent', () => {
  let component: AddSubjcetComponent;
  let fixture: ComponentFixture<AddSubjcetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubjcetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubjcetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
