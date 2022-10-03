### Description

Simple REST API for fetching SpaceX rockets.

Used stack: 
- Express
- Express decorators
- Dependency Injection (testable code)
- Simplified Clean Architecture Approach
- Requesting GraphQL API
- Latest NodeJS

###Links

[SpaceX public GraphQL API](https://api.spacex.land/graphql/ "SpaceX public GraphQL API")

###How to run

`npm ci`

`npm run start`

                    
###Endpoints
                    
Method  | Path | Description
------------- | -------------
GET  | /api/v1/rockets | Gets all rockets
GET | /api/v1/rockets/:id | Gets rocket entity by id
DELETE | /api/v1/rockets/:id | Destroys rocket 
