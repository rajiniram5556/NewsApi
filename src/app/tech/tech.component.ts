import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }
  technews:any=[];
  ngOnInit(): void {

    this.api.tcnews().subscribe((result:any) => {
      console.log(result.articles);
      this.technews=result.articles;
  })
  }

}
