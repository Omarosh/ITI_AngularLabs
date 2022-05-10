import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConleftpanelComponent } from './conleftpanel.component';

describe('ConleftpanelComponent', () => {
  let component: ConleftpanelComponent;
  let fixture: ComponentFixture<ConleftpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConleftpanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConleftpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
