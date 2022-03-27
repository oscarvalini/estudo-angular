import { Component, OnInit } from '@angular/core';
import { faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dicionario-consulta',
  templateUrl: './dicionario-consulta.component.html',
  styleUrls: ['./dicionario-consulta.component.css']
})
export class DicionarioConsultaComponent implements OnInit {

  iconeConfig = faGear
  constructor() { }

  ngOnInit(): void {
  }

}
