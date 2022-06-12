import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSocialComponent } from './modal-social.component';

describe('ModalSocialComponent', () => {
  let component: ModalSocialComponent;
  let fixture: ComponentFixture<ModalSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
