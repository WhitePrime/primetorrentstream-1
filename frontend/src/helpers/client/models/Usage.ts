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

import { exists, mapValues } from '../runtime'
/**
 *
 * @export
 * @interface Usage
 */
export interface Usage {
    /**
     *
     * @type {number}
     * @memberof Usage
     */
    totalDiskSpace: number
    /**
     *
     * @type {number}
     * @memberof Usage
     */
    freeDiskSpace: number
    /**
     *
     * @type {number}
     * @memberof Usage
     */
    usedTorrentSpace: number
}

export function UsageFromJSON(json: any): Usage {
    return UsageFromJSONTyped(json, false)
}

export function UsageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Usage {
    if (json === undefined || json === null) {
        return json
    }
    return {
        totalDiskSpace: json['totalDiskSpace'],
        freeDiskSpace: json['freeDiskSpace'],
        usedTorrentSpace: json['usedTorrentSpace'],
    }
}

export function UsageToJSON(value?: Usage | null): any {
    if (value === undefined) {
        return undefined
    }
    if (value === null) {
        return null
    }
    return {
        totalDiskSpace: value.totalDiskSpace,
        freeDiskSpace: value.freeDiskSpace,
        usedTorrentSpace: value.usedTorrentSpace,
    }
}
