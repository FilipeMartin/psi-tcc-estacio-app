import { Component, OnInit } from '@angular/core';

declare var google;

interface Marker {
  id: number;
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

  unidades: Marker[] = [
    {
      id: 1,
      position: {
        lat: -22.973067,
        lng: -43.413052,
      },
      title: 'Parque Simón Bolivar'
    },
    {
      id: 2,
      position: {
        lat: -22.995067,
        lng: -43.413052,
      },
      title: 'Jardín Botánico'
    },
    {
      id: 3,
      position: {
        lat: -22.943067,
        lng: -43.413052,
      },
      title: 'Parque la 93'
    },
    {
      id: 4,
      position: {
        lat: -22.973067,
        lng: -43.453052,
      },
      title: 'Maloka'
    },
  ];

  map = null;
  markers: Marker[];

  constructor() { }

  ngOnInit() {
    this.markers = this.unidades;
    this.loadMap();
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
      this.markers = this.unidades.filter(m => m.id == detail.value);
      const position = this.markers[0].position;
      this.loadMap(position.lat, position.lng);
    } else {
      this.markers = this.unidades;
      this.loadMap();
    }
  }
}
