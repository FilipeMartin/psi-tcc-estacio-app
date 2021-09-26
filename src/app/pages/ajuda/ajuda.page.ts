import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.page.html',
  styleUrls: ['./ajuda.page.scss'],
})
export class AjudaPage implements OnInit {

  professor: any = {
    nome: 'Nome Professor',
    email: 'professor@gmail.com',
    telefone: '(21) 99639-6999'
  };

  constructor() { }

  ngOnInit() {
  }

  openUrl() {
    window.open(`http://api.whatsapp.com/send?1=pt_BR&phone=${this.professor.telefone}`,'_system', 'location=yes');
  }

}
