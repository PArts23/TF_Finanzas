import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisCoatizacionesComponent } from './mis-coatizaciones.component';

describe('MisCoatizacionesComponent', () => {
  let component: MisCoatizacionesComponent;
  let fixture: ComponentFixture<MisCoatizacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisCoatizacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisCoatizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
