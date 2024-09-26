import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotlazyComponent } from './notlazy.component';

describe('NotlazyComponent', () => {
  let component: NotlazyComponent;
  let fixture: ComponentFixture<NotlazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotlazyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotlazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
