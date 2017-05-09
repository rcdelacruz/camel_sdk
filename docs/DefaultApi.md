# CamelSdk.DefaultApi

All URIs are relative to *http://52.221.65.42/apps/intrl-unimart*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiDelete**](DefaultApi.md#apiDelete) | **DELETE** /api | Deletes an item
[**apiGet**](DefaultApi.md#apiGet) | **GET** /api | Get items
[**apiPost**](DefaultApi.md#apiPost) | **POST** /api | Add a new item
[**apiPut**](DefaultApi.md#apiPut) | **PUT** /api | Update an existing pet


<a name="apiDelete"></a>
# **apiDelete**
> SuccessResponse apiDelete(xUnimartApiUrl)

Deletes an item

### Example
```javascript
var CamelSdk = require('camel_sdk');

var apiInstance = new CamelSdk.DefaultApi();

var xUnimartApiUrl = "xUnimartApiUrl_example"; // String | Function name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiDelete(xUnimartApiUrl, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xUnimartApiUrl** | **String**| Function name | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiGet"></a>
# **apiGet**
> SuccessResponse apiGet(xUnimartApiUrl)

Get items

Multiple status values can be provided with comma separated strings

### Example
```javascript
var CamelSdk = require('camel_sdk');

var apiInstance = new CamelSdk.DefaultApi();

var xUnimartApiUrl = "xUnimartApiUrl_example"; // String | Function name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiGet(xUnimartApiUrl, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xUnimartApiUrl** | **String**| Function name | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiPost"></a>
# **apiPost**
> SuccessResponse apiPost(xUnimartApiUrl)

Add a new item

### Example
```javascript
var CamelSdk = require('camel_sdk');

var apiInstance = new CamelSdk.DefaultApi();

var xUnimartApiUrl = "xUnimartApiUrl_example"; // String | Function name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiPost(xUnimartApiUrl, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xUnimartApiUrl** | **String**| Function name | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiPut"></a>
# **apiPut**
> SuccessResponse apiPut(xUnimartApiUrl)

Update an existing pet

### Example
```javascript
var CamelSdk = require('camel_sdk');

var apiInstance = new CamelSdk.DefaultApi();

var xUnimartApiUrl = "xUnimartApiUrl_example"; // String | Function name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiPut(xUnimartApiUrl, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xUnimartApiUrl** | **String**| Function name | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

