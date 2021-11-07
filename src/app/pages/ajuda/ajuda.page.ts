import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/interfaces/professor';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.page.html',
  styleUrls: ['./ajuda.page.scss'],
})
export class AjudaPage implements OnInit {

  professor: Professor;

  constructor(private service: ApiService) {
    this.professor = this.service.getProfessor();
  }

  ngOnInit() {
  }

  openUrl() {
    window.open(`http://api.whatsapp.com/send?1=pt_BR&phone=${this.professor.telefoneCelular}`,'_system', 'location=yes');
  }

}
