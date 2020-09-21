Run Docker

```
yarn install
yarn build:prod
docker build -t amortisation-frontend .
docker run -d -p 80:80 amortisation-frontend
```

Run Local

```
yarn install
yarn start
```

Run Tests

```
yarn install
yarn test
```
