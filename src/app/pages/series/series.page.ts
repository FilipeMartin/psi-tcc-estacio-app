import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/interfaces/exercise';

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {

  exercises: Array<Exercise>;

  constructor() {
    this.exercises = [
      {
        id: 1,
        name: "Desenvolvimento com barra",
        repetition: 10,
        repetitionQtd: 3,
        url: "assets/halteres.png"
      },
      {
        id: 2,
        name: "Desenvolvimento com barra",
        repetition: 10,
        repetitionQtd: 3,
        url: "assets/halteres.png"
      },
      {
        id: 3,
        name: "Desenvolvimento com barra",
        repetition: 10,
        repetitionQtd: 3,
        url: "assets/halteres.png"
      },
      {
        id: 4,
        name: "Desenvolvimento com barra",
        repetition: 10,
        repetitionQtd: 3,
        url: "assets/halteres.png"
      }
    ]
  }

  ngOnInit() {
  }

}
