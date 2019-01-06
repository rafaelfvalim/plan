import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProcessosService} from '../processos.service';


@Component({
    selector: 'app-processo',
    templateUrl: './processo.page.html',
    styleUrls: ['./processo.page.scss'],
})
export class ProcessoPage implements OnInit {
    private processo: any;


    constructor(private route: ActivatedRoute, public  processosService: ProcessosService) {
        const processoId = this.route.snapshot.paramMap.get('id');
        console.log(processoId);
        this.processosService.getById(processoId)
            .then((result: any) => {
                this.processo = result;
                console.log(this.processo.codigo);
            })
            .catch((error: any) => {
                console.log('erro ao listar os processos');
            });
    }

    ngOnInit() {
    }

}
