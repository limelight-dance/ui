# Limelight Frontend
Limelight website

### Requirements
* Node.js
* Yarn

### Installing
Create and populate `.env` file
```
cp .env.template .env
```

Install packages (do **NOT** use `npm install`) and start
```
yarn

yarn start
```

### Deploying
```sh
# You only need to run the following once
heroku git:remote -a limelight-dance-ui

git push heroku master
```
