import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameeditorComponent } from './nameeditor.component';

describe('NameeditorComponent', () => {
  let component: NameeditorComponent;
  let fixture: ComponentFixture<NameeditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameeditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
