import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = "yellow";
    console.log(this.el.nativeElement.innerHTML);
    this.el.nativeElement.innerHTML = '||' + this.el.nativeElement.innerHTML + '||';
    console.log(this.el.nativeElement.innerHTML);
  }

  constructor(private el: ElementRef) {  }

  //private el: ElementRef;
  //constructor(el: ElementRef) {
  //  this.el = el;
  //}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
