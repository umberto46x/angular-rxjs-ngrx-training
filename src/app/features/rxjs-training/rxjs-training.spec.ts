import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTraining } from './rxjs-training';

describe('RxjsTraining', () => {
  let component: RxjsTraining;
  let fixture: ComponentFixture<RxjsTraining>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsTraining]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsTraining);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
