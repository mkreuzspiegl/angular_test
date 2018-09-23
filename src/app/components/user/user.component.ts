import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string; // = 'John Doe';
  json$: Object;

  constructor(private dataService: DataService) {
    dataService.getComments().subscribe(data => {
    });
    console.log('10 user.constructor ... done');
  }

  ngOnInit() {
    // Daten werden beim Initialisieren der Komponente geladen
    this.dataService.getPhotos().subscribe(
      data => {
        this.json$ = data;
      }
    );
  }

}
