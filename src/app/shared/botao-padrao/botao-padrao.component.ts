import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-padrao',
  templateUrl: './botao-padrao.component.html',
  styleUrls: ['./botao-padrao.component.css']
})
export class BotaoPadraoComponent implements OnInit {

  @Input('corBotao') corBotao = '#253C89';
  @Input('corFonteBotao') corFonteBotao ='#FFFFFF'

  constructor() { }

  ngOnInit(): void {
  }

}
