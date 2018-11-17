import { Injectable } from '@angular/core';
import { Data } from './data';
import { Datas } from './mock-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor() { }

  getList(): Observable<Data[]> {
    return of(Datas);
  }

  getMember(id: number): Observable<Data> {
    return of(Datas.find(f => f.id === id));
  }

  setMember(data: any) {
    // console.log(data);
    var index = Datas.findIndex(x => x.id === data.id);
    // console.log(index);
    // var index= Datas.indexOf(x=>x=== data);
    Datas[index] = {
      id: data.id,
      name: data.name,
      lname: data.lname,
      mo: data.mo,
      age: data.age,
      gender: data.gender,
      hobies: {
        cricket: data.hobies.cricket,
        movies: data.hobies.movies,
        chess: data.hobies.chess,
      },
      email: data.email,
      // image:data.image,
    };
    // console.log(Datas);
  }

  addMember(data: any) {
    var number = Datas.map(x => { return x.id });
    var maxid = Math.max.apply(Math, number);
    maxid++;
    Datas.push({
      id: maxid,
      name: data.name,
      lname: data.lname,
      mo: data.mo,
      age: data.age,
      gender: data.gender,
      hobies: {
        cricket: data.hobies.cricket,
        movies: data.hobies.movies,
        chess: data.hobies.chess,
      },
      email: data.email,
      // image:data.image,
    });
  }

  deleteMember(id: number) {
    var index = Datas.findIndex(x => x.id === id);
    Datas.splice(index, 1);
  }
}
