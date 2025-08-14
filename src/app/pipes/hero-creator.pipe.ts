import { Pipe, PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroCreator'
})
export class HeroCreatorPipe implements PipeTransform {

  transform(value: Creator): string {
    let creator = '';

    if (value === Creator.DC) creator = 'DC';
    if (value === Creator.Marvel) creator = 'Marvel';

    return creator;
  }

}
