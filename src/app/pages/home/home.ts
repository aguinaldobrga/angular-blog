import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { dataFake } from '../../data/dataFake';
import { MenuTitle } from "../../components/menu-title/menu-title";
import { BigCard } from "../../components/big-card/big-card";
import { SmallCardComponent } from "../../components/small-card/small-card";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MenuTitle, BigCard, SmallCardComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  data = dataFake;
}
