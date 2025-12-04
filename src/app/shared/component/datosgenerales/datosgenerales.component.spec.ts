import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosgeneralesComponent } from './datosgenerales.component';

describe('DatosgeneralesComponent', () => {
  let component: DatosgeneralesComponent;
  let fixture: ComponentFixture<DatosgeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosgeneralesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosgeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
