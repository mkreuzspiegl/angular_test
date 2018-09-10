import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
//import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string = 'John Doe';

  //constructor() {
    constructor(private dataService: DataService) {
      console.log('UserComponent.constructor ... start ');
//    this.dataService.getPosts().subscribe((posts)) => {
//      console.log(posts);
//    });
    //this.dataService.getPosts();
    //let ds:DataService = new DataService();

    console.log('UserComponent.constructor ... done');
  }

  ngOnInit() {
    console.log('ngOnInit ...');
  }

}
