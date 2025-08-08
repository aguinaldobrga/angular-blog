import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
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
}
