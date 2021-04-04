import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(duration: any): string {
    if (duration < 60) {
      return String(duration + 'min');
    }
    if (duration % 60 === 0) {
      return String((duration / 60) + 'h');
    }
    else {
      return String(((duration - duration % 60) / 60) + 'h' + (duration % 60) + 'min');
    }
  }

}
