import { Injectable, signal } from '@angular/core';

import { AvailableLocale } from '../interfaces/available-locale.interface';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  private currentLocale = signal<AvailableLocale>('fr-FR');

  constructor() {
    this.currentLocale.set((localStorage.getItem('locale') as AvailableLocale) ?? 'es-CL')
    ;
  }

  get getLocale() {
    return this.currentLocale();
  }

  public changeLocale(locale: AvailableLocale) {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);

    window.location.reload();
  }

}
