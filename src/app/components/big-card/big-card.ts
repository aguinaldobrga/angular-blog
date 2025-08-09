import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router'; // 👈 Import necessário

@Component({
  selector: 'app-big-card',
  standalone: true, // 👈 Certifique-se de que está usando standalone
  imports: [RouterModule], // 👈 Aqui está a mágica
  templateUrl: './big-card.html',
  styleUrls: ['./big-card.css', './big-card-responsivel.css']
})
export class BigCard {
  @Input() photoCover: string = '';
  @Input() cardTitle: string = '';
  @Input() cardDescricao: string = '';
  @Input() id: string = '0';
}
