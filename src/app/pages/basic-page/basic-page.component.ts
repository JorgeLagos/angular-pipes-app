import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';

import { LocaleService } from '../../services/locale.service';

import type { AvailableLocale } from '../../interfaces/AvailableLocale.interface';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {

  public nameLower = signal<string>('jorge');
  public nameUpper = signal<string>('JORGE');
  public nameFull = signal<string>('jOrgE LaGoS');

  public customDate = signal<Date>(new Date());

  public tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
      console.log('tick')
    }, 1000);

    onCleanup(() => clearInterval(interval));
  });

}
