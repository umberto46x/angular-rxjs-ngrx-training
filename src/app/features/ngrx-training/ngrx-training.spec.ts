import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxTraining } from './ngrx-training';

describe('NgrxTraining', () => {
  let component: NgrxTraining;
  let fixture: ComponentFixture<NgrxTraining>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxTraining]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxTraining);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
