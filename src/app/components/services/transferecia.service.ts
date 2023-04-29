import { Injectable } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransfereciaService {
  private URL = 'http://localhost:3000/transferencias'

  constructor(private http: HttpClient) {
  }

  getTransfers(): Observable<Transferencia[]> {
    return this.http.get<Transferencia[]>(this.URL)
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidatar(transferencia)
    return this.http.post<Transferencia>(this.URL, transferencia)

  }

  private hidatar(transferencia: Transferencia) {
    transferencia.data = new Date()
  }

}
