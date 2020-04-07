# Backend Routes

## HTML 
* `GET /` `StaticPagesController#root`

## API Endpoints

### `users`

* `GET /api/users` 
* `POST /api/users` - sign up

### `session`

* `POST /api/session` - log in 
*  `DELETE /api/session` - sign out 

### `restaurants`

* `GET /api/restaurants` - index of restaurants
* `GET /api/restaurants/:id` - shows a restaurant


### `reservations` 

* `GET /api/restaurants/:id/reservations` - shows reservations available to users 
* `POST /api/restaurants/:id/reservations` - creates reservations by user
* `DELETE` /api/restaurants/:id/reservations/:id`  - deletes reservation 

### `reviews`

* `GET /api/restaurants/:id/reviews` - shows reviews written by users 
* `POST /api/restaurants/:id/reviews` - creates review by user
* `DELETE /api/restaurants/:id/reviews/:id` - deletes review