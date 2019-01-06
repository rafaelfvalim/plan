import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({
    providedIn: 'root'
})
export class ProcessosService {

    constructor(public http: HttpClient) {
        console.log('Teste de service');
    }

    getRemoteData(){
        this.http.get('http://5c312fced18a50001463d3e8.mockapi.io/api/v1/processos').map(res => res).subscribe(data => {
            console.log(data);
        });
    }

    getById(id) {
        return this.http.get('http://5c312fced18a50001463d3e8.mockapi.io/api/v1/processos/'+ id)
            .toPromise()
            .then((data: any) => {
                console.log('Success', data);
                return JSON.parse(data);
            })
            .catch(err => {
                console.log('Error', err);
                return err;
            });
    }
    find(param) {
        return this.http.get('http://5c312fced18a50001463d3e8.mockapi.io/api/v1/processos?search='+ param)
            .toPromise()
            .then((data: any) => {
                console.log('Success', data);
                return JSON.parse(data);
            })
            .catch(err => {
                console.log('Error', err);
                return err;
            });
    }
}
