import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit{
  authors;
  isClicked: boolean;

  constructor(service: AuthorService) {
    this.authors = service.getAuthors();
  }

  ngOnInit(): void {}

  onClick() {
    this.isClicked = !this.isClicked;
  }

}
