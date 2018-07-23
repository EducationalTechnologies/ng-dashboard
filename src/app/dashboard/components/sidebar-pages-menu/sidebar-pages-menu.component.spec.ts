import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPagesMenuComponent } from './sidebar-pages-menu.component';

describe('SidebarPagesMenuComponent', () => {
  let component: SidebarPagesMenuComponent;
  let fixture: ComponentFixture<SidebarPagesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarPagesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarPagesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
