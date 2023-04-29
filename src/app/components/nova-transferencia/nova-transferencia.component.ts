import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransfereciaService } from '../services/transferecia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {
  @Output() aoTransferir = new EventEmitter<any>();
  @Output() valoresComErro = new EventEmitter<string>();
  title = 'aula1-angular';
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: TransfereciaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      valor: [''],
      destino: ['']
    });
  }

  transferir() {
    if (this.ehValido()) {
      const valorEmitir = { valor: this.form.value.valor, destino: this.form.value.destino }
      this.service.adicionar(valorEmitir).subscribe(res => {
        console.log(res);
        this.limparCampos();
        this.router.navigate(['extrato'])
      }, (err) => {
        console.log(err);

      });
    }
  }

  limparCampos() {
    this.form.reset()
  }

  private ehValido() {

    const valido = this.form.value.valor > 0;
    console.log(valido);

    if (!valido) {
      this.valoresComErro.emit('Informe um valor válido');
    }
    return valido;

  }
}
