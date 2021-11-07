import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Unidade } from 'src/app/interfaces/unidade';
import { ApiService } from 'src/app/services/api.service';

declare var google;

interface Marker {
  id: string;
  position: {
    lat: number,
    lng: number
  };
  title: string;
}

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.page.html',
  styleUrls: ['./unidades.page.scss'],
})
export class UnidadesPage implements OnInit {

  unidades: Array<Unidade>;
  map = null;
  markers: Marker[];

  load: HTMLIonLoadingElement;

  constructor(
    private service: ApiService,
    private loadingController: LoadingController
  ) { }

  async ngOnInit() {
    await this.loading();
    this.unidades = await this.service.getUnidades();
    this.load.dismiss();

    this.buildMarkers(this.unidades);
    this.loadMap();
  }

  buildMarkers(unidades: Array<Unidade>) {
    this.markers = [];
    unidades.forEach((u: Unidade) => {
      this.markers.push({
        id: u.id,
        title: u.nome,
        position: {
          lat: u.localizacao.coordinates[0],
          lng: u.localizacao.coordinates[1],
        }
      });
    });
  }

  loadMap(lat: number = -22.973067, lng: number = -43.413052) {
    const mapEle: HTMLElement = document.getElementById('map');
    const myLatLng = {lat, lng};
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.renderMarkers();
      mapEle.classList.add('show-map');
    });
  }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }

  selected({detail}) {
    if(detail.value) {
      this.buildMarkers(this.unidades.filter(m => m.id == detail.value));
      const position = this.markers[0].position;
      this.loadMap(position.lat, position.lng);
    } else {
      this.buildMarkers(this.unidades);
      this.loadMap();
    }
  }

  async loading() {
    this.load = await this.loadingController.create({
      message: 'Carregando...',
      duration: 60000
    });
    await this.load.present();
  }
}
