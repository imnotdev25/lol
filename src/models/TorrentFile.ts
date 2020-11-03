/* tslint:disable */
/* eslint-disable */
/**
 * Torrents Stream Server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../helpers'
/**
 *
 * @export
 * @interface TorrentFile
 */
export interface TorrentFile {
    /**
     *
     * @type {string}
     * @memberof TorrentFile
     */
    name: string
    /**
     *
     * @type {string}
     * @memberof TorrentFile
     */
    path: string
    /**
     *
     * @type {string}
     * @memberof TorrentFile
     */
    type: string
    /**
     *
     * @type {number}
     * @memberof TorrentFile
     */
    length: number
    /**
     *
     * @type {string}
     * @memberof TorrentFile
     */
    stream: string
}

export function TorrentFileFromJSON(json: any): TorrentFile {
    return TorrentFileFromJSONTyped(json, false)
}

export function TorrentFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): TorrentFile {
    if (json === undefined || json === null) {
        return json
    }
    return {
        name: json['name'],
        path: json['path'],
        type: json['type'],
        length: json['length'],
        stream: json['stream'],
    }
}

export function TorrentFileToJSON(value?: TorrentFile | null): any {
    if (value === undefined) {
        return undefined
    }
    if (value === null) {
        return null
    }
    return {
        name: value.name,
        path: value.path,
        type: value.type,
        length: value.length,
        stream: value.stream,
    }
}