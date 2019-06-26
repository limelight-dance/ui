# Limelight Frontend
Powered by React, Sass and Webpack

### Requirements
- git
- heroku
- yarn
- node.js

### Installing
Clone this repo
```
git clone https://github.com/limelight-dance/ui.git

cd ui
```
Install packages (do **NOT** use `npm install`)
```
yarn
```
Create .env and populate mandatory fields
```
cp .env.example .env
```
### Running
```
npm start
```
### Deploying
```sh
heroku login
heroku git:remote -a limelight-dance-ui
# You only need to run the above once

git push heroku master
```
