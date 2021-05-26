import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Avaliacao } from 'src/app/interfaces/avaliacao';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.page.html',
  styleUrls: ['./avaliacao.page.scss'],
  providers: [DatePipe]
})
export class AvaliacaoPage implements OnInit {

  avaliacao: Avaliacao;
  data: Array<{title: string, value: string | number}>;

  constructor(private route: ActivatedRoute, private datePipe: DatePipe) { }

  ngOnInit() {
    this.avaliacao = JSON.parse(this.route.snapshot.params['avaliacao']);

    this.data = [
      {title: 'Altura', value: `${this.avaliacao.altura}`},
      {title: 'Peso', value: `${this.avaliacao.peso}`},
      {title: 'Imc', value: `${this.avaliacao.imc}`},
      {title: 'Ombro', value: `${this.avaliacao.ombro}cm`},
      {title: 'Braço direito', value: `${this.avaliacao.bracoDireito}cm`},
      {title: 'Braço esquerdo', value: `${this.avaliacao.bracoEsquerdo}cm`},
      {title: 'Antebraço direito', value: `${this.avaliacao.anteBracoDireito}cm`},
      {title: 'Antebraço esquerdo', value: `${this.avaliacao.anteBracoEsquerdo}cm`},
      {title: 'Peitoral', value: `${this.avaliacao.peitoral}cm`},
      {title: 'Cintura', value: `${this.avaliacao.cintura}cm`},
      {title: 'Abdômen', value: `${this.avaliacao.abdomem}cm`},
      {title: 'Quadril', value: `${this.avaliacao.quadril}cm`},
      {title: 'Perna direita', value: `${this.avaliacao.pernaDireita}cm`},
      {title: 'Perna esquerda', value: `${this.avaliacao.pernaEsquerda}cm`},
      {title: 'Panturrilha direita', value: `${this.avaliacao.panturrilhaDireita}cm`},
      {title: 'Panturrilha esquerda', value: `${this.avaliacao.panturrilhaEsquerda}cm`},
      {title: 'Data da avaliação', value: this.datePipe.transform(this.avaliacao.dataAvaliacao, `dd/MM/yyyy 'às' HH:mm`)}
    ];
  }

}
