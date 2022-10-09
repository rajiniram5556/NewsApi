import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';



@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }
  spnews:any=[];
  ngOnInit(): void {
    
    this.api.spnews().subscribe((result:any) => {
      console.log(result.articles);
      this.spnews=result.articles;
  })
  }

}
