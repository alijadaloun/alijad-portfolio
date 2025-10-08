import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteBarComponent } from './quote-bar.component';

describe('QuoteBarComponent', () => {
  let component: QuoteBarComponent;
  let fixture: ComponentFixture<QuoteBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
