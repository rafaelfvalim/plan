import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProcessosService} from '../processos.service';
import {InfiniteScroll} from 'ionic-angular';
import {ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-processos',
    templateUrl: './processos.page.html',
    styleUrls: ['./processos.page.scss'],
})
export class ProcessosPage implements OnInit {
    processos: any[];
    page: number;
    @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

    constructor(public httpClient: HttpClient, public  processosService: ProcessosService
    , public  router: ActivatedRoute) {

    }

    ngOnInit() {
        this.processos = [];
        this.page = 1;
        this.getAllProcessos(this.page);
    }

    getAllProcessos(page: number) {
        this.processosService.getAll()
            .then((result: any) => {
                for (let i = 0; i < result.length; i++) {
                    let processo = result[i];
                    this.processos.push(processo);
                    console.log(processo);
                }
            })
            .catch((error: any) => {
                console.log('erro ao listar os processos');
            });
    }


}
