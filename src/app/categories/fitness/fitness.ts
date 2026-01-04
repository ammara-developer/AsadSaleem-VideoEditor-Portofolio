import { Component } from '@angular/core';
import { CategoryBanner } from '../../core/category-banner/category-banner';

@Component({
  selector: 'app-fitness',
  imports: [CategoryBanner],
  standalone: true,
  templateUrl: './fitness.html',
  styleUrl: './fitness.css',
})
export class Fitness {

}
