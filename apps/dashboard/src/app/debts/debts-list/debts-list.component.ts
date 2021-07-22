import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Debt } from '@debts/api-interfaces';

@Component({
  selector: 'debts-debts-list',
  templateUrl: './debts-list.component.html',
  styleUrls: ['./debts-list.component.scss']
})
export class DebtsListComponent {
  @Input() debts: Debt[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();


}
