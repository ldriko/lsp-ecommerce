import { queryParams, type QueryParams } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PageController::home
* @see app/Http/Controllers/PageController.php:11
* @route '/'
*/
export const home = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ['get','head'],
    url: '/',
}

/**
* @see \App\Http\Controllers\PageController::home
* @see app/Http/Controllers/PageController.php:11
* @route '/'
*/
home.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::home
* @see app/Http/Controllers/PageController.php:11
* @route '/'
*/
home.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::home
* @see app/Http/Controllers/PageController.php:11
* @route '/'
*/
home.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: home.url(options),
    method: 'head',
})

const PageController = { home }

export default PageController