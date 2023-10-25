Vega website Automated tests

```shell
npm install
```

to run the tests 
```shell
npm run cy:run
```

to open cypress in interactive mode: 
```shell
npm run cy:open
```

# Running locally
To run the tests against a local server, you can set the environment variable `CYPRESS_BASE_URL`:

```shell
CYPRESS_BASE_URL=http://localhost:8000 npm run cy:run
```