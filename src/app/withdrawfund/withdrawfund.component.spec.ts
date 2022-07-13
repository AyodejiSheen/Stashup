import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawfundComponent } from './withdrawfund.component';

describe('WithdrawfundComponent', () => {
  let component: WithdrawfundComponent;
  let fixture: ComponentFixture<WithdrawfundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawfundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawfundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
