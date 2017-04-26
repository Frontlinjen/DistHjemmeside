/*
 * Copyright 2010-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

var apigClientFactory = {};
apigClientFactory.newClient = function (config) {
    var apigClient = { };
    if(config === undefined) {
        config = {
            accessKey: '',
            secretKey: '',
            sessionToken: '',
            region: '',
            apiKey: undefined,
            defaultContentType: 'application/json',
            defaultAcceptType: 'application/json'
        };
    }
    if(config.accessKey === undefined) {
        config.accessKey = '';
    }
    if(config.secretKey === undefined) {
        config.secretKey = '';
    }
    if(config.apiKey === undefined) {
        config.apiKey = '';
    }
    if(config.sessionToken === undefined) {
        config.sessionToken = '';
    }
    if(config.region === undefined) {
        config.region = 'us-east-1';
    }
    //If defaultContentType is not defined then default to application/json
    if(config.defaultContentType === undefined) {
        config.defaultContentType = 'application/json';
    }
    //If defaultAcceptType is not defined then default to application/json
    if(config.defaultAcceptType === undefined) {
        config.defaultAcceptType = 'application/json';
    }

    
    // extract endpoint and path from url
    var invokeUrl = 'https://70r7hyxz72.execute-api.eu-west-1.amazonaws.com/development';
    var endpoint = /(^https?:\/\/[^\/]+)/g.exec(invokeUrl)[1];
    var pathComponent = invokeUrl.substring(endpoint.length);

    var sigV4ClientConfig = {
        accessKey: config.accessKey,
        secretKey: config.secretKey,
        sessionToken: config.sessionToken,
        serviceName: 'execute-api',
        region: config.region,
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var authType = 'NONE';
    if (sigV4ClientConfig.accessKey !== undefined && sigV4ClientConfig.accessKey !== '' && sigV4ClientConfig.secretKey !== undefined && sigV4ClientConfig.secretKey !== '') {
        authType = 'AWS_IAM';
    }

    var simpleHttpClientConfig = {
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var apiGatewayClient = apiGateway.core.apiGatewayClientFactory.newClient(simpleHttpClientConfig, sigV4ClientConfig);
    
    
    
    apigClient.accountPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var accountPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/account').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(accountPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.accountAppliedGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var accountAppliedGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/account/applied').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(accountAppliedGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.accountIDGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['ID'], ['body']);
        
        var accountIDGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/account/{ID}').expand(apiGateway.core.utils.parseParametersToObject(params, ['ID'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(accountIDGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.accountIDTasksGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['ID'], ['body']);
        
        var accountIDTasksGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/account/{ID}/tasks').expand(apiGateway.core.utils.parseParametersToObject(params, ['ID'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(accountIDTasksGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.loginPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var loginPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/login').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(loginPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.ratingsIDGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['ID'], ['body']);
        
        var ratingsIDGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/ratings/{ID}').expand(apiGateway.core.utils.parseParametersToObject(params, ['ID'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(ratingsIDGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.ratingsIDPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['ID'], ['body']);
        
        var ratingsIDPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/ratings/{ID}').expand(apiGateway.core.utils.parseParametersToObject(params, ['ID'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(ratingsIDPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tasksGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var tasksGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/tasks').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tasksGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tasksPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var tasksPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/tasks').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tasksPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tasksTaskIDGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['taskID'], ['body']);
        
        var tasksTaskIDGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/tasks/{taskID}').expand(apiGateway.core.utils.parseParametersToObject(params, ['taskID'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tasksTaskIDGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tasksTaskIDPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['taskID', 'body'], ['body']);
        
        var tasksTaskIDPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/tasks/{taskID}').expand(apiGateway.core.utils.parseParametersToObject(params, ['taskID', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tasksTaskIDPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tasksTaskIDDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['taskID'], ['body']);
        
        var tasksTaskIDDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/tasks/{taskID}').expand(apiGateway.core.utils.parseParametersToObject(params, ['taskID'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tasksTaskIDDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tasksTaskIDApplicantsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['taskID'], ['body']);
        
        var tasksTaskIDApplicantsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/tasks/{taskID}/applicants').expand(apiGateway.core.utils.parseParametersToObject(params, ['taskID'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tasksTaskIDApplicantsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tasksTaskIDApplicantsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['taskID', 'body'], ['body']);
        
        var tasksTaskIDApplicantsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/tasks/{taskID}/applicants').expand(apiGateway.core.utils.parseParametersToObject(params, ['taskID', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tasksTaskIDApplicantsPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tasksTaskIDApplicantsApplierIDGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['applierID', 'taskID'], ['body']);
        
        var tasksTaskIDApplicantsApplierIDGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/tasks/{taskID}/applicants/{applierID}').expand(apiGateway.core.utils.parseParametersToObject(params, ['applierID', 'taskID'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tasksTaskIDApplicantsApplierIDGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tasksTaskIDCommentsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['taskID'], ['body']);
        
        var tasksTaskIDCommentsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/tasks/{taskID}/comments').expand(apiGateway.core.utils.parseParametersToObject(params, ['taskID'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tasksTaskIDCommentsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tasksTaskIDCommentsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['taskID', 'body'], ['body']);
        
        var tasksTaskIDCommentsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/tasks/{taskID}/comments').expand(apiGateway.core.utils.parseParametersToObject(params, ['taskID', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tasksTaskIDCommentsPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tasksTaskIDCommentsCommentIDGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['taskID', 'commentID'], ['body']);
        
        var tasksTaskIDCommentsCommentIDGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/tasks/{taskID}/comments/{commentID}').expand(apiGateway.core.utils.parseParametersToObject(params, ['taskID', 'commentID'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tasksTaskIDCommentsCommentIDGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tasksTaskIDCommentsCommentIDPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['taskID', 'commentID', 'body'], ['body']);
        
        var tasksTaskIDCommentsCommentIDPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/tasks/{taskID}/comments/{commentID}').expand(apiGateway.core.utils.parseParametersToObject(params, ['taskID', 'commentID', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tasksTaskIDCommentsCommentIDPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tasksTaskIDCommentsCommentIDDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['taskID', 'commentID'], ['body']);
        
        var tasksTaskIDCommentsCommentIDDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/tasks/{taskID}/comments/{commentID}').expand(apiGateway.core.utils.parseParametersToObject(params, ['taskID', 'commentID'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tasksTaskIDCommentsCommentIDDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tasksTaskIDImagesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['taskID'], ['body']);
        
        var tasksTaskIDImagesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/tasks/{taskID}/images').expand(apiGateway.core.utils.parseParametersToObject(params, ['taskID'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tasksTaskIDImagesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tasksTaskIDImagesPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['taskID'], ['body']);
        
        var tasksTaskIDImagesPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/tasks/{taskID}/images').expand(apiGateway.core.utils.parseParametersToObject(params, ['taskID'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tasksTaskIDImagesPostRequest, authType, additionalParams, config.apiKey);
    };
    

    return apigClient;
};
