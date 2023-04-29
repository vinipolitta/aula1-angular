import { Component, Input, OnInit } from '@angular/core';
import { TransfereciaService } from '../services/transferecia.service';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: any[] = [];
  coluns = ['Data', 'Valor', 'Destino']
  constructor(private service: TransfereciaService) { }
  ngOnInit(): void {
    console.log(this.transferencias);
    this.getTransfer();
  }

  getTransfer() {
    this.service.getTransfers().subscribe((res: Transferencia[]) => {
      this.transferencias = res
      console.log(this.transferencias);

    })
  }
}
