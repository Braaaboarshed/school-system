import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudnetInfoComponent } from './studnet-info.component';

describe('StudnetInfoComponent', () => {
  let component: StudnetInfoComponent;
  let fixture: ComponentFixture<StudnetInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudnetInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudnetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
