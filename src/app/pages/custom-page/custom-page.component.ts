import { Component, signal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';

import { heroes } from '../../data/hero.data';

import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, CanFlyPipe, HeroColorPipe, HeroTextColorPipe, HeroCreatorPipe, HeroSortByPipe, HeroFilterPipe, TitleCasePipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {

  public name = signal<string>('Jorge Lagos');
  public upperCase = signal<boolean>(true);

  public heroes = signal<Hero[]>(heroes);

  public searchQuery = signal<string>('');
  public sortBy = signal<keyof Hero|null>(null);


}
