<a href="https://statging-love.herokuapp.com/">
    <img src="https://user-images.githubusercontent.com/23233648/48875001-a7c43380-ee39-11e8-9d55-bf8494bba4ed.png" alt="Logo" title="Kudos" align="right" height="60" />
</a>

# Kudos

This was created during my time as a student at Code Chrysalis!<br>
This project is powered by Rakuten Rapid API.<br>
You can make people around you happy with Kudos even if you are busy.

[![Kudos UI](https://user-images.githubusercontent.com/23233648/48875400-389c0e80-ee3c-11e8-9a8a-f55da8a6101c.png)](https://statging-love.herokuapp.com/)

## Table of content

- [Installation](#installation)
  - [TER](#typo3-extension-repository)
  - [Composer](#composer)
- [TYPO3 setup](#typo3-setup)
  - [Extension](#extension)
  - [Database](#database)
- [Page setup](#page-setup)
  - [Upload the page tree file](#upload-the-page-tree-file)
  - [Go to the import view](#go-to-the-import-view)
  - [Import the uploaded page tree file](#import-the-uploaded-page-tree-file)
- [License](#license)
- [Links](#links)

## Features

Kudos provides two features,

1. You can send Kudos(compliments) to other by making call
   - You can type kudos by yourself or select from recommendations.
   - When you hit "SEND COMPLIMENTS", it automatically make a call and artificial voice speaks compliments to others.
2. You can get reward after sending kudos
   - After hitting "SEND COMPLIMENTS", you can get flower gif

## Demo page

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

### Installation

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
- Backend<br>
  Express
- Database<br>
  Postgres
- UI<br>
  MATERIAL-UI
- APIs<br>Rakuten Rapid API for connecting Giphy and Twillio<br>Giphy for getting random gif<br>Twillio for making call and artificial voice

## Links

- [Web Site](https://statging-love.herokuapp.com/)
- [Rakuten Rapid API](https://english.api.rakuten.net/)
- [Giphy Developers](https://developers.giphy.com/)
- [Twillio Docs](https://jp.twilio.com/docs/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [MATERIAL-UI](https://material-ui.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Express](http://expressjs.com/)
