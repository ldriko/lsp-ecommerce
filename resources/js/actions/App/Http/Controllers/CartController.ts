import { queryParams, type QueryParams } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CartController::index
* @see app/Http/Controllers/CartController.php:12
* @route '/cart'
*/
export const index = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ['get','head'],
    url: '/cart',
}

/**
* @see \App\Http\Controllers\CartController::index
* @see app/Http/Controllers/CartController.php:12
* @route '/cart'
*/
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CartController::index
* @see app/Http/Controllers/CartController.php:12
* @route '/cart'
*/
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CartController::index
* @see app/Http/Controllers/CartController.php:12
* @route '/cart'
*/
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CartController::update
* @see app/Http/Controllers/CartController.php:22
* @route '/cart'
*/
export const update = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ['put'],
    url: '/cart',
}

/**
* @see \App\Http\Controllers\CartController::update
* @see app/Http/Controllers/CartController.php:22
* @route '/cart'
*/
update.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CartController::update
* @see app/Http/Controllers/CartController.php:22
* @route '/cart'
*/
update.put = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\CartController::updateSingle
* @see app/Http/Controllers/CartController.php:54
* @route '/cart/single'
*/
export const updateSingle = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: updateSingle.url(options),
    method: 'put',
})

updateSingle.definition = {
    methods: ['put'],
    url: '/cart/single',
}

/**
* @see \App\Http\Controllers\CartController::updateSingle
* @see app/Http/Controllers/CartController.php:54
* @route '/cart/single'
*/
updateSingle.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return updateSingle.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CartController::updateSingle
* @see app/Http/Controllers/CartController.php:54
* @route '/cart/single'
*/
updateSingle.put = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: updateSingle.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\CartController::destroy
* @see app/Http/Controllers/CartController.php:109
* @route '/cart/{product}'
*/
export const destroy = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '/cart/{product}',
}

/**
* @see \App\Http\Controllers\CartController::destroy
* @see app/Http/Controllers/CartController.php:109
* @route '/cart/{product}'
*/
destroy.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { product: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            product: args[0],
        }
    }

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
    }

    return destroy.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CartController::destroy
* @see app/Http/Controllers/CartController.php:109
* @route '/cart/{product}'
*/
destroy.delete = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\CartController::checkout
* @see app/Http/Controllers/CartController.php:74
* @route '/cart/checkout'
*/
export const checkout = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: checkout.url(options),
    method: 'post',
})

checkout.definition = {
    methods: ['post'],
    url: '/cart/checkout',
}

/**
* @see \App\Http\Controllers\CartController::checkout
* @see app/Http/Controllers/CartController.php:74
* @route '/cart/checkout'
*/
checkout.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return checkout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CartController::checkout
* @see app/Http/Controllers/CartController.php:74
* @route '/cart/checkout'
*/
checkout.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: checkout.url(options),
    method: 'post',
})

const CartController = { index, update, updateSingle, destroy, checkout }

export default CartController