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

    getRemoteData() {
        this.http.get('http://5c312fced18a50001463d3e8.mockapi.io/api/v1/processos').map(res => res).subscribe(data => {
            console.log(data);
        });
    }

    getId(id) {
        return new Promise((resolve, reject) => {

            const url = 'http://5c312fced18a50001463d3e8.mockapi.io/api/v1/processos/' + id;

            this.http.get(url)
                .subscribe((result: any) => {
                        resolve(result);
                    },
                    (error) => {
                        reject(error);
                    });
        });
    }

    getAll() {
        return new Promise((resolve, reject) => {

            const url = 'http://5c312fced18a50001463d3e8.mockapi.io/api/v1/processos';

            this.http.get(url)
                .subscribe((result: any) => {
                        resolve(result);
                    },
                    (error) => {
                        reject(error);
                    });
        });
    }

    getById(id) {
        return new Promise((resolve, reject) => {
            const url = 'http://5c312fced18a50001463d3e8.mockapi.io/api/v1/processos/' + id;
            this.http.get(url)
                .subscribe((result: any) => {
                        resolve(result);
                    },
                    (error) => {
                        reject(error);
                    });
        });
    }

    find(param) {

        return new Promise((resolve, reject) => {
            const url = 'http://5c312fced18a50001463d3e8.mockapi.io/api/v1/processos?search=' + param;
            this.http.get(url)
                .subscribe((result: any) => {
                        resolve(result);
                    },
                    (error) => {
                        reject(error);
                    });
        });
    }
}
