# camel_sdk

SwaggerCamelPassthru - JavaScript client for camel_sdk
This is a Camel passthru API to Unimart App server. 
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install camel_sdk --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SwaggerCamelPassthru = require('camel_sdk');

var api = new SwaggerCamelPassthru.DefaultApi()

var xUnimartApiUrl = "xUnimartApiUrl_example"; // {String} Function name

var opts = { 
  'body': "body_example" // {String} 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.apiDelete(xUnimartApiUrl, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://52.221.65.42/apps/intrl-unimart*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SwaggerCamelPassthru.DefaultApi* | [**apiDelete**](docs/DefaultApi.md#apiDelete) | **DELETE** /api | Deletes a pet
*SwaggerCamelPassthru.DefaultApi* | [**apiGet**](docs/DefaultApi.md#apiGet) | **GET** /api | Get items
*SwaggerCamelPassthru.DefaultApi* | [**apiPost**](docs/DefaultApi.md#apiPost) | **POST** /api | Add a new item
*SwaggerCamelPassthru.DefaultApi* | [**apiPut**](docs/DefaultApi.md#apiPut) | **PUT** /api | Update an existing pet


## Documentation for Models

 - [SwaggerCamelPassthru.ErrorResponse](docs/ErrorResponse.md)
 - [SwaggerCamelPassthru.SuccessResponse](docs/SuccessResponse.md)


## Documentation for Authorization

 All endpoints do not require authorization.

