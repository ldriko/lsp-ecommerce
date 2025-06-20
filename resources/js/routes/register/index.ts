import { queryParams, type QueryParams } from './../../wayfinder'
/**
* @see \App\Http\Controllers\AuthController::post
* @see app/Http/Controllers/AuthController.php:20
* @route '/register'
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
    url: '/register',
}

/**
* @see \App\Http\Controllers\AuthController::post
* @see app/Http/Controllers/AuthController.php:20
* @route '/register'
*/
post.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return post.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::post
* @see app/Http/Controllers/AuthController.php:20
* @route '/register'
*/
post.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: post.url(options),
    method: 'post',
})

const register = {
    post,
}

export default register