import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { CargaExercicio, Exercicio } from 'src/app/interfaces/exercicio';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {

  cargaExercicio: CargaExercicio;
  load: HTMLIonLoadingElement;

  constructor(
    private service: ApiService,
    public loadingController: LoadingController
  ) {
  }

  async ngOnInit() {
    await this.loading();
    this.cargaExercicio = await this.service.getCargaExercicio();
    this.load.dismiss();
  }

  async loading() {
    this.load = await this.loadingController.create({
      message: 'Carregando...',
      duration: 60000
    });
    await this.load.present();
  }

  convertJson(exercicio: Exercicio) {
    return JSON.stringify(exercicio);
  }

}
