import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-processos',
    templateUrl: './processos.page.html',
    styleUrls: ['./processos.page.scss'],
})
export class ProcessosPage implements OnInit {
    processos: Observable<any>;
    films: Observable<any>;

    constructor(public httpClient: HttpClient) {
        let myrequest = this.httpClient.get('http://5c312fced18a50001463d3e8.mockapi.io/api/v1/processos')
            .pipe(map((response => response)));

    }

    ngOnInit() {

    }

}
