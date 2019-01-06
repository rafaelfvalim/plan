import { Component, OnInit } from '@angular/core';
import {ProcessosService} from '../processos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor( public  processosService: ProcessosService) {
  }

  ngOnInit() {

  }
}
