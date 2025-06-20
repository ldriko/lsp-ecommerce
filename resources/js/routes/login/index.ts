import { queryParams, type QueryParams } from './../../wayfinder'
/**
* @see \App\Http\Controllers\AuthController::post
* @see app/Http/Controllers/AuthController.php:49
* @route '/login'
*/
export const post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: post.url(options),
    method: 'post',
})

post.definition = {
    methods: ['post'],
    url: '/login',
}

/**
* @see \App\Http\Controllers\AuthController::post
* @see app/Http/Controllers/AuthController.php:49
* @route '/login'
*/
post.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return post.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::post
* @see app/Http/Controllers/AuthController.php:49
* @route '/login'
*/
post.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: post.url(options),
    method: 'post',
})

const login = {
    post,
}

export default login