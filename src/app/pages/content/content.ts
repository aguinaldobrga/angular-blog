// pages/content/content.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router'; // Adicione o RouterModule aqui
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  // Se for standalone, o imports é obrigatório:
  standalone: true,
  imports: [RouterModule], // IMPORTANTE: Importe o RouterModule aqui
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class ContentComponent implements OnInit {
  photoCover: string = "";
  contentTitle: string = "";
  description: string = "";
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  // Use o snapshot para ler os parâmetros da rota
  const idDaRota = this.route.snapshot.paramMap.get('id');

  if (idDaRota) {
    this.id = idDaRota;
    this.setValuesToComponent(this.id);
  } else {
    // Caso o ID não exista na URL
    console.error('Parâmetro "id" não encontrado na rota.');
  }
}

  setValuesToComponent(id: string) {
    const result = dataFake.filter(article => article.id === id)[0];

    if (result) {
      this.contentTitle = result.title;
      this.description = result.description;
      this.photoCover = result.photoCover;
    } else {
      console.error('Artigo não encontrado para o ID:', id);
    }
  }
}