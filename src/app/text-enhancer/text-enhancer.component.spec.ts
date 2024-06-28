import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEnhancerComponent } from './text-enhancer.component';

describe('TextEnhancerComponent', () => {
  let component: TextEnhancerComponent;
  let fixture: ComponentFixture<TextEnhancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextEnhancerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextEnhancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
