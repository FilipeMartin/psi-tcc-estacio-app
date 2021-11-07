import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { Exercicio } from 'src/app/interfaces/exercicio';
import { Professor } from 'src/app/interfaces/professor';


interface List {
  title: string;
  text: string | number;
}

@Component({
  selector: 'app-exercicio',
  templateUrl: './exercicio.page.html',
  styleUrls: ['./exercicio.page.scss'],
})
export class ExercicioPage implements OnInit {

  professor: Professor;
  exercicio: Exercicio;
  list: Array<List>;

  load: HTMLIonLoadingElement;

  constructor(
    private service: ApiService,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {
    const {cargaExercicioId, exercicioId} = this.route.snapshot.params;

    this.exercicio = this.service.getExercicio(cargaExercicioId, exercicioId);
    this.buildList();
  }

  async ngOnInit() {
    this.professor = await this.service.getProfessor();
  }

  buildList() {
    this.list = [
      {title: 'Série', text: `${this.exercicio.quantidadeSeries}x`},
      {title: 'Repetições', text: this.exercicio.quantidadeRepeticoes},
      {title: 'Peso', text: `${this.exercicio.peso}kg`},
    ];
  }

  openUrl() {
    window.open(`http://api.whatsapp.com/send?1=pt_BR&phone=${this.professor?.telefoneCelular}`,'_system', 'location=yes');
  }

  editarPeso(peso: number) {
    this.alertController.create({
      header: 'Editar Peso',
      message: 'Digite o peso desejado (KG)',
      inputs: [
        {
          name: 'peso',
          placeholder: 'Peso',
          type: 'number',
          min: 0,
          value: peso
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: (data: any) => {
          }
        },
        {
          text: 'Confirmar',
          handler: async ({peso}) => {
            if (peso >= 0) {
              try {
                await this.loading();

                await this.service.editPeso({
                  cargaExercicioId: this.exercicio.cargaExerciciosId,
                  exercicioId: this.exercicio.id,
                  peso: peso
                });

                this.exercicio.peso = peso;
                this.buildList();

              } catch (e) {
                console.error(e);
              } finally {
                this.load.dismiss();
              }
            } else {
              return false;
            }
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

  async loading() {
    this.load = await this.loadingController.create({
      message: 'Carregando...',
      duration: 60000
    });
    await this.load.present();
  }

}
