import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowindividualComponent } from './showindividual.component';

describe('ShowindividualComponent', () => {
  let component: ShowindividualComponent;
  let fixture: ComponentFixture<ShowindividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowindividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowindividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
