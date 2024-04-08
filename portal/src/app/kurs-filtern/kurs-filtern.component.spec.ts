import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KursFilternComponent } from './kurs-filtern.component';

describe('KursFilternComponent', () => {
  let component: KursFilternComponent;
  let fixture: ComponentFixture<KursFilternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KursFilternComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KursFilternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
