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


// May contain unused imports in some cases
// @ts-ignore
import { QuestType } from './quest-type';

/**
 * 
 * @export
 * @interface QuestCreateInput
 */
export interface QuestCreateInput {
    /**
     * 
     * @type {QuestType}
     * @memberof QuestCreateInput
     */
    'type': QuestType;
    /**
     * 
     * @type {string}
     * @memberof QuestCreateInput
     */
    'description': string;
    /**
     * 
     * @type {string}
     * @memberof QuestCreateInput
     */
    'title': string;
}



