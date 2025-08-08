import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.html',
  styleUrls: ['./big-card.css', 
    './big-card-responsivel.css']
})
export class BigCard {
  @Input()
  photoCover: string ='';
  @Input()
  cardTitle: string = '';
  @Input()
  cardDescricao: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro corrupti est architecto, et dignissimos repudiandae dolorem nobis dolore, consectetur voluptatibus unde facilis voluptate quas ipsa vitae pariatur corporis amet incidunt.';
}