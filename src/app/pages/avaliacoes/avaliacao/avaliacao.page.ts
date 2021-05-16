import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Avaliacao } from 'src/app/interfaces/avaliacao';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.page.html',
  styleUrls: ['./avaliacao.page.scss'],
})
export class AvaliacaoPage implements OnInit {

  avaliacao: Avaliacao;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.avaliacao = JSON.parse(this.route.snapshot.params['avaliacao']);
  }

}
