import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Route } from '../../../node_modules/@angular/compiler/src/core';
import { LoadingController } from '../../../node_modules/@ionic/angular';
import { WebServiceBeersService } from '../services/web-service-beers.service';

@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.page.html',
  styleUrls: ['./descricao.page.scss'],
})
export class DescricaoPage implements OnInit {
  private bebida = {};
  constructor(private webservice: WebServiceBeersService, 
    private loadingController: LoadingController,
    private route: ActivatedRoute,
    private router: Route) { }

  ngOnInit() {
    this.consulta()
  }
private ur =  `${this.route.snapshot.paramMap.get('id')}`;

  async consulta() {
    // loading..
    const loading = await this.loadingController.create({
      message: 'Carregando filme...'
    });
    // exibir a caixa de dialogo
    await loading.present();
   
    // resgatar o ID passado 'details/:id'
    await this.webservice.getBeers(this.ur).subscribe(
      data=>{
        this.bebida = data;
      
        loading.dismiss();
      },
      error=>{
        console.log(error);
        loading.dismiss();
      }
    )
  }

}
