import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputFieldsComponent } from './output-fields.component';

describe('OutputFieldsComponent', () => {
  let component: OutputFieldsComponent;
  let fixture: ComponentFixture<OutputFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputFieldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
