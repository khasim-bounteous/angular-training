import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarrypotterMoviesComponent } from './harrypotter-movies.component';

describe('HarrypotterMoviesComponent', () => {
  let component: HarrypotterMoviesComponent;
  let fixture: ComponentFixture<HarrypotterMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HarrypotterMoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HarrypotterMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
