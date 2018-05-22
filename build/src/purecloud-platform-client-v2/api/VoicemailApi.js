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
    root.platformClient.VoicemailApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Voicemail service.
   * @module purecloud-platform-client-v2/api/VoicemailApi
   * @version 26.1.0
   */

  /**
   * Constructs a new VoicemailApi. 
   * @alias module:purecloud-platform-client-v2/api/VoicemailApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete a voicemail message.
     * A user voicemail can only be deleted by its associated user. A group voicemail can only be deleted by a user that is a member of the group. A queue voicemail can only be deleted by a user with the acd voicemail delete permission.
     * @param {String} messageId Message ID
     */
    this.deleteVoicemailMessage = function(messageId) { 

      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw "Missing the required parameter 'messageId' when calling deleteVoicemailMessage";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/messages/{messageId}', 
        'DELETE', 
        { 'messageId': messageId }, 
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
     * Delete all voicemail messages
     * 
     */
    this.deleteVoicemailMessages = function() { 


      return this.apiClient.callApi(
        '/api/v2/voicemail/messages', 
        'DELETE', 
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
     * Get the group&#39;s mailbox information
     * 
     * @param {String} groupId groupId
     */
    this.getVoicemailGroupMailbox = function(groupId) { 

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw "Missing the required parameter 'groupId' when calling getVoicemailGroupMailbox";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/groups/{groupId}/mailbox', 
        'GET', 
        { 'groupId': groupId }, 
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
     * List voicemail messages
     * 
     * @param {String} groupId Group ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getVoicemailGroupMessages = function(groupId, opts) { 
      opts = opts || {};

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw "Missing the required parameter 'groupId' when calling getVoicemailGroupMessages";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/groups/{groupId}/messages', 
        'GET', 
        { 'groupId': groupId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a group&#39;s voicemail policy
     * 
     * @param {String} groupId Group ID
     */
    this.getVoicemailGroupPolicy = function(groupId) { 

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw "Missing the required parameter 'groupId' when calling getVoicemailGroupPolicy";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/groups/{groupId}/policy', 
        'GET', 
        { 'groupId': groupId }, 
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
     * Get the current user&#39;s mailbox information
     * 
     */
    this.getVoicemailMailbox = function() { 


      return this.apiClient.callApi(
        '/api/v2/voicemail/mailbox', 
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
     * Get the current user&#39;s mailbox information
     * 
     */
    this.getVoicemailMeMailbox = function() { 


      return this.apiClient.callApi(
        '/api/v2/voicemail/me/mailbox', 
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
     * List voicemail messages
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getVoicemailMeMessages = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/voicemail/me/messages', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the current user&#39;s voicemail policy
     * 
     */
    this.getVoicemailMePolicy = function() { 


      return this.apiClient.callApi(
        '/api/v2/voicemail/me/policy', 
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
     * Get a voicemail message
     * 
     * @param {String} messageId Message ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand If the caller is a known user, which fields, if any, to expand
     */
    this.getVoicemailMessage = function(messageId, opts) { 
      opts = opts || {};

      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw "Missing the required parameter 'messageId' when calling getVoicemailMessage";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/messages/{messageId}', 
        'GET', 
        { 'messageId': messageId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get media playback URI for this voicemail message
     * 
     * @param {String} messageId Message ID
     * @param {Object} opts Optional parameters
     * @param {Object} opts.formatId The desired media format. (default to WEBM)
     */
    this.getVoicemailMessageMedia = function(messageId, opts) { 
      opts = opts || {};

      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw "Missing the required parameter 'messageId' when calling getVoicemailMessageMedia";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/messages/{messageId}/media', 
        'GET', 
        { 'messageId': messageId }, 
        { 'formatId': opts['formatId'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * List voicemail messages
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.ids An optional comma separated list of VoicemailMessage ids
     * @param {Array.<String>} opts.expand If the caller is a known user, which fields, if any, to expand
     */
    this.getVoicemailMessages = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/voicemail/messages', 
        'GET', 
        {  }, 
        { 'ids': opts['ids'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a policy
     * 
     */
    this.getVoicemailPolicy = function() { 


      return this.apiClient.callApi(
        '/api/v2/voicemail/policy', 
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
     * List voicemail messages
     * 
     * @param {String} queueId Queue ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getVoicemailQueueMessages = function(queueId, opts) { 
      opts = opts || {};

      // verify the required parameter 'queueId' is set
      if (queueId === undefined || queueId === null) {
        throw "Missing the required parameter 'queueId' when calling getVoicemailQueueMessages";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/queues/{queueId}/messages', 
        'GET', 
        { 'queueId': queueId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search voicemails using the q64 value returned from a previous search
     * 
     * @param {String} q64 q64
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand expand
     */
    this.getVoicemailSearch = function(q64, opts) { 
      opts = opts || {};

      // verify the required parameter 'q64' is set
      if (q64 === undefined || q64 === null) {
        throw "Missing the required parameter 'q64' when calling getVoicemailSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/search', 
        'GET', 
        {  }, 
        { 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a user&#39;s voicemail policy
     * 
     * @param {String} userId User ID
     */
    this.getVoicemailUserpolicy = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getVoicemailUserpolicy";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/userpolicies/{userId}', 
        'GET', 
        { 'userId': userId }, 
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
     * Update a group&#39;s voicemail policy
     * 
     * @param {String} groupId Group ID
     * @param {Object} body The group&#39;s voicemail policy
     */
    this.patchVoicemailGroupPolicy = function(groupId, body) { 

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw "Missing the required parameter 'groupId' when calling patchVoicemailGroupPolicy";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchVoicemailGroupPolicy";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/groups/{groupId}/policy', 
        'PATCH', 
        { 'groupId': groupId }, 
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
     * Update the current user&#39;s voicemail policy
     * 
     * @param {Object} body The user&#39;s voicemail policy
     */
    this.patchVoicemailMePolicy = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchVoicemailMePolicy";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/me/policy', 
        'PATCH', 
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
     * Update a voicemail message
     * A user voicemail can only be modified by its associated user. A group voicemail can only be modified by a user that is a member of the group. A queue voicemail can only be modified by a participant of the conversation the voicemail is associated with.
     * @param {String} messageId Message ID
     * @param {Object} body VoicemailMessage
     */
    this.patchVoicemailMessage = function(messageId, body) { 

      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw "Missing the required parameter 'messageId' when calling patchVoicemailMessage";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchVoicemailMessage";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/messages/{messageId}', 
        'PATCH', 
        { 'messageId': messageId }, 
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
     * Update a user&#39;s voicemail policy
     * 
     * @param {String} userId User ID
     * @param {Object} body The user&#39;s voicemail policy
     */
    this.patchVoicemailUserpolicy = function(userId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling patchVoicemailUserpolicy";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchVoicemailUserpolicy";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/userpolicies/{userId}', 
        'PATCH', 
        { 'userId': userId }, 
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
     * Copy a voicemail message to a user or group
     * 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     */
    this.postVoicemailMessages = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/voicemail/messages', 
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
     * Search voicemails
     * 
     * @param {Object} body Search request options
     */
    this.postVoicemailSearch = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postVoicemailSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/search', 
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
     * Update a voicemail message
     * A user voicemail can only be modified by its associated user. A group voicemail can only be modified by a user that is a member of the group. A queue voicemail can only be modified by a participant of the conversation the voicemail is associated with.
     * @param {String} messageId Message ID
     * @param {Object} body VoicemailMessage
     */
    this.putVoicemailMessage = function(messageId, body) { 

      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw "Missing the required parameter 'messageId' when calling putVoicemailMessage";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putVoicemailMessage";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/messages/{messageId}', 
        'PUT', 
        { 'messageId': messageId }, 
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
     * Update a policy
     * 
     * @param {Object} body Policy
     */
    this.putVoicemailPolicy = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putVoicemailPolicy";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/policy', 
        'PUT', 
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
  };

  return exports;
}));
