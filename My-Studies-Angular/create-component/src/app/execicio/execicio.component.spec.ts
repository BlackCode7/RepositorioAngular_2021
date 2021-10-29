import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecicioComponent } from './execicio.component';

describe('ExecicioComponent', () => {
  let component: ExecicioComponent;
  let fixture: ComponentFixture<ExecicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
