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

Install packages (do **not** use `npm install`) and start
```
yarn

yarn run dev
```

### Deploying
```sh
# You only need to run the following once
heroku git:remote -a limelight-dance-ui

git push heroku master
```
