##Getting Started for local server
1. Install node and npm

  https://nodejs.org/en/download/current/

2. Install git

  https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

3. Clone repository

  `git clone git@github.com:jouyang/flights.git`

4. Go into repository

  `cd flights`

5. Install requirements

  `npm install`

6. Launch server

  `npm run s`

7. Open in browser

  `http://127.0.0.1:8080/`

##Local Development

###To start babel build daemon for backend sources

`npm run watch`

##To start webpack build daemon for frontend sources
`npm run web_watch`

##Before committing, run lint, flow and tests to check for errors
`npm run check`
