import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { CargaExercicio } from 'src/app/interfaces/exercicio';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-carga-exercicios',
  templateUrl: './carga-exercicios.page.html',
  styleUrls: ['./carga-exercicios.page.scss'],
})
export class CargaExerciciosPage implements OnInit {

  cargaExercicios: Array<CargaExercicio>;
  load: HTMLIonLoadingElement;

  constructor(
    private service: ApiService,
    private loadingController: LoadingController
  ) {
  }

  async ngOnInit() {
    await this.loading();
    this.cargaExercicios = await this.service.getCargaExercicios();
    this.load.dismiss();
  }

  async loading() {
    this.load = await this.loadingController.create({
      message: 'Carregando...',
      duration: 60000
    });
    await this.load.present();
  }

}
