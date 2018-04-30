import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MoviesService } from '../../services/restaurants.service';

@Component({
  selector: 'app-restaurant-create',
  templateUrl: './restaurant-create.component.html',
  styleUrls: ['./restaurant-create.component.css']
})
export class RestaurantCreateComponent implements OnInit {

  constructor(private restaurantService: RestaurantService, private router: Router) { }

  ngOnInit() {}

  submit() {
    const data = { ... };
    this.restaurantService.create(data)
      .then(() => this.router.navigate(['/restaurants']));
  }
}
