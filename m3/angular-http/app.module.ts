import { HttpClientModule } from '@angular/common/http';

...

import { RestaurantService } from  './services/restaurant.service';

...

@NgModule({
   ...
  imports: [
    ...,
    HttpClientModule,
    ...
  ],
  providers: [
     RestaurantService
  ]
})
