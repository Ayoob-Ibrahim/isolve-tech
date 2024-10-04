import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlphabetOnly]',
  standalone: true
})
export class AlphabetOnlyDirective {

  constructor(private el: ElementRef) { }

  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
  
    const charCode = event.charCode;
    if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122))) {
      event.preventDefault();
    }
  }
}
