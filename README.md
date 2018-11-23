<a href="https://kudos-love.herokuapp.com/">
    <img src="https://user-images.githubusercontent.com/23233648/48875001-a7c43380-ee39-11e8-9d55-bf8494bba4ed.png" alt="Logo" title="Kudos" align="right" height="60" />
</a>

# Kudos

This was created during my time as a student at Code Chrysalis!<br>
This project is powered by Rakuten Rapid API.<br>
You can make people around you happy with Kudos even if you are busy.

[![Kudos UI](https://user-images.githubusercontent.com/23233648/48925664-a6fad280-ef09-11e8-8b6a-9ce8e6777faa.png)](https://kudos-love.herokuapp.com/)

## Table of content

- [Features](#Features)
- [Demo Page](#Demo-Page)
- [Setup](#Setup)
  - [Get some API keys](#Get-some-API-keys)
  - [Installation](#Installation)
- [How it works](#How-it-works)
- [Links](#links)

## Features

Kudos (compliments) provides three features,

1. Create kudos by myself or choose from recommendations.
2. You can make a automated call with a kudo
   - When you select a kudo and type phone number, hit "SEND COMPLIMENTS".
   - It makes automatic call with a beautiful artificial voice.
   - If you want, you can set a schedule.
3. You can get a reward after sending kudos
   - After hitting "SEND COMPLIMENTS", you can get flower gif.

## Demo Page

[Demo Page](https://kudos-love.herokuapp.com/) is here ! You can make a call !

## Setup

If you want to install Kudos on your PC, follow this instruction.

### Get some API keys

Because this app is powered by Rakuten Rapid API, please get some API keys first.
![Rakuten Rapid API LOGG](https://user-images.githubusercontent.com/23233648/48876649-80be2f80-ee42-11e8-989e-ae7165cbf63d.png)

1. Go to [Rakuten Rapid API](https://english.api.rakuten.net/)
2. Please sign-up and login.
3. Go to [Dashboard](https://dashboard.rapidapi.com/login)
4. Make a new app.
5. Get your project name and API key.
6. Go to [GiphyDevelopers](https://developers.giphy.com/)
7. Please sing-up and login.
8. Get your giphy API key.

### Prepare PostgresSQL

Because this app is using Postgres, please prepare it.

1. Please install if you don't have it.
2. Please make a database called kudos_app.

### App Installation

1. Clone this repo

```
git clone https://github.com/egurinko/Kudos.git
```

2. Install all dependencies

```
cd Kudos
yarn
```

3. Making .env file

```
REACT_APP_RAKUTEN_API_KEY=<Rakuten Rapid API project name>
REACT_APP_RAKUTEN_AUTH_KEY=<Rakuten Rapid API API key>
REACT_APP_GIPHY_API_KEY=<Giphy API key>
```

4. Start local server

```
yarn start
```

5. Go to browser and type "localhost:4000"

## How it works

- Frontend<br>
  React and Redux
- UI<br>
  MATERIAL-UI
- Backend<br>
  Express, knex
- Database<br>
  Postgres
- APIs<br>Rakuten Rapid API for connecting Giphy and Twillio<br>Giphy for getting random gif<br>Twillio for making call and artificial voice

## Links

- [Web Site](https://kudos-love.herokuapp.com/)
- [Rakuten Rapid API](https://english.api.rakuten.net/)
- [Giphy Developers](https://developers.giphy.com/)
- [Twillio Docs](https://jp.twilio.com/docs/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [MATERIAL-UI](https://material-ui.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Express](http://expressjs.com/)

### Created by Team Love
##### Follow us on Github:
- [chcliu](https://github.com/chcliu)
- [SoraMaruyama](https://github.com/SoraMaruyama)
- [egurinko](https://github.com/egurinko)

