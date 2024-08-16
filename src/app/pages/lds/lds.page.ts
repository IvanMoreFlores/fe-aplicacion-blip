import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Dropzone from 'dropzone';

@Component({
  selector: 'app-lds',
  templateUrl: './lds.page.html',
  styleUrls: ['./lds.page.scss'],
})
export class LdsPage implements OnInit {
  @ViewChild('sliderContainer') sliderContainer!: ElementRef;
  currentSlide = 0;

  constructor() {}

  ngAfterViewInit() {
    this.updateSliderPosition();
  }

  goToSlide(index: number) {
    const slideWidth = this.sliderContainer.nativeElement.querySelector('.slide').offsetWidth;
    this.sliderContainer.nativeElement.querySelector('.slider').style.transform = `translateX(-${slideWidth * index}px)`;
    this.currentSlide = index;
  }

  private updateSliderPosition() {
    const slideWidth = this.sliderContainer.nativeElement.querySelector('.slide').offsetWidth;
    this.sliderContainer.nativeElement.querySelector('.slider').style.transform = `translateX(-${slideWidth * this.currentSlide}px)`;
  }

  ngOnInit() {
  }

}
