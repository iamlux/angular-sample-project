import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FruitHomeComponent } from './home.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('FruitHomeComponent', () => {
  let component: FruitHomeComponent;
  let fixture: ComponentFixture<FruitHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitHomeComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should see fruit page text', () => {
    expect(fixture.nativeElement.querySelector('h1').textContent.trim()).toBe('Fruits Page');
  });
});
