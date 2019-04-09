import { Component, OnInit } from '@angular/core';
import { WebServiceBeersService } from 'src/app/services/web-service-beers.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.page.html',
  styleUrls: ['./beers.page.scss'],
})
export class BeersPage implements OnInit {

  beers = [];
  
  private arrayid = ["1", "2", "3", "4"];
  private cerveja_name:string;
  constructor(private WebServiceBeersService: WebServiceBeersService, private loadingController: LoadingController) { }

  ngOnInit() {
        this.consultaBebidas();
  }
  
  async consultaBebidas(index?) {

    if (typeof index === 'undefined') index = 3;

    // Define o parametro a ser passado
    let param = (typeof this.cerveja_name === "undefined") ? `${this.arrayid[index]}?` : `?brewed_before=${this.cerveja_name}&abv_gt=6`; //https://pixabay.com/api/?key={ KEY }&q=yellow+flowers&image_type=photo





    // loading..
    const loading = await this.loadingController.create({
      message: 'Carregando fotos...'
    });

  await loading.present();

    await this.WebServiceBeersService.getBeers().subscribe(
      data=>{
        this.beers = data;
        console.log(this.beers);
        loading.dismiss();
      },
      
      error=>{
        console.log(error);
        loading.dismiss();
      }
    )
    }



  async atualizaBebidas() {
    // número random
    let index = Math.floor(Math.random() * 4);
    this.consultaBebidas(index);
  }
  
  doRefresh(event) {
    this.atualizaBebidas();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
  
}