import { Component, OnInit } from '@angular/core';
import {TcnewsapiService } from '../service/tcnewsapi.service'

@Component({
  selector: 'app-topheadlines',
  templateUrl: './topheadlines.component.html',
  styleUrls: ['./topheadlines.component.css']
})
export class TopheadlinesComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }
 topheadlines:any=[];
 
   
  ngOnInit(): void {

    this.api.tcheadlines().subscribe((result:any) => {
      console.log(result.articles);
      this.topheadlines=result.articles;
  })

  
}

}
