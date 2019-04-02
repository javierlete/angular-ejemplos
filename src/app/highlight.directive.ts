import { Directive, ElementRef, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input('appHighlight') highlightColor: string;
  
  ngOnInit(): void {
    this.highlight(this.highlightColor || 'red');
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
    this.highlight(this.highlightColor || 'red');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
