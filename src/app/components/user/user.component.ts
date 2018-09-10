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

  constructor(private dataService: DataService) {
    console.log('UserComponent.constructor ... start ');
    dataService.getJSON().subscribe(data => {
      console.log('... data ... start2');
      console.log(data);
      console.log('... data ... done2');
    })
    console.log('DataService.constructor ... done');
    console.log('UserComponent.constructor ... done');
  }

  ngOnInit() {
    console.log('ngOnInit ...');
  }

}
