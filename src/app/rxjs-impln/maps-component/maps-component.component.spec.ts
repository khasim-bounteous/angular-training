import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsComponentComponent } from './maps-component.component';

describe('MapsComponentComponent', () => {
  let component: MapsComponentComponent;
  let fixture: ComponentFixture<MapsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
