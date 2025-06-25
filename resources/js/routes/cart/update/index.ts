import { queryParams, type QueryParams } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\CartController::single
* @see app/Http/Controllers/CartController.php:53
* @route '/cart/single'
*/
export const single = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: single.url(options),
    method: 'put',
})

single.definition = {
    methods: ['put'],
    url: '/cart/single',
}

/**
* @see \App\Http\Controllers\CartController::single
* @see app/Http/Controllers/CartController.php:53
* @route '/cart/single'
*/
single.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return single.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CartController::single
* @see app/Http/Controllers/CartController.php:53
* @route '/cart/single'
*/
single.put = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: single.url(options),
    method: 'put',
})

const update = {
    single,
}

export default update