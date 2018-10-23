import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders() {
    return LEADERS;
  }

  getLeader(id: number): Promise<Leader> {
    return new Promise(resolve => {
      setTimeout(() => resolve(LEADERS.filter((leader)=>(leader.id===id))[0])
        ,2000);
    });
  }

  getFeaturedLeader(): Promise<Leader> {
    return new Promise(resolve => {
      setTimeout(LEADERS.filter((leader)=>(leader.featured))[0], 
        2000);
    });
  }

}
