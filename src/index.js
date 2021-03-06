/**
 * camel-sdk
 * This is a Camel passthru API to Unimart App server.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: rdelacruz@stratpoint.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function (factory) {
  if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ErrorResponse'), require('./model/SuccessResponse'), require('./api/DefaultApi'));
  }
}(function (ApiClient, ErrorResponse, SuccessResponse, DefaultApi) {
  'use strict';

  /**
   * This_is_a_Camel_passthru_API_to_Unimart_App_server_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var CamelSdk = require('index'); // See note below*.
   * var xxxSvc = new CamelSdk.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new CamelSdk.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new CamelSdk.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new CamelSdk.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ErrorResponse model constructor.
     * @property {module:model/ErrorResponse}
     */
    ErrorResponse: ErrorResponse,
    /**
     * The SuccessResponse model constructor.
     * @property {module:model/SuccessResponse}
     */
    SuccessResponse: SuccessResponse,
    /**
     * The DefaultApi service constructor.
     * @property {module:api/DefaultApi}
     */
    DefaultApi: DefaultApi
  };

  return exports;
}));