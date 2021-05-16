import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Avaliacao } from 'src/app/interfaces/avaliacao';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-avaliacoes',
  templateUrl: './avaliacoes.page.html',
  styleUrls: ['./avaliacoes.page.scss'],
})
export class AvaliacoesPage implements OnInit {

  avaliacoes: Array<Avaliacao>;
  load: HTMLIonLoadingElement;

  constructor(
    private service: ApiService,
    public loadingController: LoadingController
  ) {
  }

  async ngOnInit() {
    await this.loading();
    this.avaliacoes = await this.service.getAvaliacoes();
    this.load.dismiss();
  }

  async loading() {
    this.load = await this.loadingController.create({
      message: 'Carregando...',
      duration: 60000
    });
    await this.load.present();
  }

  convertJson(avaliacao: Avaliacao) {
    return JSON.stringify(avaliacao);
  }

}
