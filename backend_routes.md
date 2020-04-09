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

### `classes`

* `GET /api/classes` - index of classes
* `GET /api/classes/:id` - shows a class


### `bookings` 

* `GET /api/classes/:id/bookings` - shows bookings available to users 
* `POST /api/classes/:id/bookings` - creates bookings by user
* `DELETE` /api/classes/:id/bookings/:id`  - deletes reservation 

### `reviews`

* `GET /api/classes/:id/reviews` - shows reviews written by users 
* `POST /api/classes/:id/reviews` - creates review by user
* `DELETE /api/classes/:id/reviews/:id` - deletes review