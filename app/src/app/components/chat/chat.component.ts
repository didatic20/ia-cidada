import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  chatbot = {
    answsers: [
      { id: 'age', label: 'Idade', value: ''},
      { id: 'gender', label: 'Sexo', value: ''},
      { id: 'state', label: 'Estado', value: ''},
    ]
  };
  constructor() { }

  ngOnInit() {}

}
