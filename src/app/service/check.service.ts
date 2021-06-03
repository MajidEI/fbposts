import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckService {
	private mSource = new Subject<any>();
	src$ = this.mSource.asObservable();
  	constructor() { }
	getstatus(stat: any){
  		this.mSource.next(stat);
	}
}
