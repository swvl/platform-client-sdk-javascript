import ApiClient from '../ApiClient.js';


class WebChatApi {
	/**
	 * WebChat service.
	 * @module purecloud-platform-client-v2/api/WebChatApi
	 * @version 45.0.0
	 */

	/**
	 * Constructs a new WebChatApi. 
	 * @alias module:purecloud-platform-client-v2/api/WebChatApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete a WebChat deployment
	 * 
	 * @param {String} deploymentId Deployment Id
	 */
	deleteWebchatDeployment(deploymentId) { 
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null) {
			throw 'Missing the required parameter "deploymentId" when calling deleteWebchatDeployment';
		}

		return this.apiClient.callApi(
			'/api/v2/webchat/deployments/{deploymentId}', 
			'DELETE', 
			{ 'deploymentId': deploymentId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Remove WebChat deployment settings
	 * 
	 */
	deleteWebchatSettings() { 

		return this.apiClient.callApi(
			'/api/v2/webchat/settings', 
			'DELETE', 
			{  }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a WebChat deployment
	 * 
	 * @param {String} deploymentId Deployment Id
	 */
	getWebchatDeployment(deploymentId) { 
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null) {
			throw 'Missing the required parameter "deploymentId" when calling getWebchatDeployment';
		}

		return this.apiClient.callApi(
			'/api/v2/webchat/deployments/{deploymentId}', 
			'GET', 
			{ 'deploymentId': deploymentId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * List WebChat deployments
	 * 
	 */
	getWebchatDeployments() { 

		return this.apiClient.callApi(
			'/api/v2/webchat/deployments', 
			'GET', 
			{  }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get WebChat deployment settings
	 * 
	 */
	getWebchatSettings() { 

		return this.apiClient.callApi(
			'/api/v2/webchat/settings', 
			'GET', 
			{  }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Create WebChat deployment
	 * 
	 * @param {Object} body Deployment
	 */
	postWebchatDeployments(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWebchatDeployments';
		}

		return this.apiClient.callApi(
			'/api/v2/webchat/deployments', 
			'POST', 
			{  }, 
			{  }, 
			{  }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Update a WebChat deployment
	 * 
	 * @param {String} deploymentId Deployment Id
	 * @param {Object} body Deployment
	 */
	putWebchatDeployment(deploymentId, body) { 
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null) {
			throw 'Missing the required parameter "deploymentId" when calling putWebchatDeployment';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putWebchatDeployment';
		}

		return this.apiClient.callApi(
			'/api/v2/webchat/deployments/{deploymentId}', 
			'PUT', 
			{ 'deploymentId': deploymentId }, 
			{  }, 
			{  }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Update WebChat deployment settings
	 * 
	 * @param {Object} body webChatSettings
	 */
	putWebchatSettings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putWebchatSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/webchat/settings', 
			'PUT', 
			{  }, 
			{  }, 
			{  }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

}


export default WebChatApi;