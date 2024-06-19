/* tslint:disable */
/* eslint-disable */
/**
 * @ledge/external-api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ErrorResponse } from '../models';
// @ts-ignore
import { ExternalUser } from '../models';
// @ts-ignore
import { RegisterUser200Response } from '../models';
// @ts-ignore
import { TrackActivity200Response } from '../models';
// @ts-ignore
import { TrackActivityInput } from '../models';
// @ts-ignore
import { TrackBatchActivitiesByUser200Response } from '../models';
// @ts-ignore
import { TrackBatchActivitiesInputInner } from '../models';
/**
 * ExternalApi - axios parameter creator
 * @export
 */
export const ExternalApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {ExternalUser} externalUser 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerUser: async (externalUser: ExternalUser, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'externalUser' is not null or undefined
            assertParamExists('registerUser', 'externalUser', externalUser)
            const localVarPath = `/external/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarQueryParameter, "access_token", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(externalUser, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Tracks a single game activity (or event) from a user. In order to prevent duplicate activity data, each userId, activityId, and occurrence combined should be unique.
         * @param {TrackActivityInput} trackActivityInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        trackActivity: async (trackActivityInput: TrackActivityInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'trackActivityInput' is not null or undefined
            assertParamExists('trackActivity', 'trackActivityInput', trackActivityInput)
            const localVarPath = `/external/activities`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarQueryParameter, "access_token", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(trackActivityInput, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Track a batch of game activities (events) for a given user. This function is similar to   , but it allows tracking multiple activities in a single request.
         * @param {string} userId 
         * @param {Array<TrackBatchActivitiesInputInner>} trackBatchActivitiesInputInner 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        trackBatchActivitiesByUser: async (userId: string, trackBatchActivitiesInputInner: Array<TrackBatchActivitiesInputInner>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('trackBatchActivitiesByUser', 'userId', userId)
            // verify required parameter 'trackBatchActivitiesInputInner' is not null or undefined
            assertParamExists('trackBatchActivitiesByUser', 'trackBatchActivitiesInputInner', trackBatchActivitiesInputInner)
            const localVarPath = `/external/batch-user-activities`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarQueryParameter, "access_token", configuration)

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(trackBatchActivitiesInputInner, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ExternalApi - functional programming interface
 * @export
 */
export const ExternalApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ExternalApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {ExternalUser} externalUser 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async registerUser(externalUser: ExternalUser, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RegisterUser200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.registerUser(externalUser, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Tracks a single game activity (or event) from a user. In order to prevent duplicate activity data, each userId, activityId, and occurrence combined should be unique.
         * @param {TrackActivityInput} trackActivityInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async trackActivity(trackActivityInput: TrackActivityInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TrackActivity200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.trackActivity(trackActivityInput, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Track a batch of game activities (events) for a given user. This function is similar to   , but it allows tracking multiple activities in a single request.
         * @param {string} userId 
         * @param {Array<TrackBatchActivitiesInputInner>} trackBatchActivitiesInputInner 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async trackBatchActivitiesByUser(userId: string, trackBatchActivitiesInputInner: Array<TrackBatchActivitiesInputInner>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TrackBatchActivitiesByUser200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.trackBatchActivitiesByUser(userId, trackBatchActivitiesInputInner, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ExternalApi - factory interface
 * @export
 */
export const ExternalApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ExternalApiFp(configuration)
    return {
        /**
         * 
         * @param {ExternalUser} externalUser 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerUser(externalUser: ExternalUser, options?: any): AxiosPromise<RegisterUser200Response> {
            return localVarFp.registerUser(externalUser, options).then((request) => request(axios, basePath));
        },
        /**
         * Tracks a single game activity (or event) from a user. In order to prevent duplicate activity data, each userId, activityId, and occurrence combined should be unique.
         * @param {TrackActivityInput} trackActivityInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        trackActivity(trackActivityInput: TrackActivityInput, options?: any): AxiosPromise<TrackActivity200Response> {
            return localVarFp.trackActivity(trackActivityInput, options).then((request) => request(axios, basePath));
        },
        /**
         * Track a batch of game activities (events) for a given user. This function is similar to   , but it allows tracking multiple activities in a single request.
         * @param {string} userId 
         * @param {Array<TrackBatchActivitiesInputInner>} trackBatchActivitiesInputInner 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        trackBatchActivitiesByUser(userId: string, trackBatchActivitiesInputInner: Array<TrackBatchActivitiesInputInner>, options?: any): AxiosPromise<TrackBatchActivitiesByUser200Response> {
            return localVarFp.trackBatchActivitiesByUser(userId, trackBatchActivitiesInputInner, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ExternalApi - object-oriented interface
 * @export
 * @class ExternalApi
 * @extends {BaseAPI}
 */
export class ExternalApi extends BaseAPI {
    /**
     * 
     * @param {ExternalUser} externalUser 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExternalApi
     */
    public registerUser(externalUser: ExternalUser, options?: AxiosRequestConfig) {
        return ExternalApiFp(this.configuration).registerUser(externalUser, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Tracks a single game activity (or event) from a user. In order to prevent duplicate activity data, each userId, activityId, and occurrence combined should be unique.
     * @param {TrackActivityInput} trackActivityInput 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExternalApi
     */
    public trackActivity(trackActivityInput: TrackActivityInput, options?: AxiosRequestConfig) {
        return ExternalApiFp(this.configuration).trackActivity(trackActivityInput, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Track a batch of game activities (events) for a given user. This function is similar to   , but it allows tracking multiple activities in a single request.
     * @param {string} userId 
     * @param {Array<TrackBatchActivitiesInputInner>} trackBatchActivitiesInputInner 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExternalApi
     */
    public trackBatchActivitiesByUser(userId: string, trackBatchActivitiesInputInner: Array<TrackBatchActivitiesInputInner>, options?: AxiosRequestConfig) {
        return ExternalApiFp(this.configuration).trackBatchActivitiesByUser(userId, trackBatchActivitiesInputInner, options).then((request) => request(this.axios, this.basePath));
    }
}
