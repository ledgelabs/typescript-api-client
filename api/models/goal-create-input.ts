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



/**
 * 
 * @export
 * @interface GoalCreateInput
 */
export interface GoalCreateInput {
    /**
     * 
     * @type {string}
     * @memberof GoalCreateInput
     */
    'bannerUrl'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalCreateInput
     */
    'instructions'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalCreateInput
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof GoalCreateInput
     */
    'activityId': string;
    /**
     * 
     * @type {string}
     * @memberof GoalCreateInput
     */
    'questId': string;
    /**
     * 
     * @type {number}
     * @memberof GoalCreateInput
     */
    'target': number;
    /**
     * 
     * @type {string}
     * @memberof GoalCreateInput
     */
    'title': string;
}

