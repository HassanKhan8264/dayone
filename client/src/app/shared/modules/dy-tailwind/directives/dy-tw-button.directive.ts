import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
  selector: "[tw-button]",
})
export class TailwindButtonDirective implements OnInit {
  @Input() rounded = false;
  classes = ["tw-button"];
  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.backgroundColor = "var(--theme-color-1)";
    // this.el.nativeElement.className = "tw-button";
    // this.el.nativeElement.classList.add("tw-button");
  }
  ngOnInit(): void {
    // this.el.nativeElement.className += "tw-button";
    this.addClass(this.classes);
    if (this.rounded) {
      // this.el.nativeElement.classList.add("rounded-full");
      this.addClass(["rounded-full"]);
    }
  }
  addClass(classes) {
    this.el.nativeElement.classList.add(...classes);
  }
  //   @HostListener("mouseover")
  //   onMouseOver() {
  //     this.el.nativeElement.style.transition;
  //     this.el.nativeElement.style.backgroundColor = "var(--theme-color-1)";
  //   }
  //   @HostListener("mouseout")
  //   onMouseLeave() {
  //     this.el.nativeElement.style.transition;
  //     this.el.nativeElement.style.backgroundColor = "transparent";
  //   }
}
