import { Component, OnInit } from '@angular/core';
import { Car } from '../../model/car';
import { CARS } from '../../mocks/mock-cars'

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[];

  constructor() {
  }

  ngOnInit() {
    this.cars = CARS;
  }
}
