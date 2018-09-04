import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string = 'John Doe';
  constructor() {
    console.log('constructor ...');
  }

  ngOnInit() {
    console.log('ngOnInit ...');
  }

}
export interface Category {
  prop: number;
  name: string;
}
export class Post {
  category: Category[];
  constructor(obj: Category[]) {
    this.category = obj;// as Category[];
    console.log(this.category[0].name);
  }
  print() {
    console.log(this.category);
  }
}
export class Post2 extends Post {
  printMe() {
    console.log(this.category);
  }
}
let json =
  [
    {
      "prop": 1, "name": "cat1"
    },
    {
      "prop": 2, "name": "cat2", "and": "more"
    }
  ];
let post2 = new Post2(json);
let post = post2 as Post;
post2.printMe();
post.print();
console.log(post);