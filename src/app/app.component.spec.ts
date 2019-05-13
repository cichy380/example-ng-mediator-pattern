/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar.component';
import { SideNavComponent } from './sidenav.component';
import { RightScreenComponent } from './rightscreen.component';

describe('Testy komponentu aplikacji: AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        SideNavComponent,
        RightScreenComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('powinien utworzyć aplikację', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`strona ma mieć tytuł 'Wybierz opcję:'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Wybierz opcję:');
  }));

  it('tytuł ma być wyświetlony w elemencie DIV', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.row-content-header').textContent).toContain('Wybierz opcję:');
  }));
});
