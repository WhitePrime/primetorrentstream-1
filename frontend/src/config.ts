import { Configuration } from './helpers/client'

export const apiDomain = (() => {
    if (process.env.NODE_ENV === 'production') {
        return `${window.location.protocol}//${window.location.host}`
    }
    if (window.location.host.includes('gitpod')) {
        return `${window.location.protocol}//${[
            3000,
            ...window.location.host.split('-').slice(1),
        ].join('-')}`
    }
    return 'http://127.0.0.1:3000'
})()

export function getApiConfig(options?: { bearer?: string }): Configuration {
    const { bearer } = options || {}

    return new Configuration({
        basePath: apiDomain,
        accessToken: bearer,
    })
}

export interface State {
    bearerRequired?: boolean
    bearer?: string
}

export const defaultState = {}
