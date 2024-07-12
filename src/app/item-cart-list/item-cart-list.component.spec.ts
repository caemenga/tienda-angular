import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCartListComponent } from './item-cart-list.component';

describe('ItemCartListComponent', () => {
  let component: ItemCartListComponent;
  let fixture: ComponentFixture<ItemCartListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemCartListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
