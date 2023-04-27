import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/servicios/data.service';
import { Barrio } from '../../models/barrio';

import { Message, sendMessage } from '../../utilities/message-utils'


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  collectionSize: number = 0;
  barrios: Barrio[] = [];

  filterPost = '';
  @ViewChild('iframeCartografia') iframeCartografia!: ElementRef;

  constructor(private readonly dataSvc: DataService) { }

  ngAfterViewInit() {
    this.iframeCartografia.nativeElement.contentWindow.postMessage('shakehand', '*');
  }

  enviarMensajeAlIframe(nodo: Barrio) {
    // console.log('enviarMensajeAlIframe', nodo);
    const coordenadas = { "lat": nodo.lat, "lng": nodo.lng }
    const message = new Message('navegarCoordenadas', coordenadas);
    const iframe = this.iframeCartografia.nativeElement;
    sendMessage(iframe.contentWindow, message);
  }

  ngOnInit(): void {
    this.dataSvc.getBarrios().subscribe((data: Barrio[]) => {
      this.collectionSize = data.length;
      this.barrios = data;
    });
  }

  seleccionarFila(barrio: Barrio) {
    this.enviarMensajeAlIframe(barrio);
    // console.log(barrio);
    this.filterPost = '';
  }

  // existenResustados(): boolean {
  //   console.log('existenResustados', this.barrios.length);
  //   return this.barrios.length > 0;
  // }

}
