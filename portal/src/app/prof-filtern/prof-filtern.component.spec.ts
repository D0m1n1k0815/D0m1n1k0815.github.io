import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfFilternComponent } from './prof-filtern.component';

describe('ProfFilternComponent', () => {
  let component: ProfFilternComponent;
  let fixture: ComponentFixture<ProfFilternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfFilternComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfFilternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
