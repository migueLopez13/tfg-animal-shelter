import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPhoneComponent } from './modal-phone.component';

describe('ModalPhoneComponent', () => {
  let component: ModalPhoneComponent;
  let fixture: ComponentFixture<ModalPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
