import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FruitDetailComponent } from './detail.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('DetailComponent', () => {
  let component: FruitDetailComponent;
  let fixture: ComponentFixture<FruitDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitDetailComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
