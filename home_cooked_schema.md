# HomeCooked Schema

### users
| column            | data type     | constraint                |
| ---               | ---           | ---                       |
| `id`	            | integer       | not null, primary key     |
| `email`	        | string	    | not null, indexed, unique |
| `first_name`	    | string	    | not null                  |
| `last_name`	    | string	    | not null                  |
| `description`	    | text  	    | not null                  |
| `password_digest`	| string	    | not null                  |
| `session_token`   | string        | not null, indexed, unique |

* index on `email`, unique: true
* index on `session_token`, unique: true

### classes
| column            | data type     | constraint                        |
| ---               | ---           | ---                               |
| `id` 	            | integer	    | not null, primary key             |
| `host_id`	        | integer	    | not null, foreign key             |
| `price`   	    | integer   	| not null, indexed                 |
| `title`	        | string	    | not null                          |
| `address`	        | string	    | not null                          |
| `city`	        | string	    | not null, indexed                 |
| `zip`	            | integer	    | not null, indexed                 |
| `lat`             | float         | not null                          |
| `lon`             | float         | not null                          |
| `phone_number`	| integer	    | not null                          |
| `num_guests   `	| integer	    | not null                          |
| `description`	    | text	        | not null                          |
| `open_time`	    | time	        | not null                          |
| `close_time`	    | time	        | not null                          |

* index on `city`, presence: true
* index on `zip`, presence: true
* index on `price_range`, presence: true
* `cuisine_id` references `cuisines`

### reservations
| column            | data type     | constraint                        |
| ---               | ---           | ---                               |
| `id`	            | integer	    | not null, primary key             |
| `user_id`	        | integer	    | not null, foreign key, indexed    |
| `restaurant_id`	| integer	    | not null, foreign key, indexed    |
| `start_datetime`	| datetime	    | not null                          |
| `end_datetime`	| datetime	    | not null                          |
| `table_size`	    | integer	    | not null                          |

* index on `user_id` presence: true; references `users`
* index on `restaurant_id` presence: true; references `restaurants`

### reviews
| column            | data type     | constraint                        |
| ---               | ---           | ---                               |
| `id`	            | integer	    | not null, primary key             |
| `user_id`	        | integer	    | not null, foreign key, indexed    |
| `restaurant_id`	| integer	    | not null, foreign key, indexed    |
| `overall_rating`	| integer	    | not null                          |
| `food_rating`	    | integer	    | not null                          |
| `ambiance_rating`	| integer	    | not null                          |
| `value_rating`	| integer	    | not null                          |
| `body`	        |text	        | not null                          |

* index on `user_id` presence: true; references `users`
* index on `restaurant_id` presence: true; references `restaurants`

### favorites
| column            | data type     | constraint                        |
| ---               | ---           | ---                               |
|`id`	                | integer	    | not null, primary key         |
|`user_id`	        | integer	    | not null, foreign key, indexed    |
|`restaurant_id`	    | integer	    | not null, foreign key, indexed|

* index on `user_id`, presence: true; references `users`
* index on `restaurant_id` presence: true; references `restaurants`

### cuisines
| column            | data type     | constraint                        |
| ---               | ---           | ---                               |
| `id`              | integer       | not null, primary key             |
| `cuisine`         | string        | not null, indexed                 |

* index on `cuisine`, unique: true

### restaurant_cuisines
| column            | data type     | constraint                        |
| ---               | ---           | ---                               |
| `id`              | integer       | not null, primary key             |
|`restaurant_id`	| integer	    | not null, foreign key, indexed    |
| `cuisine_id`      | integer      | not null                          |

* joins table for `restaurants` and `cuisines`