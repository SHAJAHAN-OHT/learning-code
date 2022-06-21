import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfCreationComponent } from './pdf-creation.component';

describe('PdfCreationComponent', () => {
  let component: PdfCreationComponent;
  let fixture: ComponentFixture<PdfCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
