# Folder structure for Backend

Contents:

* [Summary](#summary)
  * [Issue](#issue)
  * [Decision](#decision)
  * [Status](#status)
* [Details](#details)
  * [Assumptions](#assumptions)
  * [Argument](#argument)
  * [Implications](#implications)
* [Related](#related)
  * [Related decisions](#related-decisions)
  * [Related requirements](#related-requirements)
  * [Related principles](#related-principles)
* [Notes](#notes)


## Summary


### Issue

Our project involves developing two major categories of software:

  * Front-end 
  * Back-end (server)

We are using Nextjs framework for our boilerplate

We need to choose where to implement backend logic

The top-level choice is to organize as inside "pages/api" or "server/controllers" :

  * Both are the standard implementation/standard folder structure
  * Both implementation resembles NextJs as Full-stack
 

### Decision

pages/api is the higher priority for implementing routes along with logic for smaller applications in backend.

server/controllers is the higher priority for implementing logic for larger and complex applications in backend.



### Status

Decided on server/controllers. Open to new choices as they arrived.


## Details


### Assumptions

We want to create a boilerplate that are modern, fast, reliable, responsive, etc.
 
For that we are using Nextjs framework for boilerplate for quick respones.
Typical modern web apps are reducing/eliminating the use of jQuery because of multiple reasons: 

  * In order implement Nextjs as a full-stack feature,we used database(mongodb) for storing the data in backend.

  * For implementing logic for backend,inside pages/api is the directly approach for smaller projects.

  * We can implement the same logic inside server/controllers & provide the routes inside pages/api,for larger projects we can directly removing the complexcity of code by implementing logic here.


### Argument

When an organization/team/project is relatively small, we choose pages/api, because rapid iteration is significantly higher in priority than sustaining stability

When an organization/team/project is relatively large, we choose server/controllers, because sustaining stability is significantly higher in priority than rapid iteration.


### Implications

NextJs directly  provide routes insides the pages folder,If we are going to implement logic inside pages/api there is no need of providing routes for it.

If we are going to implement logic outside the pages i.e.,server/controllers ,we need to again call the controllers inside the pages/api folder.

If someone projects already have a separate backend ready,they can directly provide the routes inside pages/api 
without adding the logic here again.


## Related


### Related decisions

The server/controllers we choose has to provide the routes again in pages/api folder


### Related requirements

We need to properly integrate controllers with pages/api 

### Related principles

Easily reversable. If backend is already ready we will integrate routes inside the pages/api folder,it is simple project we directly implement inside pages/api and also help us iterate faster.


## Notes

Add any notes here.
