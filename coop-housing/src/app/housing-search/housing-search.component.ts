import { Component, OnInit } from '@angular/core';
import { Housing } from '../housing';

@Component({
  selector: 'app-housing-search',
  templateUrl: './housing-search.component.html',
  styleUrls: ['./housing-search.component.css']
})
export class HousingSearchComponent implements OnInit {
  private housingList: Array<Housing> = [
    {id:1, name:'Rental Co 1', street:'123 Main St.', city:'Detroit', state:'MI', zip:12345, coop:'GM', rent:500},
    {id: 2, name:'Rental Co 2', street:'459 Maple Ave.', city:'Lansing', state:'MI', zip:54321, coop:'State of Michigan', rent: 700}
  ];
  constructor() { }

  ngOnInit() {
  }

}
