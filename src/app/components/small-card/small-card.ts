import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports:[RouterModule],
  templateUrl: './small-card.html',
  styleUrls: [
    './small-card.css', 
    './small-card-responsivel.css']
  
})

export class SmallCardComponent {
    @Input()
    photoCover: string ='';
    @Input()
    cardTitle: string = '';

    @Input()
    id: string = '0';

}
