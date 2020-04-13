import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  chatbot = {
    answsers: {
      datas: [
        { key: 'age', question: 'Idade', response: '' },
        { key: 'gender', question: 'Sexo', response: '' },
        { key: 'state', question: 'Estado', response: '' },
        { key: 'city', question: 'Município', response: '' },
        { key: 'district', question: 'Bairro', response: '' },
      ],
      symptoms: [
        { question: 'Idade', response: ''},
        { question: 'Sexo', response: ''},
        { question: 'Estado', response: ''},
      ],
      comorbidities: [
        { question: 'Diabetes', response: 0},
        { question: 'Hipertensão arterial', response: 0},
        { question: 'Insuficiência renal crônica', response: 0},
        { question: 'Doença respiratória crônica', response: 0},
        { question: 'Doença cardiovascular', response: 0},
        { question: 'Câncer', response: 0},
      ],
      extras: [
        { question: 'Você trabalha, mora ou tem contato frequente com alguém que trabalhe na área da saúde?', response: 0},
        { question: 'Você mora/convive com pessoas que fazem parte do grupo de risco?', response: 0 },
        { question: 'Você está em isolamento social?', response: 0 },
        { question: ''}
      ]


    }
    ]
  };

  constructor() { }

  ngOnInit() {}

}
