# Node & Express Demo App for Azure DevOps

This is a Node and Express web application used to demonstrate CI/CD with Azure DevOps. You can clone this repo and use it within Azure DevOps to build, test.

## Running and Testing Locally:

You can use these commands to install, test, and run the app locally. (Not Required)

### Install

```
npm install
```

### Test

```
npm test
```

```shell
$ npm run test
> node-express-azure@1.0.0 test /home/jenciso/projetos/github.com/node-express-azure
> mocha --exit

Demo app is running on 8080!


  /GET
    ✓ returns the contact page

  /GET
    ✓ returns the homepage

  /GET
    ✓ returns the who page


  3 passing (43ms)
```

Navigate to the `/test` folder to review the unit tests for this project. These tests will run as part of your Azure DevOps Build pipeline. See `azure-pipelines.yml` in this repo.

### Start

```
npm start
```

### CI / Azure Pipelines

Basic steps:

```yaml
steps:
- task: NodeTool@0
  inputs:
    versionSpec: '12.x'
  displayName: 'Install Node.js'

- script: |
    npm install
  displayName: 'npm install'

- script: |
    npm test
  displayName: 'npm test'

```

DockerFile:

```dockerfile
FROM node:12
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "app.js" ]
```

### Author

Juan Enciso
[@jenciso](https://twitter.com/jenciso)

