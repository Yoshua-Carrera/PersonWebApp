import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Person } from '../interfaces/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.sass']
})
export class PersonComponent implements OnInit {
  @Input('people') people?: Person[]
  @Input('target') target?: string
  constructor() { }
  ngOnInit(): void {
    console.log(this.target)
  }
}
