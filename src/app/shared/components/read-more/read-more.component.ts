import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'en-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit, AfterViewInit {

  // the text that need to be put in the container
  @Input() text: string;
  // maximum height of the container
  @Input() maxHeight: number = 75;

  // set these to false to get the height of the expended container 
  isCollapsed: boolean = false;
  isCollapsable: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    let currentHeight = this.elementRef.nativeElement.getElementsByTagName('div')[0].offsetHeight;
    // collapsable only if the contents make container exceed the max height
    if (currentHeight > this.maxHeight) {
      this.isCollapsed = true;
      this.isCollapsable = true;
    }
    // trigger detection
    this.cdRef.detectChanges();
  }

}
