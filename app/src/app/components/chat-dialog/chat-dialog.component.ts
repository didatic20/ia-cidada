import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss'],
})
export class ChatDialogComponent implements OnInit {

  userName = '';
  messagesToShow = [];

  chatbot = {

    answsers: {
      greeting: [
        { msg: `Oi${this.userName}, sou o Júlio, seu assistente virtual da IA Cidadã, 
        irei lhe auxiliar na identificação e no monitoramento dos sintomas da COVID-19.`,
        delay: 5000
        },
        { msg: `Meu objetivo é te apoiar, oferecer condições e conhecimento 
        para que você lide com esse momento da melhor maneira possível.`,
        delay: 5000
        },
        { msg: `A nossa referência é o Ministério da Saúde, 
        órgão do Poder Executivo Federal responsável pela assistência à saúde dos brasileiros.`,
        delay: 5000
        },
        { msg: `Nossa conversa é confidencial, as informações serão armazenadas em segurança e 
        serão utilizadas apenas para acompanhamento de casos de indivíduos sintomáticos que não necessitam atendimento médico.`,
        delay: 5000
        },
        { msg: `Aos que precisarem de atendimento médico, haverá um direcionamento ao final desse atendimento. 
        É importante salientar que essa interação <strong>não se trata de um atendimento médico</strong>.`,
        delay: 5000
        },
        { msg: `Vamos começar?`,
        delay: 3000
        },
        { msg: `Primeiro gostaria de saber um pouco mais sobre você. Por favor, informe:`,
        delay: 3000
        },

      ],
      datas: [
        { name: 'age', msg: 'Qual a sua idade?', response: '' },
        { name: 'gender', msg: 'Nos informe seu sexo:', response: '' },
        { name: 'state', msg: 'Estado', response: '' },
        { name: 'city', msg: 'Município', response: '' },
        { name: 'district', msg: 'Bairro', response: '' },
      ],
      symptoms: [
        { msg: 'Febre', response: 0 },
        { msg: 'Tosse', response: 0 },
        { msg: 'Diarreia', response: 0 },
        { msg: 'Dor de cabeça', response: 0 },
        { msg: 'Dor de garganta', response: 0 },
        { msg: 'Dores no corpo/mal estar', response: 0 },
        { msg: 'Conjuntivite', response: 0 },
        { msg: 'Coriza ou nariz entupido', response: 0 },
        { msg: 'Espirros', response: 0 },
        { msg: 'Perda do paladar', response: 0 },
        { msg: 'Perda do olfato', response: 0 },
        { msg: 'Cansaço', response: 0 },
        { msg: 'Falta de ar', response: 0 },
      ],
      comorbidities: [
        { msg: 'Diabetes', response: 0 },
        { msg: 'Hipertensão arterial', response: 0 },
        { msg: 'Insuficiência renal crônica', response: 0 },
        { msg: 'Doença respiratória crônica', response: 0 },
        { msg: 'Doença cardiovascular', response: 0 },
        { msg: 'Câncer', response: 0 },
      ],
      extras: [
        { msg: 'Você trabalha, mora ou tem contato frequente com alguém que trabalhe na área da saúde?', response: 0 },
        { msg: 'Você mora/convive com pessoas que fazem parte do grupo de risco?', response: 0 },
        { msg: 'Você está em isolamento social?', response: 0 }
      ]
    }
  };

  constructor() { }

  async ngOnInit() { 
    await this.onRowAdded();
  }


  async onRowAdded() {
    const greetings = this.chatbot.answsers.greeting;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < greetings.length; i++) {
      const li = `
      <div class="message-left">
        <span class="message-text">${greetings[i].msg}</span>
      </div>
      `;
      console.log(greetings[i]);
      this.messagesToShow.push(li);
      await this.delay(greetings[i].delay);
    }


  }

/*   private scrollToBottom() {
    
  }

  scrollToTop() {
    (function smoothscroll() {
        const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - (currentScroll / 8));
        }
    })();
}
 */

  private delay(ms: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }


}


