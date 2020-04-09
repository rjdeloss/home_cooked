# Frontend Routes

Components are organized as follow: 

Root
    App
    * Navbar
    * Main component
    * Footer

The following routes, defined in App, will render in the main component

* `/` 
    * LandingPage
    * `/classes` 
        * classesIndex
            * ClassIndexItem
        * ReservationSearch
    * `/login`
        * SessionForm
    * `/signup`
        * SessionForm

* `/classes/`
    * CondensedReservationSearch
    * classesIndex
        * ClassIndexItem
        * ClassBookingSelection

* `/classes/:classId`
    * Class Profile
    * ClassReviewIndex
        * ClassReviewIndexItem
        * AddReviewForm
    * ClassMap
    * SmallReservationForm

* `/my/profile`
    * User's profile landing page
        * `/my/profile/reviews` (index of current user's reviews with edit/delete buttons)
    * index of current user's reviews with edit and delete buttons
        * `/my/profile/reservations` 
    * index of current user's reservations with delete button)