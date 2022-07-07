import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, fromEvent, Observable, startWith, map } from 'rxjs';
import { data, Person } from './interfaces/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'peopleWebapp';
  people?: Person[] = data;
  target?: string;
  @ViewChild('textInput', { static: true }) textInput!: ElementRef;

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  
  ngOnInit(): void {
    fromEvent(this.textInput.nativeElement, 'keyup')
      .pipe(debounceTime(0))
      .subscribe((input: any) => {
        if (input.target.value === '') this.target = input.target.value   
      });
  }

  submitSearch() {
    // console.log(this.textInput.nativeElement.value === '')    
    this.target = this.textInput.nativeElement.value    
  }
}
