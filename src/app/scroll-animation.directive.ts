import { Directive } from '@angular/core';
import {  ElementRef, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: false
})
export class ScrollAnimationDirective implements OnInit {
  @Input() animationClass: string = 'fade-in-visible'; // Default animation class
  @HostBinding('class') elementClass = 'fade-in'; // Initial class before animation

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.elementClass = this.animationClass; // Apply animation class
        }
      },
      { threshold: 0.3 } // Element becomes visible when 20% is in view
    );

    observer.observe(this.el.nativeElement);
  }
}
