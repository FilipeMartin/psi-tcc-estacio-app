import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CargaExercicio, Exercicio } from 'src/app/interfaces/exercicio';


@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.page.html',
  styleUrls: ['./exercicios.page.scss'],
})
export class ExerciciosPage implements OnInit {

  cargaExercicio: CargaExercicio;

  constructor(
    private service: ApiService,
    private route: ActivatedRoute
  ) {
    this.cargaExercicio = this.service.getCargaExercicio(this.route.snapshot.params['cargaExercicioId']);
  }

  async ngOnInit() {
  }

}
