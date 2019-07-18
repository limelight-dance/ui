# Limelight Frontend
Website for Limelight Dance Crew.

### Requirements
* Node.js
* Yarn

### Installing
Create and populate `.env` file
```
cp .env.template .env
```

Install packages and start
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
