import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageemployyeeComponent } from './pageemployyee.component';

describe('PageemployyeeComponent', () => {
  let component: PageemployyeeComponent;
  let fixture: ComponentFixture<PageemployyeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageemployyeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageemployyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
