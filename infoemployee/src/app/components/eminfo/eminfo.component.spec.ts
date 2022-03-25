import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EminfoComponent } from './eminfo.component';

describe('EminfoComponent', () => {
  let component: EminfoComponent;
  let fixture: ComponentFixture<EminfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EminfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EminfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
