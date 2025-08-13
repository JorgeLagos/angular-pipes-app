import { Component, inject, LOCALE_ID, signal } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { AvailableLocale } from '../../interfaces/AvailableLocale.interface';

import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  public localeService = inject(LocaleService);
  public currentLocale = signal(inject(LOCALE_ID));

  public routes = routes.map((route) => ({
    title: route.title ?? '',
    path: route.path ?? '',
  }));



  public changeLocale(locale: AvailableLocale) {
    console.log({ locale });
    this.localeService.changeLocale(locale);
  }

}
