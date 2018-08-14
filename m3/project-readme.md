# Project Name

## Description

Describe your project in one/two lines.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start saving favorite restaurants
-  **Login:** As a user I can login to the platform so that I can see my favorite restaurants
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Add Restaurants** As a user I can add a restaurant so that I can share it with the community
-  **List Restaurants** As a user I want to see the restaurants so that I can choose one to eat
-  **Search Restaurants** As a user I want to search restaurants by name so that I know if it´s already in the platform
-  **Add to favorites** As a user I want to add a restaurant to favorite so that I can save the restaurants that I liked the most
-  **See my favorites** As a user I want to see my favorite restaurantes so that I can see the ones I liked the most

## Backlog

User profile:
- see other users profile sand their favorites

Geo Location:
- see restaurants in a map
  
# Client

## Routes

- / - Homepage
- /auth/signup - Signup form
- /auth/login - Login form
- /restaurants - restaurant list
- /restaurants/create - create a restaurant
- /restaurants/:id - restaurant detail
- /profile/me - my details and favorite restaurants
- 404

## Pages

- Home Page (public)
- Sign in Page (anon only)
- Log in Page (anon only)
- Restaurants List Page (public only)
- Restaurant Create (user only)
- Restaurant Detail Page (public only)
- My Profile Page (user only)
- 404 Page (public)

## Components

- Restaurant Card component
  - Input: restaurant: any
  - Output: favorite(restaurantId: string, on: boolean)
- Search component
  - Output: change(terms: string)

## IO


## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Restaurant Service
  - restaurant.list()
  - restaurant.create(data)
  - restaurant.detail(id)
  - restaurant.addFavorite(id)
  - restaurant.removeFavorite(id)   

# Server

## Models

User model

```
username - String // required
email - String // required & unique
password - String // required
favorites - [ObjectID<Restaurant>]
```

Restaurant model

```
owner - ObjectID<User> // required
name - String // required
phone - String
address - String
```

## API Endpoints/Backend Routes

- GET /auth/me
- POST /auth/signup
  - body:
    - username
    - email
    - password
- POST /auth/login
  - body:
    - username
    - password
- POST /auth/logout
  - body: (empty)
- POST /user/me/favorite
  - body:
    - restaurantId
- DELETE /user/me/favorite/:restaurantId
  - body: (empty)
- GET /restaurant
- POST /restaurant
  - body:
    - name
    - phone
    - address
- GET /restaurant/:id

  

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](http://github.com)
[Server repository Link](http://github.com)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)
