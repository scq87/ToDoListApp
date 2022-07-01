import { AfterViewInit, Component, } from '@angular/core';
import { MaterialService } from '../guard/material.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements  AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    MaterialService.initializeParallax();
    MaterialService.initializeSlider();
  }
  
  ngOnInit(): void {
  }

}
