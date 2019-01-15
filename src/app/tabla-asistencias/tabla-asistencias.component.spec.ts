import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAsistenciasComponent } from './tabla-asistencias.component';

describe('TablaAsistenciasComponent', () => {
  let component: TablaAsistenciasComponent;
  let fixture: ComponentFixture<TablaAsistenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaAsistenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAsistenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
