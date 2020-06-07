import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayisalComponent } from './sayisal.component';

describe('SayisalComponent', () => {
  let component: SayisalComponent;
  let fixture: ComponentFixture<SayisalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayisalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
