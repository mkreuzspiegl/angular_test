import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface IData {
  id: string;
  name: string;
  value: Object;
}


@Injectable({
  providedIn: 'root'
})


export class DataService {
  data$: IData[][] = [];
  start: number = new Date().getTime();
  end: number = new Date().getTime();

  constructor(private http: HttpClient) {
    const lines = 4;
    const cols = 4;
    const parallelLoading = true;

    let iDataWait1: IData; /////////////
    for (let i = 0; i < lines; i++) {
      const iDataLine: IData[] = [];
      let iDataWait2: IData; //////////////
      for (let ii = 0; ii < cols; ii++) {
        const iData: IData = {
          id: i + '-' + ii,
          name: null,
          value: null
        };
        const iDataWait = parallelLoading ? iDataWait2 : iDataWait1;
        this.startLoad(iData, iDataWait);
        iDataLine.push(iData);
        iDataWait1 = iData;
        iDataWait2 = iData;
      }
      this.data$.push(iDataLine);
    }
    console.log('----------------------');
    console.log(this.data$);
  }
  startLoad(iData: IData, iDataWait: IData) {
    const i = Math.floor((Math.random() * 3) + 1);
    switch (i) {
      case 1: // Photos
        iData.name = 'loading Photos .';
        this.getPhotos().subscribe(data => {
          this.parseData(data, iData, iDataWait);
        });
        break;
      case 2: // Posts
        iData.name = 'loading Posts .';
        this.getPosts().subscribe(data => {
          this.parseData(data, iData, iDataWait);
        });
        break;
      case 3: // Comments
      default:
        iData.name = 'loading Comments .';
        this.getComments().subscribe(data => {
          this.parseData(data, iData, iDataWait);
        });
        break;
    }
    console.log(iData);

  }
  getPhotos(): Observable<any> {
    const val = this.http.get('https://jsonplaceholder.typicode.com/photos');
    return val;
  }
  getPosts(): Observable<any> {
    const val = this.http.get('https://jsonplaceholder.typicode.com/posts');
    return val;
  }
  getComments(): Observable<any> {
    const val = this.http.get('https://jsonplaceholder.typicode.com/comments');
    return val;
  }
  parseData(data: Object, iData: IData, iDataWait: IData) {
    if (iDataWait && !iDataWait.value) {
      console.log(`NO -- ${iData.name} -- ${iData.id} --`);
      iData.name += '.';
      setTimeout(() => this.parseData(data, iData, iDataWait), 100);
      return;
    } else {
      console.log(`YES -- ${iData.name} -- ${iData.id} --`);
    }
    iData.name += ' done!';
    iData.value = data;
    this.end = new Date().getTime();
  }


}
