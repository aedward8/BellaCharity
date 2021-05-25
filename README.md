# Bella Charity Website


![alt text](https://github.com/aedward8/BellaCharity/blob/main/docs/images/BellaCharityLogo.png "Bella Charity Logo")

## About

Bella Charity is a non-profit animal sanctuary and shelter! This website is the main online presence for the organization. It acts as a portal for people to learn more about the organization, adopt animals, foster animals, volunteer, and also donate! The main goal is to connect animals with forever homes & families while creating a safe environment for them throughout the process.

[Check out the website!][live]

[![Deploy to Heroku][deploy-badge]][deploy-workflow]


## MVP Minimum Viable Product

### Tier 1
* Have a homepage with a navigation menu & links to adoption page
* Adoption & Foster page that display all available animals in a table pulled from psql
* Adoption & foster animal form results stored in Google sheets (API)

### Tier 2
* Transactional Email API (i.e Postmark or mail gun), send form results to coordinator's email
* Volunteer Page with sign up form
* About Us & Contact Us form
* Mobile App page

## Additional (Nice to haves)
* Donation Page w/payment integration
* Stripe API, Paypal, or Donor Box

## Technical Risks
The main goal is to use a Google API so that the form results are in Google Sheets. This would be great so that the nonprofit employees can have an easy way to access form data. However, if this is too difficult I will revert to storing the data in the psql database.

An additional goal is to use a transactional email API such as Postman or Mail Gun to send form results or alerts to either the adoption coordinator or volunteer coordinator. Alternatively, this is a nice to have step as data would also be stored in Google Sheets or psql database.

Below is the user work flow with the MVP highlighted in red and a webpage mock up for the home page and adoption page.
![alt text](https://github.com/aedward8/BellaCharity/blob/main/docs/images/UserFlow-Bella.png?raw=true "User Work Flow w/MVP")
![alt text](https://github.com/aedward8/BellaCharity/blob/main/docs/images/BellaHomePage.png "Homepage Mockup")
![alt text](https://github.com/aedward8/BellaCharity/blob/main/docs/images/Bella_Adopt%20_age.png?raw=true "Adopt page Mockup")


## Technology

The Bella Charity website will be built with the PERN stack, which includes Postgres, Express, React & Node.js.

This project uses [George Song's][george] github repo as baseplate template.It is a monorepo github project that will deploy to Heroku. Automatic deployment will also be available with every github merge to the main branch! Heroku deployment will include the use of Dockers & a Heroku account.

## Installation & Technology Requirements

### Docker

This project relies on Docker to run the PostgreSQL server. You must install Docker first before continuing.

Use one of these methods:

- Use [Homebrew][] on macOS: `brew install docker`
- [Follow the instructions on the Docker website][docker-www]

### Node

You'll need to install Node v14 or above. [`nvm`][nvm] is highly recommended.

## Set Up the Development Environment

### Install NPM Packages

```sh
npm install
```

### Set Up `postgres` User Password and Database Name

We need to set up couple pieces of information in order to start a new
PostgreSQL server instance, as well as to connect to it later from the Express
server.

1. Copy the example environment file

   ```sh
   cp .env.example .env
   ```

2. You can choose to edit `.env` or just use as-is.

[See the PostgreSQL Docker image documentation for more
information][dh-postgres].

### Initialize the Database

Let's set up the database server, create the application database, and seed it
with some data. You only need to do this the first time you set up your
development environment.

```sh
npm run db:init
```

ℹ️ If you ever need to start over with the database, you can run this command
again which will delete your existing data and start from scratch.

## Start the Development Environment

```sh
npm start
```

Visit <http://localhost:3000>.

## Shut Down the Development Environment

1. `Ctrl-C` to stop the Express and React development servers.
1. `npm run db:stop` to stop and destroy the PostgreSQL Docker container. Don't
   worry, your data is safe.

## Need to Start a `psql` Session?

```sh
npm run psql
```
## Deployment

[Read about setting up and deploying to Heroku](docs/deployment.md).

[deploy-badge]: https://github.com/aedward8/BellaCharity/actions/workflows/deploy.yaml/badge.svg
[deploy-workflow]: https://github.com/aedward8/BellaCharity/actions/workflows/deploy.yaml
[dh-postgres]: https://hub.docker.com/_/postgres
[docker-www]: https://docs.docker.com/get-docker/
[george]: https://github.com/gsong/express-react-project-example
[homebrew]: https://brew.sh
[live]: https://bella-charity.herokuapp.com/
[nvm]: https://github.com/nvm-sh/nvm
[reset-badge]: https://github.com/gsong/express-react-project-example/actions/workflows/reset-db.yml/badge.svg
[reset-workflow]: https://github.com/gsong/express-react-project-example/actions/workflows/reset-db.yml
