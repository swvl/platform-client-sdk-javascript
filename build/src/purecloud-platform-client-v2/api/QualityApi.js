import ApiClient from '../ApiClient.js';


class QualityApi {
	/**
	 * Quality service.
	 * @module purecloud-platform-client-v2/api/QualityApi
	 * @version 45.0.0
	 */

	/**
	 * Constructs a new QualityApi. 
	 * @alias module:purecloud-platform-client-v2/api/QualityApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete a calibration by id.
	 * 
	 * @param {String} calibrationId Calibration ID
	 * @param {String} calibratorId calibratorId
	 */
	deleteQualityCalibration(calibrationId, calibratorId) { 
		// verify the required parameter 'calibrationId' is set
		if (calibrationId === undefined || calibrationId === null) {
			throw 'Missing the required parameter "calibrationId" when calling deleteQualityCalibration';
		}
		// verify the required parameter 'calibratorId' is set
		if (calibratorId === undefined || calibratorId === null) {
			throw 'Missing the required parameter "calibratorId" when calling deleteQualityCalibration';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/calibrations/{calibrationId}', 
			'DELETE', 
			{ 'calibrationId': calibrationId }, 
			{ 'calibratorId': calibratorId }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Delete an evaluation
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} evaluationId evaluationId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.expand evaluatorId
	 */
	deleteQualityConversationEvaluation(conversationId, evaluationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling deleteQualityConversationEvaluation';
		}
		// verify the required parameter 'evaluationId' is set
		if (evaluationId === undefined || evaluationId === null) {
			throw 'Missing the required parameter "evaluationId" when calling deleteQualityConversationEvaluation';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}', 
			'DELETE', 
			{ 'conversationId': conversationId,'evaluationId': evaluationId }, 
			{ 'expand': opts['expand'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Delete an evaluation form.
	 * 
	 * @param {String} formId Form ID
	 */
	deleteQualityForm(formId) { 
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null) {
			throw 'Missing the required parameter "formId" when calling deleteQualityForm';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/{formId}', 
			'DELETE', 
			{ 'formId': formId }, 
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
	 * Delete an evaluation form.
	 * 
	 * @param {String} formId Form ID
	 */
	deleteQualityFormsEvaluation(formId) { 
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null) {
			throw 'Missing the required parameter "formId" when calling deleteQualityFormsEvaluation';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/evaluations/{formId}', 
			'DELETE', 
			{ 'formId': formId }, 
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
	 * Delete a survey form.
	 * 
	 * @param {String} formId Form ID
	 */
	deleteQualityFormsSurvey(formId) { 
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null) {
			throw 'Missing the required parameter "formId" when calling deleteQualityFormsSurvey';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/surveys/{formId}', 
			'DELETE', 
			{ 'formId': formId }, 
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
	 * Delete a keywordSet by id.
	 * 
	 * @param {String} keywordSetId KeywordSet ID
	 */
	deleteQualityKeywordset(keywordSetId) { 
		// verify the required parameter 'keywordSetId' is set
		if (keywordSetId === undefined || keywordSetId === null) {
			throw 'Missing the required parameter "keywordSetId" when calling deleteQualityKeywordset';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/keywordsets/{keywordSetId}', 
			'DELETE', 
			{ 'keywordSetId': keywordSetId }, 
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
	 * Delete keyword sets
	 * Bulk delete of keyword sets; this will only delete the keyword sets that match the ids specified in the query param.
	 * @param {String} ids A comma-delimited list of valid KeywordSet ids
	 */
	deleteQualityKeywordsets(ids) { 
		// verify the required parameter 'ids' is set
		if (ids === undefined || ids === null) {
			throw 'Missing the required parameter "ids" when calling deleteQualityKeywordsets';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/keywordsets', 
			'DELETE', 
			{  }, 
			{ 'ids': ids }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Gets a list of Agent Activities
	 * Including the number of evaluations and average evaluation score
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.sortBy variable name requested to sort by
	 * @param {Array.<String>} opts.expand variable name requested by expand list
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 * @param {Date} opts.startTime Start time of agent activity. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
	 * @param {Date} opts.endTime End time of agent activity. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
	 * @param {Array.<String>} opts.agentUserId user id of agent requested
	 * @param {String} opts.evaluatorUserId user id of the evaluator
	 * @param {String} opts.name name
	 * @param {String} opts.group group id
	 */
	getQualityAgentsActivity(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/quality/agents/activity', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'startTime': opts['startTime'],'endTime': opts['endTime'],'agentUserId': this.apiClient.buildCollectionParam(opts['agentUserId'], 'multi'),'evaluatorUserId': opts['evaluatorUserId'],'name': opts['name'],'group': opts['group'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a calibration by id.  Requires either calibrator id or conversation id
	 * 
	 * @param {String} calibrationId Calibration ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.calibratorId calibratorId
	 * @param {String} opts.conversationId conversationId
	 */
	getQualityCalibration(calibrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'calibrationId' is set
		if (calibrationId === undefined || calibrationId === null) {
			throw 'Missing the required parameter "calibrationId" when calling getQualityCalibration';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/calibrations/{calibrationId}', 
			'GET', 
			{ 'calibrationId': calibrationId }, 
			{ 'calibratorId': opts['calibratorId'],'conversationId': opts['conversationId'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the list of calibrations
	 * 
	 * @param {String} calibratorId user id of calibrator
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.sortBy variable name requested to sort by
	 * @param {Array.<String>} opts.expand variable name requested by expand list
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 * @param {String} opts.conversationId conversation id
	 * @param {Date} opts.startTime Beginning of the calibration query. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
	 * @param {Date} opts.endTime end of the calibration query. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
	 */
	getQualityCalibrations(calibratorId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'calibratorId' is set
		if (calibratorId === undefined || calibratorId === null) {
			throw 'Missing the required parameter "calibratorId" when calling getQualityCalibrations';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/calibrations', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'conversationId': opts['conversationId'],'startTime': opts['startTime'],'endTime': opts['endTime'],'calibratorId': calibratorId }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get audits for conversation or recording
	 * 
	 * @param {String} conversationId Conversation ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.sortBy variable name requested to sort by
	 * @param {Array.<String>} opts.expand variable name requested by expand list
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 * @param {String} opts.recordingId id of the recording
	 * @param {String} opts.entityType entity type options: Recording, Calibration, Evaluation, Annotation, Screen_Recording (default to RECORDING)
	 */
	getQualityConversationAudits(conversationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getQualityConversationAudits';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/conversations/{conversationId}/audits', 
			'GET', 
			{ 'conversationId': conversationId }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'recordingId': opts['recordingId'],'entityType': opts['entityType'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get an evaluation
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} evaluationId evaluationId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.expand agent, evaluator, evaluationForm
	 */
	getQualityConversationEvaluation(conversationId, evaluationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getQualityConversationEvaluation';
		}
		// verify the required parameter 'evaluationId' is set
		if (evaluationId === undefined || evaluationId === null) {
			throw 'Missing the required parameter "evaluationId" when calling getQualityConversationEvaluation';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}', 
			'GET', 
			{ 'conversationId': conversationId,'evaluationId': evaluationId }, 
			{ 'expand': opts['expand'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the surveys for a conversation
	 * 
	 * @param {String} conversationId conversationId
	 */
	getQualityConversationSurveys(conversationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getQualityConversationSurveys';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/conversations/{conversationId}/surveys', 
			'GET', 
			{ 'conversationId': conversationId }, 
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
	 * Queries Evaluations and returns a paged list
	 * Query params must include one of conversationId, evaluatorUserId, or agentUserId
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.sortBy variable name requested to sort by
	 * @param {Array.<String>} opts.expand variable name requested by expand list
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 * @param {String} opts.conversationId conversationId specified
	 * @param {String} opts.agentUserId user id of the agent
	 * @param {String} opts.evaluatorUserId evaluator user id
	 * @param {String} opts.queueId queue id
	 * @param {String} opts.startTime start time of the evaluation query
	 * @param {String} opts.endTime end time of the evaluation query
	 * @param {Array.<String>} opts.evaluationState 
	 * @param {Boolean} opts.isReleased the evaluation has been released
	 * @param {Boolean} opts.agentHasRead agent has the evaluation
	 * @param {Boolean} opts.expandAnswerTotalScores get the total scores for evaluations
	 * @param {Number} opts.maximum maximum
	 * @param {String} opts.sortOrder sort order options for agentUserId or evaluatorUserId query. Valid options are &#39;a&#39;, &#39;asc&#39;, &#39;ascending&#39;, &#39;d&#39;, &#39;desc&#39;, &#39;descending&#39;
	 */
	getQualityEvaluationsQuery(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/quality/evaluations/query', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'conversationId': opts['conversationId'],'agentUserId': opts['agentUserId'],'evaluatorUserId': opts['evaluatorUserId'],'queueId': opts['queueId'],'startTime': opts['startTime'],'endTime': opts['endTime'],'evaluationState': this.apiClient.buildCollectionParam(opts['evaluationState'], 'multi'),'isReleased': opts['isReleased'],'agentHasRead': opts['agentHasRead'],'expandAnswerTotalScores': opts['expandAnswerTotalScores'],'maximum': opts['maximum'],'sortOrder': opts['sortOrder'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get an evaluator activity
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.sortBy variable name requested to sort by
	 * @param {Array.<String>} opts.expand variable name requested by expand list
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 * @param {Date} opts.startTime The start time specified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
	 * @param {Date} opts.endTime The end time specified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
	 * @param {String} opts.name Evaluator name
	 * @param {Array.<String>} opts.permission permission strings
	 * @param {String} opts.group group id
	 */
	getQualityEvaluatorsActivity(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/quality/evaluators/activity', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'startTime': opts['startTime'],'endTime': opts['endTime'],'name': opts['name'],'permission': this.apiClient.buildCollectionParam(opts['permission'], 'multi'),'group': opts['group'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get an evaluation form
	 * 
	 * @param {String} formId Form ID
	 */
	getQualityForm(formId) { 
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null) {
			throw 'Missing the required parameter "formId" when calling getQualityForm';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/{formId}', 
			'GET', 
			{ 'formId': formId }, 
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
	 * Gets all the revisions for a specific evaluation.
	 * 
	 * @param {String} formId Form ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getQualityFormVersions(formId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null) {
			throw 'Missing the required parameter "formId" when calling getQualityFormVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/{formId}/versions', 
			'GET', 
			{ 'formId': formId }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the list of evaluation forms
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.sortBy variable name requested to sort by
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 * @param {String} opts.expand Expand
	 * @param {String} opts.name Name
	 * @param {String} opts.sortOrder Order to sort results, either asc or desc
	 */
	getQualityForms(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/quality/forms', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'expand': opts['expand'],'name': opts['name'],'sortOrder': opts['sortOrder'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get an evaluation form
	 * 
	 * @param {String} formId Form ID
	 */
	getQualityFormsEvaluation(formId) { 
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null) {
			throw 'Missing the required parameter "formId" when calling getQualityFormsEvaluation';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/evaluations/{formId}', 
			'GET', 
			{ 'formId': formId }, 
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
	 * Gets all the revisions for a specific evaluation.
	 * 
	 * @param {String} formId Form ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getQualityFormsEvaluationVersions(formId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null) {
			throw 'Missing the required parameter "formId" when calling getQualityFormsEvaluationVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/evaluations/{formId}/versions', 
			'GET', 
			{ 'formId': formId }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the list of evaluation forms
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.sortBy variable name requested to sort by
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 * @param {String} opts.expand Expand
	 * @param {String} opts.name Name
	 * @param {String} opts.sortOrder Order to sort results, either asc or desc
	 */
	getQualityFormsEvaluations(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/quality/forms/evaluations', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'expand': opts['expand'],'name': opts['name'],'sortOrder': opts['sortOrder'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a survey form
	 * 
	 * @param {String} formId Form ID
	 */
	getQualityFormsSurvey(formId) { 
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null) {
			throw 'Missing the required parameter "formId" when calling getQualityFormsSurvey';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/surveys/{formId}', 
			'GET', 
			{ 'formId': formId }, 
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
	 * Gets all the revisions for a specific survey.
	 * 
	 * @param {String} formId Form ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getQualityFormsSurveyVersions(formId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null) {
			throw 'Missing the required parameter "formId" when calling getQualityFormsSurveyVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/surveys/{formId}/versions', 
			'GET', 
			{ 'formId': formId }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the list of survey forms
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.sortBy variable name requested to sort by
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 * @param {String} opts.expand Expand
	 * @param {String} opts.name Name
	 * @param {String} opts.sortOrder Order to sort results, either asc or desc
	 */
	getQualityFormsSurveys(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/quality/forms/surveys', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'expand': opts['expand'],'name': opts['name'],'sortOrder': opts['sortOrder'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Retrieve a list of survey forms by their ids
	 * 
	 * @param {Array.<String>} id A comma-delimited list of valid survey form ids
	 */
	getQualityFormsSurveysBulk(id) { 
		// verify the required parameter 'id' is set
		if (id === undefined || id === null) {
			throw 'Missing the required parameter "id" when calling getQualityFormsSurveysBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/surveys/bulk', 
			'GET', 
			{  }, 
			{ 'id': this.apiClient.buildCollectionParam(id, 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Retrieve a list of the latest form versions by context ids
	 * 
	 * @param {Array.<String>} contextId A comma-delimited list of valid survey form context ids
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.published If true, the latest published version will be included. If false, only the unpublished version will be included. (default to true)
	 */
	getQualityFormsSurveysBulkContexts(contextId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contextId' is set
		if (contextId === undefined || contextId === null) {
			throw 'Missing the required parameter "contextId" when calling getQualityFormsSurveysBulkContexts';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/surveys/bulk/contexts', 
			'GET', 
			{  }, 
			{ 'contextId': this.apiClient.buildCollectionParam(contextId, 'multi'),'published': opts['published'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a keywordSet by id.
	 * 
	 * @param {String} keywordSetId KeywordSet ID
	 */
	getQualityKeywordset(keywordSetId) { 
		// verify the required parameter 'keywordSetId' is set
		if (keywordSetId === undefined || keywordSetId === null) {
			throw 'Missing the required parameter "keywordSetId" when calling getQualityKeywordset';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/keywordsets/{keywordSetId}', 
			'GET', 
			{ 'keywordSetId': keywordSetId }, 
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
	 * Get the list of keyword sets
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.sortBy variable name requested to sort by
	 * @param {Array.<String>} opts.expand variable name requested by expand list
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 * @param {String} opts.name the keyword set name - used for filtering results in searches.
	 * @param {String} opts.queueId the queue id - used for filtering results in searches.
	 * @param {String} opts.agentId the agent id - used for filtering results in searches.
	 * @param {Object} opts.operator If agentID and queueId are both present, this determines whether the query is an AND or OR between those parameters.
	 */
	getQualityKeywordsets(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/quality/keywordsets', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'name': opts['name'],'queueId': opts['queueId'],'agentId': opts['agentId'],'operator': opts['operator'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the published evaluation forms.
	 * 
	 * @param {String} formId Form ID
	 */
	getQualityPublishedform(formId) { 
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null) {
			throw 'Missing the required parameter "formId" when calling getQualityPublishedform';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/publishedforms/{formId}', 
			'GET', 
			{ 'formId': formId }, 
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
	 * Get the published evaluation forms.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.name Name
	 * @param {Boolean} opts.onlyLatestPerContext onlyLatestPerContext (default to false)
	 */
	getQualityPublishedforms(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/quality/publishedforms', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'],'onlyLatestPerContext': opts['onlyLatestPerContext'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the most recent published version of an evaluation form.
	 * 
	 * @param {String} formId Form ID
	 */
	getQualityPublishedformsEvaluation(formId) { 
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null) {
			throw 'Missing the required parameter "formId" when calling getQualityPublishedformsEvaluation';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/publishedforms/evaluations/{formId}', 
			'GET', 
			{ 'formId': formId }, 
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
	 * Get the published evaluation forms.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.name Name
	 * @param {Boolean} opts.onlyLatestPerContext onlyLatestPerContext (default to false)
	 */
	getQualityPublishedformsEvaluations(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/quality/publishedforms/evaluations', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'],'onlyLatestPerContext': opts['onlyLatestPerContext'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the most recent published version of a survey form.
	 * 
	 * @param {String} formId Form ID
	 */
	getQualityPublishedformsSurvey(formId) { 
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null) {
			throw 'Missing the required parameter "formId" when calling getQualityPublishedformsSurvey';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/publishedforms/surveys/{formId}', 
			'GET', 
			{ 'formId': formId }, 
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
	 * Get the published survey forms.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.name Name
	 * @param {Boolean} opts.onlyLatestEnabledPerContext onlyLatestEnabledPerContext (default to false)
	 */
	getQualityPublishedformsSurveys(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/quality/publishedforms/surveys', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'],'onlyLatestEnabledPerContext': opts['onlyLatestEnabledPerContext'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a survey for a conversation
	 * 
	 * @param {String} surveyId surveyId
	 */
	getQualitySurvey(surveyId) { 
		// verify the required parameter 'surveyId' is set
		if (surveyId === undefined || surveyId === null) {
			throw 'Missing the required parameter "surveyId" when calling getQualitySurvey';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/surveys/{surveyId}', 
			'GET', 
			{ 'surveyId': surveyId }, 
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
	 * Get a survey as an end-customer, for the purposes of scoring it.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.customerSurveyUrl customerSurveyUrl
	 */
	getQualitySurveysScorable(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/quality/surveys/scorable', 
			'GET', 
			{  }, 
			{ 'customerSurveyUrl': opts['customerSurveyUrl'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Disable a particular version of a survey form and invalidates any invitations that have already been sent to customers using this version of the form.
	 * 
	 * @param {String} formId Form ID
	 * @param {Object} body Survey form
	 */
	patchQualityFormsSurvey(formId, body) { 
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null) {
			throw 'Missing the required parameter "formId" when calling patchQualityFormsSurvey';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchQualityFormsSurvey';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/surveys/{formId}', 
			'PATCH', 
			{ 'formId': formId }, 
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
	 * Query for evaluation aggregates
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsEvaluationsAggregatesQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsEvaluationsAggregatesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/evaluations/aggregates/query', 
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
	 * Query for survey aggregates
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsSurveysAggregatesQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsSurveysAggregatesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/surveys/aggregates/query', 
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
	 * Create a calibration
	 * 
	 * @param {Object} body calibration
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.expand calibratorId
	 */
	postQualityCalibrations(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postQualityCalibrations';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/calibrations', 
			'POST', 
			{  }, 
			{ 'expand': opts['expand'] }, 
			{  }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Create an evaluation
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body evaluation
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.expand evaluatorId
	 */
	postQualityConversationEvaluations(conversationId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postQualityConversationEvaluations';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postQualityConversationEvaluations';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/conversations/{conversationId}/evaluations', 
			'POST', 
			{ 'conversationId': conversationId }, 
			{ 'expand': opts['expand'] }, 
			{  }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Score evaluation
	 * 
	 * @param {Object} body evaluationAndScoringSet
	 */
	postQualityEvaluationsScoring(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postQualityEvaluationsScoring';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/evaluations/scoring', 
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
	 * Create an evaluation form.
	 * 
	 * @param {Object} body Evaluation form
	 */
	postQualityForms(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postQualityForms';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms', 
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
	 * Create an evaluation form.
	 * 
	 * @param {Object} body Evaluation form
	 */
	postQualityFormsEvaluations(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postQualityFormsEvaluations';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/evaluations', 
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
	 * Create a survey form.
	 * 
	 * @param {Object} body Survey form
	 */
	postQualityFormsSurveys(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postQualityFormsSurveys';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/surveys', 
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
	 * Create a Keyword Set
	 * 
	 * @param {Object} body keywordSet
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.expand queueId
	 */
	postQualityKeywordsets(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postQualityKeywordsets';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/keywordsets', 
			'POST', 
			{  }, 
			{ 'expand': opts['expand'] }, 
			{  }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Publish an evaluation form.
	 * 
	 * @param {Object} body Publish request containing id of form to publish
	 */
	postQualityPublishedforms(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postQualityPublishedforms';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/publishedforms', 
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
	 * Publish an evaluation form.
	 * 
	 * @param {Object} body Publish request containing id of form to publish
	 */
	postQualityPublishedformsEvaluations(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postQualityPublishedformsEvaluations';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/publishedforms/evaluations', 
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
	 * Publish a survey form.
	 * 
	 * @param {Object} body Survey form
	 */
	postQualityPublishedformsSurveys(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postQualityPublishedformsSurveys';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/publishedforms/surveys', 
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
	 * Retrieve the spotability statistic
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Keyword Set
	 */
	postQualitySpotability(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/quality/spotability', 
			'POST', 
			{  }, 
			{  }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Score survey
	 * 
	 * @param {Object} body surveyAndScoringSet
	 */
	postQualitySurveysScoring(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postQualitySurveysScoring';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/surveys/scoring', 
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
	 * Update a calibration to the specified calibration via PUT.  Editable fields include: evaluators, expertEvaluator, and scoringIndex
	 * 
	 * @param {String} calibrationId Calibration ID
	 * @param {Object} body Calibration
	 */
	putQualityCalibration(calibrationId, body) { 
		// verify the required parameter 'calibrationId' is set
		if (calibrationId === undefined || calibrationId === null) {
			throw 'Missing the required parameter "calibrationId" when calling putQualityCalibration';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putQualityCalibration';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/calibrations/{calibrationId}', 
			'PUT', 
			{ 'calibrationId': calibrationId }, 
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
	 * Update an evaluation
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} evaluationId evaluationId
	 * @param {Object} body evaluation
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.expand evaluatorId
	 */
	putQualityConversationEvaluation(conversationId, evaluationId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling putQualityConversationEvaluation';
		}
		// verify the required parameter 'evaluationId' is set
		if (evaluationId === undefined || evaluationId === null) {
			throw 'Missing the required parameter "evaluationId" when calling putQualityConversationEvaluation';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putQualityConversationEvaluation';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}', 
			'PUT', 
			{ 'conversationId': conversationId,'evaluationId': evaluationId }, 
			{ 'expand': opts['expand'] }, 
			{  }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Update an evaluation form.
	 * 
	 * @param {String} formId Form ID
	 * @param {Object} body Evaluation form
	 */
	putQualityForm(formId, body) { 
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null) {
			throw 'Missing the required parameter "formId" when calling putQualityForm';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putQualityForm';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/{formId}', 
			'PUT', 
			{ 'formId': formId }, 
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
	 * Update an evaluation form.
	 * 
	 * @param {String} formId Form ID
	 * @param {Object} body Evaluation form
	 */
	putQualityFormsEvaluation(formId, body) { 
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null) {
			throw 'Missing the required parameter "formId" when calling putQualityFormsEvaluation';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putQualityFormsEvaluation';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/evaluations/{formId}', 
			'PUT', 
			{ 'formId': formId }, 
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
	 * Update a survey form.
	 * 
	 * @param {String} formId Form ID
	 * @param {Object} body Survey form
	 */
	putQualityFormsSurvey(formId, body) { 
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null) {
			throw 'Missing the required parameter "formId" when calling putQualityFormsSurvey';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putQualityFormsSurvey';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/surveys/{formId}', 
			'PUT', 
			{ 'formId': formId }, 
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
	 * Update a keywordSet to the specified keywordSet via PUT.
	 * 
	 * @param {String} keywordSetId KeywordSet ID
	 * @param {Object} body keywordSet
	 */
	putQualityKeywordset(keywordSetId, body) { 
		// verify the required parameter 'keywordSetId' is set
		if (keywordSetId === undefined || keywordSetId === null) {
			throw 'Missing the required parameter "keywordSetId" when calling putQualityKeywordset';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putQualityKeywordset';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/keywordsets/{keywordSetId}', 
			'PUT', 
			{ 'keywordSetId': keywordSetId }, 
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
	 * Update a survey as an end-customer, for the purposes of scoring it.
	 * 
	 * @param {Object} body survey
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.customerSurveyUrl customerSurveyUrl
	 */
	putQualitySurveysScorable(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putQualitySurveysScorable';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/surveys/scorable', 
			'PUT', 
			{  }, 
			{ 'customerSurveyUrl': opts['customerSurveyUrl'] }, 
			{  }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

}


export default QualityApi;