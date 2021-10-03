import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StratsComponent } from './strats.component';

describe('StratsComponent', () => {
  let component: StratsComponent;
  let fixture: ComponentFixture<StratsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StratsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
