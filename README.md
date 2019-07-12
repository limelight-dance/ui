# Limelight Frontend
Limelight website

### Requirements
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
cp .env.template .env
```
### Running
```
npm start
```
### Deploying
```sh
# You only need to run the following once
heroku login
heroku git:remote -a limelight-dance-ui

git push heroku master
```
