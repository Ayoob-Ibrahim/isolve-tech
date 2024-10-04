import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumbers]',
  standalone: true // Specify that this is a standalone directive
})
export class OnlyNumbersDirective {
  constructor(private el: ElementRef) { }

  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
    const charCode = event.charCode;
    // Allow only digits (0-9) and prevent default if not
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    // Prevent pasting non-numeric characters
    const clipboardData = event.clipboardData || window['clipboardData'];
    const pastedData = clipboardData.getData('text');
    if (!/^\d*$/.test(pastedData)) {
      event.preventDefault();
    }
  }
}
