import { Injectable } from '@angular/core';
import { Debt } from "@debts/api-interfaces";
import { HttpClient } from "@angular/common/http";

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class DebtsService {
  model= 'debts';

  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get<Debt[]>(this.getUrl())
  };

  find(debtId: string) {
    return this.httpClient.get<Debt>(this.getUrlById(debtId))
  };

  create(debts: Debt) {
    return this.httpClient.post<Debt>(this.getUrl(), debts)
  };

  update(debts: Debt) {
    return this.httpClient.patch<Debt>(this.getUrlById(debts.id), debts )
  };

  delete({ id }: Debt) {
    return this.httpClient.delete<Debt>(this.getUrlById(id))
  };

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  }
}
