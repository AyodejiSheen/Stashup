import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatestashComponent } from './createstash.component';

describe('CreatestashComponent', () => {
  let component: CreatestashComponent;
  let fixture: ComponentFixture<CreatestashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatestashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatestashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
