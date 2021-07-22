import { Component } from '@angular/core';


@Component({
  selector: 'debts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Debts';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'debts', icon: 'view_list', title: 'Debts'}
  ]
}
