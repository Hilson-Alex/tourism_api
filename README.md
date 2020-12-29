# Tourism Api

A Tourism place recommendation AI endpoints with Case-based reasoning intelligence to recommend places to visit based on Cost importance, season of the visit, number of people and children in te group and what kind of place do you wanna visit.
This project is the backend of the AI with the endpoints and connection with the bank.
For now, we just ignore the distance, but we want to, someday, use it in the calculation too.

## Getting Started

If you want to see this working you can send any request to https://tourism-reco-api.herokuapp.com/ to get all of our cases.
to get 

We use places from **Santa Catarina - Brazil** cause it's the place where we live.

### Prerequisites

To run this project locally you must have a mongo database with some cases on it and link it in a *.env* file in an environment variable named MONGO_URL.

### Installing

We highly recommend that, if you want to run  this project locally, look for [our project with frontend and backend instead](https://github.com/Hilson-Alex/tourism-ai).

With that in mind, if you want to run this, and only this project, all you have to do is:
```bash
git clone https://github.com/Hilson-Alex/tourism_api.git
cd ./tourism_api
npm install
npm run start
```
this will run the api in the port 8080.
> but if you don't have a mongo db configured in a .env file, it will fail if receive any request

## Authors
This code was implemented by:
* [@Hilson-Alex](https://github.com/Hilson-Alex)
* [@rick32132](https://github.com/rick32132)
* [@TheMarhsall007](https://github.com/TheMarhsall007)
* And Bruna Rebello, who doesn't have an account at the moment this was posted

## License
This project is under the MIT License, that you can see in [LICENSE](/LICENSE) file
