import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { WebServiceBeersService } from '../services/web-service-beers.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {


  constructor(private webservice: WebServiceBeersService, 
    private loadingController: LoadingController,
    private route: ActivatedRoute,
    private router: Route) { }

  ngOnInit() {
    
  }
}