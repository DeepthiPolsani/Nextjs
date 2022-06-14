# pages/api vs server/controllers

Contents:

* [Summary](#summary)
  * [Issue](#issue)
  * [Decision](#decision)
  * [Status](#status)
* [Details](#details)
  * [Assumptions](#assumptions)
  * [Positions](#positions)
  * [Argument](#argument)
  * [Implications](#implications)
* [Related](#related)
  * [Related decisions](#related-decisions)
  * [Related requirements](#related-requirements)
  * [Related artifacts](#related-artifacts)
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





### Positions



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


### Related artifacts




### Related principles

Easily reversable. If backend is already ready we will integrate routes inside the pages/api folder,it is simple project we directly implement inside pages/api and also help us iterate faster.


## Notes

Add any notes here.
