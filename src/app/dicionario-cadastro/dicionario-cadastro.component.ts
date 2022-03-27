import { Component, OnInit } from '@angular/core';
import { DicionarioService } from '../dicionario.service';
import { Dicionario } from './dicionario.inteface';

@Component({
  selector: 'app-dicionario-cadastro',
  templateUrl: './dicionario-cadastro.component.html',
  styleUrls: ['./dicionario-cadastro.component.css']
})
export class DicionarioCadastroComponent implements OnInit {

  dicionarios: Dicionario[] = [];

  constructor(
    private dicionarioService: DicionarioService
  ) {}

  ngOnInit(): void {
    this.dicionarios = [...this.dicionarioService.getDicionarios()];
  }

}
