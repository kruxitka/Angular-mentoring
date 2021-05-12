import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightNewest]'
})
export class HighlightNewestDirective implements OnChanges {
  @Input('appHighlightNewest') public date: string;

  constructor(private elementRef: ElementRef) {
    this.date = '';
  }

  public ngOnChanges(): void {
    this.highlightNewestCourse(this.date);
  }

  private highlightNewestCourse(creationDate: string): void {
    const currentDate = new Date().toJSON();
    const currentDateInMillisec = new Date().getTime();
    const TwoWeeksInMillisec = 1209600000;
    const twoWeeksFromCurrentDate = new Date(currentDateInMillisec - TwoWeeksInMillisec).toJSON();

    if (creationDate < currentDate && creationDate >= twoWeeksFromCurrentDate ) {
      this.elementRef.nativeElement.style.border = '2px solid green';
    } else if (creationDate > currentDate) {
      this.elementRef.nativeElement.style.border = '2px solid blue';
    }
  }

}
