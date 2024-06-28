import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesModuleComponent } from './routes-module.component';

describe('RoutesModuleComponent', () => {
  let component: RoutesModuleComponent;
  let fixture: ComponentFixture<RoutesModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutesModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoutesModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
