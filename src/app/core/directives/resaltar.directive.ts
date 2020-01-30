import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  constructor(private el: ElementRef) { }

  aplicarColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('click' , ['$event'])
  molestar(event: any) {
    console.log(event);
    alert('Hola.. ');
  }

  @HostListener('mouseenter')
  cambiarColor() {
    this.aplicarColor('red');
  }

  @HostListener('mouseleave')
  clearColor() {
    this.aplicarColor(null);
  }

}
