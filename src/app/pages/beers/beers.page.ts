import { Component, OnInit } from '@angular/core';
import { WebServiceBeersService } from 'src/app/services/web-service-beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.page.html',
  styleUrls: ['./beers.page.scss'],
})
export class BeersPage implements OnInit {

  beers = [];

  constructor(private WebServiceBeersService: WebServiceBeersService) { }

  ngOnInit() {
        this.getBeers();
  }
  
  getBeers(){
      this.WebServiceBeersService.getBeers().subscribe( 
        
      (data:any)=>{
        this.beers = data;
      },
      error=>{
        console.log(error);
      }
    )         
  } 
  async atualizaBebidas() {
    // número random
    let index = Math.floor(Math.random() * 4);
    this.consultaBebidas(index);
  }
  consultaBebidas(index: number): any {
    throw new Error("Method not implemented.");
  }
  doRefresh(event) {
    this.atualizaBebidas();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
  
}