(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.IntegrationsApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Integrations service.
   * @module purecloud-platform-client-v2/api/IntegrationsApi
   * @version 25.0.0
   */

  /**
   * Constructs a new IntegrationsApi. 
   * @alias module:purecloud-platform-client-v2/api/IntegrationsApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete integration.
     * 
     * @param {String} integrationId Integration Id
     */
    this.deleteIntegration = function(integrationId) { 

      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw "Missing the required parameter 'integrationId' when calling deleteIntegration";
      }


      return this.apiClient.callApi(
        '/api/v2/integrations/{integrationId}', 
        'DELETE', 
        { 'integrationId': integrationId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete an Action
     * 
     * @param {String} actionId actionId
     */
    this.deleteIntegrationsAction = function(actionId) { 

      // verify the required parameter 'actionId' is set
      if (actionId === undefined || actionId === null) {
        throw "Missing the required parameter 'actionId' when calling deleteIntegrationsAction";
      }


      return this.apiClient.callApi(
        '/api/v2/integrations/actions/{actionId}', 
        'DELETE', 
        { 'actionId': actionId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a Draft
     * 
     * @param {String} actionId actionId
     */
    this.deleteIntegrationsActionDraft = function(actionId) { 

      // verify the required parameter 'actionId' is set
      if (actionId === undefined || actionId === null) {
        throw "Missing the required parameter 'actionId' when calling deleteIntegrationsActionDraft";
      }


      return this.apiClient.callApi(
        '/api/v2/integrations/actions/{actionId}/draft', 
        'DELETE', 
        { 'actionId': actionId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a set of credentials
     * 
     * @param {String} credentialId Credential ID
     */
    this.deleteIntegrationsCredential = function(credentialId) { 

      // verify the required parameter 'credentialId' is set
      if (credentialId === undefined || credentialId === null) {
        throw "Missing the required parameter 'credentialId' when calling deleteIntegrationsCredential";
      }


      return this.apiClient.callApi(
        '/api/v2/integrations/credentials/{credentialId}', 
        'DELETE', 
        { 'credentialId': credentialId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get integration.
     * 
     * @param {String} integrationId Integration Id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {Array.<Object>} opts.expand variable name requested by expand list
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     */
    this.getIntegration = function(integrationId, opts) { 
      opts = opts || {};

      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw "Missing the required parameter 'integrationId' when calling getIntegration";
      }


      return this.apiClient.callApi(
        '/api/v2/integrations/{integrationId}', 
        'GET', 
        { 'integrationId': integrationId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get integration configuration.
     * 
     * @param {String} integrationId Integration Id
     */
    this.getIntegrationConfigCurrent = function(integrationId) { 

      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw "Missing the required parameter 'integrationId' when calling getIntegrationConfigCurrent";
      }


      return this.apiClient.callApi(
        '/api/v2/integrations/{integrationId}/config/current', 
        'GET', 
        { 'integrationId': integrationId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * List integrations
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {Array.<Object>} opts.expand variable name requested by expand list
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     */
    this.getIntegrations = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/integrations', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Retrieves a single Action matching id.
     * 
     * @param {String} actionId actionId
     * @param {Object} opts Optional parameters
     * @param {Object} opts.expand Indicates fields of the response which should be expanded.
     * @param {Boolean} opts.includeConfig Show config when available (default to false)
     */
    this.getIntegrationsAction = function(actionId, opts) { 
      opts = opts || {};

      // verify the required parameter 'actionId' is set
      if (actionId === undefined || actionId === null) {
        throw "Missing the required parameter 'actionId' when calling getIntegrationsAction";
      }


      return this.apiClient.callApi(
        '/api/v2/integrations/actions/{actionId}', 
        'GET', 
        { 'actionId': actionId }, 
        { 'expand': opts['expand'],'includeConfig': opts['includeConfig'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Retrieve a Draft
     * 
     * @param {String} actionId actionId
     * @param {Object} opts Optional parameters
     * @param {Object} opts.expand Indicates fields of the response which should be expanded.
     * @param {Boolean} opts.includeConfig Show config when available (default to false)
     */
    this.getIntegrationsActionDraft = function(actionId, opts) { 
      opts = opts || {};

      // verify the required parameter 'actionId' is set
      if (actionId === undefined || actionId === null) {
        throw "Missing the required parameter 'actionId' when calling getIntegrationsActionDraft";
      }


      return this.apiClient.callApi(
        '/api/v2/integrations/actions/{actionId}/draft', 
        'GET', 
        { 'actionId': actionId }, 
        { 'expand': opts['expand'],'includeConfig': opts['includeConfig'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Retrieve schema for a Draft based on filename.
     * 
     * @param {String} actionId actionId
     * @param {String} fileName Name of schema file to be retrieved for this draft.
     */
    this.getIntegrationsActionDraftSchema = function(actionId, fileName) { 

      // verify the required parameter 'actionId' is set
      if (actionId === undefined || actionId === null) {
        throw "Missing the required parameter 'actionId' when calling getIntegrationsActionDraftSchema";
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw "Missing the required parameter 'fileName' when calling getIntegrationsActionDraftSchema";
      }


      return this.apiClient.callApi(
        '/api/v2/integrations/actions/{actionId}/draft/schemas/{fileName}', 
        'GET', 
        { 'actionId': actionId,'fileName': fileName }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Retrieve templates for a Draft based on filename.
     * 
     * @param {String} actionId actionId
     * @param {String} fileName Name of template file to be retrieved for this action draft.
     */
    this.getIntegrationsActionDraftTemplate = function(actionId, fileName) { 

      // verify the required parameter 'actionId' is set
      if (actionId === undefined || actionId === null) {
        throw "Missing the required parameter 'actionId' when calling getIntegrationsActionDraftTemplate";
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw "Missing the required parameter 'fileName' when calling getIntegrationsActionDraftTemplate";
      }


      return this.apiClient.callApi(
        '/api/v2/integrations/actions/{actionId}/draft/templates/{fileName}', 
        'GET', 
        { 'actionId': actionId,'fileName': fileName }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['text/plain']
      );
    };


    /**
     * Validate current Draft configuration.
     * 
     * @param {String} actionId actionId
     */
    this.getIntegrationsActionDraftValidation = function(actionId) { 

      // verify the required parameter 'actionId' is set
      if (actionId === undefined || actionId === null) {
        throw "Missing the required parameter 'actionId' when calling getIntegrationsActionDraftValidation";
      }


      return this.apiClient.callApi(
        '/api/v2/integrations/actions/{actionId}/draft/validation', 
        'GET', 
        { 'actionId': actionId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Retrieve schema for an action based on filename.
     * 
     * @param {String} actionId actionId
     * @param {String} fileName Name of schema file to be retrieved for this action.
     */
    this.getIntegrationsActionSchema = function(actionId, fileName) { 

      // verify the required parameter 'actionId' is set
      if (actionId === undefined || actionId === null) {
        throw "Missing the required parameter 'actionId' when calling getIntegrationsActionSchema";
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw "Missing the required parameter 'fileName' when calling getIntegrationsActionSchema";
      }


      return this.apiClient.callApi(
        '/api/v2/integrations/actions/{actionId}/schemas/{fileName}', 
        'GET', 
        { 'actionId': actionId,'fileName': fileName }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Retrieve text of templates for an action based on filename.
     * 
     * @param {String} actionId actionId
     * @param {String} fileName Name of template file to be retrieved for this action.
     */
    this.getIntegrationsActionTemplate = function(actionId, fileName) { 

      // verify the required parameter 'actionId' is set
      if (actionId === undefined || actionId === null) {
        throw "Missing the required parameter 'actionId' when calling getIntegrationsActionTemplate";
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw "Missing the required parameter 'fileName' when calling getIntegrationsActionTemplate";
      }


      return this.apiClient.callApi(
        '/api/v2/integrations/actions/{actionId}/templates/{fileName}', 
        'GET', 
        { 'actionId': actionId,'fileName': fileName }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['text/plain']
      );
    };


    /**
     * Retrieves all actions associated with filters passed in via query param.
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.category Filter by category name
     * @param {Object} opts.secure Filter to only include secure actions. True will only include actions marked secured. False will include only unsecure actions. Do not use filter if you want all Actions.
     * @param {Object} opts.includeAuthActions Whether or not to include authentication actions in the response. These actions are not directly executable. Some integrations create them and will run them as needed to refresh authentication information for other actions.
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {Array.<Object>} opts.expand variable name requested by expand list
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     */
    this.getIntegrationsActions = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/integrations/actions', 
        'GET', 
        {  }, 
        { 'category': opts['category'],'secure': opts['secure'],'includeAuthActions': opts['includeAuthActions'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Retrieves all categories of available Actions
     * 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.secure Filter to only include/exclude Action categories based on if they are considered secure. True will only include categories with Actions marked secured. False will only include categories of unsecured Actions.
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {Array.<Object>} opts.expand variable name requested by expand list
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     */
    this.getIntegrationsActionsCategories = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/integrations/actions/categories', 
        'GET', 
        {  }, 
        { 'secure': opts['secure'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Retrieves all action drafts associated with the filters passed in via query param.
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.category Filter by category name
     * @param {Object} opts.secure Filter to only include secure actions. True will only include actions marked secured. False will include only unsecure actions. Do not use filter if you want all Actions.
     * @param {Object} opts.includeAuthActions Whether or not to include authentication actions in the response. These actions are not directly executable. Some integrations create them and will run them as needed to refresh authentication information for other actions.
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {Array.<Object>} opts.expand variable name requested by expand list
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     */
    this.getIntegrationsActionsDrafts = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/integrations/actions/drafts', 
        'GET', 
        {  }, 
        { 'category': opts['category'],'secure': opts['secure'],'includeAuthActions': opts['includeAuthActions'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * List permitted client app integrations for the logged in user
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {Array.<Object>} opts.expand variable name requested by expand list
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     */
    this.getIntegrationsClientapps = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/integrations/clientapps', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a single credential with sensitive fields redacted
     * 
     * @param {String} credentialId Credential ID
     */
    this.getIntegrationsCredential = function(credentialId) { 

      // verify the required parameter 'credentialId' is set
      if (credentialId === undefined || credentialId === null) {
        throw "Missing the required parameter 'credentialId' when calling getIntegrationsCredential";
      }


      return this.apiClient.callApi(
        '/api/v2/integrations/credentials/{credentialId}', 
        'GET', 
        { 'credentialId': credentialId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * List multiple sets of credentials
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     */
    this.getIntegrationsCredentials = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/integrations/credentials', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * List all credential types
     * 
     */
    this.getIntegrationsCredentialsTypes = function() { 


      return this.apiClient.callApi(
        '/api/v2/integrations/credentials/types', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * List all events
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortBy Sort by (default to timestamp)
     * @param {String} opts.sortOrder Order by (default to descending)
     * @param {String} opts.entityId Include only events with this entity ID
     */
    this.getIntegrationsEventlog = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/integrations/eventlog', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'entityId': opts['entityId'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a single event
     * 
     * @param {String} eventId Event Id
     */
    this.getIntegrationsEventlogEventId = function(eventId) { 

      // verify the required parameter 'eventId' is set
      if (eventId === undefined || eventId === null) {
        throw "Missing the required parameter 'eventId' when calling getIntegrationsEventlogEventId";
      }


      return this.apiClient.callApi(
        '/api/v2/integrations/eventlog/{eventId}', 
        'GET', 
        { 'eventId': eventId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get integration type.
     * 
     * @param {String} typeId Integration Type Id
     */
    this.getIntegrationsType = function(typeId) { 

      // verify the required parameter 'typeId' is set
      if (typeId === undefined || typeId === null) {
        throw "Missing the required parameter 'typeId' when calling getIntegrationsType";
      }


      return this.apiClient.callApi(
        '/api/v2/integrations/types/{typeId}', 
        'GET', 
        { 'typeId': typeId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get properties config schema for an integration type.
     * 
     * @param {String} typeId Integration Type Id
     * @param {Object} configType Config schema type
     */
    this.getIntegrationsTypeConfigschema = function(typeId, configType) { 

      // verify the required parameter 'typeId' is set
      if (typeId === undefined || typeId === null) {
        throw "Missing the required parameter 'typeId' when calling getIntegrationsTypeConfigschema";
      }

      // verify the required parameter 'configType' is set
      if (configType === undefined || configType === null) {
        throw "Missing the required parameter 'configType' when calling getIntegrationsTypeConfigschema";
      }


      return this.apiClient.callApi(
        '/api/v2/integrations/types/{typeId}/configschemas/{configType}', 
        'GET', 
        { 'typeId': typeId,'configType': configType }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * List integration types
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {Array.<Object>} opts.expand variable name requested by expand list
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     */
    this.getIntegrationsTypes = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/integrations/types', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update an integration.
     * 
     * @param {String} integrationId Integration Id
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body Integration Update
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {Array.<Object>} opts.expand variable name requested by expand list
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     */
    this.patchIntegration = function(integrationId, opts) { 
      opts = opts || {};

      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw "Missing the required parameter 'integrationId' when calling patchIntegration";
      }


      return this.apiClient.callApi(
        '/api/v2/integrations/{integrationId}', 
        'PATCH', 
        { 'integrationId': integrationId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'] }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Patch an Action
     * 
     * @param {String} actionId actionId
     * @param {Object} body Input used to patch the Action.
     */
    this.patchIntegrationsAction = function(actionId, body) { 

      // verify the required parameter 'actionId' is set
      if (actionId === undefined || actionId === null) {
        throw "Missing the required parameter 'actionId' when calling patchIntegrationsAction";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchIntegrationsAction";
      }


      return this.apiClient.callApi(
        '/api/v2/integrations/actions/{actionId}', 
        'PATCH', 
        { 'actionId': actionId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update an existing Draft
     * 
     * @param {String} actionId actionId
     * @param {Object} body Input used to patch the Action Draft.
     */
    this.patchIntegrationsActionDraft = function(actionId, body) { 

      // verify the required parameter 'actionId' is set
      if (actionId === undefined || actionId === null) {
        throw "Missing the required parameter 'actionId' when calling patchIntegrationsActionDraft";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchIntegrationsActionDraft";
      }


      return this.apiClient.callApi(
        '/api/v2/integrations/actions/{actionId}/draft', 
        'PATCH', 
        { 'actionId': actionId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create an integration.
     * 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body Integration
     */
    this.postIntegrations = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/integrations', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a new Draft from existing Action
     * 
     * @param {String} actionId actionId
     */
    this.postIntegrationsActionDraft = function(actionId) { 

      // verify the required parameter 'actionId' is set
      if (actionId === undefined || actionId === null) {
        throw "Missing the required parameter 'actionId' when calling postIntegrationsActionDraft";
      }


      return this.apiClient.callApi(
        '/api/v2/integrations/actions/{actionId}/draft', 
        'POST', 
        { 'actionId': actionId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Publish a Draft and make it the active Action configuration
     * 
     * @param {String} actionId actionId
     * @param {Object} body Input used to patch the Action.
     */
    this.postIntegrationsActionDraftPublish = function(actionId, body) { 

      // verify the required parameter 'actionId' is set
      if (actionId === undefined || actionId === null) {
        throw "Missing the required parameter 'actionId' when calling postIntegrationsActionDraftPublish";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postIntegrationsActionDraftPublish";
      }


      return this.apiClient.callApi(
        '/api/v2/integrations/actions/{actionId}/draft/publish', 
        'POST', 
        { 'actionId': actionId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Test the execution of a draft. Responses will show execution steps broken out with intermediate results to help in debugging.
     * 
     * @param {String} actionId actionId
     * @param {Object} body Map of parameters used for variable substitution.
     */
    this.postIntegrationsActionDraftTest = function(actionId, body) { 

      // verify the required parameter 'actionId' is set
      if (actionId === undefined || actionId === null) {
        throw "Missing the required parameter 'actionId' when calling postIntegrationsActionDraftTest";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postIntegrationsActionDraftTest";
      }


      return this.apiClient.callApi(
        '/api/v2/integrations/actions/{actionId}/draft/test', 
        'POST', 
        { 'actionId': actionId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Execute Action and return response from 3rd party.  Responses will follow the schemas defined on the Action for success and error.
     * 
     * @param {String} actionId actionId
     * @param {Object} body Map of parameters used for variable substitution.
     */
    this.postIntegrationsActionExecute = function(actionId, body) { 

      // verify the required parameter 'actionId' is set
      if (actionId === undefined || actionId === null) {
        throw "Missing the required parameter 'actionId' when calling postIntegrationsActionExecute";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postIntegrationsActionExecute";
      }


      return this.apiClient.callApi(
        '/api/v2/integrations/actions/{actionId}/execute', 
        'POST', 
        { 'actionId': actionId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Test the execution of an action. Responses will show execution steps broken out with intermediate results to help in debugging.
     * 
     * @param {String} actionId actionId
     * @param {Object} body Map of parameters used for variable substitution.
     */
    this.postIntegrationsActionTest = function(actionId, body) { 

      // verify the required parameter 'actionId' is set
      if (actionId === undefined || actionId === null) {
        throw "Missing the required parameter 'actionId' when calling postIntegrationsActionTest";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postIntegrationsActionTest";
      }


      return this.apiClient.callApi(
        '/api/v2/integrations/actions/{actionId}/test', 
        'POST', 
        { 'actionId': actionId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a new Action
     * 
     * @param {Object} body Input used to create Action.
     */
    this.postIntegrationsActions = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postIntegrationsActions";
      }


      return this.apiClient.callApi(
        '/api/v2/integrations/actions', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a new Draft
     * 
     * @param {Object} body Input used to create Action Draft.
     */
    this.postIntegrationsActionsDrafts = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postIntegrationsActionsDrafts";
      }


      return this.apiClient.callApi(
        '/api/v2/integrations/actions/drafts', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a set of credentials
     * 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body Credential
     */
    this.postIntegrationsCredentials = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/integrations/credentials', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Add a vendor connection
     * 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     */
    this.postIntegrationsWorkforcemanagementVendorconnection = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/integrations/workforcemanagement/vendorconnection', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update integration configuration.
     * 
     * @param {String} integrationId Integration Id
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body Integration Configuration
     */
    this.putIntegrationConfigCurrent = function(integrationId, opts) { 
      opts = opts || {};

      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw "Missing the required parameter 'integrationId' when calling putIntegrationConfigCurrent";
      }


      return this.apiClient.callApi(
        '/api/v2/integrations/{integrationId}/config/current', 
        'PUT', 
        { 'integrationId': integrationId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a set of credentials
     * 
     * @param {String} credentialId Credential ID
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body Credential
     */
    this.putIntegrationsCredential = function(credentialId, opts) { 
      opts = opts || {};

      // verify the required parameter 'credentialId' is set
      if (credentialId === undefined || credentialId === null) {
        throw "Missing the required parameter 'credentialId' when calling putIntegrationsCredential";
      }


      return this.apiClient.callApi(
        '/api/v2/integrations/credentials/{credentialId}', 
        'PUT', 
        { 'credentialId': credentialId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));
