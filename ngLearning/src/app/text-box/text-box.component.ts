import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {
  value: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
