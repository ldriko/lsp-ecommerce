import { queryParams, type QueryParams } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\OrderController::index
* @see app/Http/Controllers/OrderController.php:14
* @route '/orders'
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
    url: '/orders',
}

/**
* @see \App\Http\Controllers\OrderController::index
* @see app/Http/Controllers/OrderController.php:14
* @route '/orders'
*/
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrderController::index
* @see app/Http/Controllers/OrderController.php:14
* @route '/orders'
*/
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrderController::index
* @see app/Http/Controllers/OrderController.php:14
* @route '/orders'
*/
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OrderController::show
* @see app/Http/Controllers/OrderController.php:24
* @route '/orders/{order}'
*/
export const show = (args: { order: number | { id: number } } | [order: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '/orders/{order}',
}

/**
* @see \App\Http\Controllers\OrderController::show
* @see app/Http/Controllers/OrderController.php:24
* @route '/orders/{order}'
*/
show.url = (args: { order: number | { id: number } } | [order: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { order: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    const parsedArgs = {
        order: typeof args.order === 'object'
        ? args.order.id
        : args.order,
    }

    return show.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrderController::show
* @see app/Http/Controllers/OrderController.php:24
* @route '/orders/{order}'
*/
show.get = (args: { order: number | { id: number } } | [order: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrderController::show
* @see app/Http/Controllers/OrderController.php:24
* @route '/orders/{order}'
*/
show.head = (args: { order: number | { id: number } } | [order: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OrderController::pdf
* @see app/Http/Controllers/OrderController.php:31
* @route '/orders/{order}/pdf'
*/
export const pdf = (args: { order: number | { id: number } } | [order: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: pdf.url(args, options),
    method: 'get',
})

pdf.definition = {
    methods: ['get','head'],
    url: '/orders/{order}/pdf',
}

/**
* @see \App\Http\Controllers\OrderController::pdf
* @see app/Http/Controllers/OrderController.php:31
* @route '/orders/{order}/pdf'
*/
pdf.url = (args: { order: number | { id: number } } | [order: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { order: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    const parsedArgs = {
        order: typeof args.order === 'object'
        ? args.order.id
        : args.order,
    }

    return pdf.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrderController::pdf
* @see app/Http/Controllers/OrderController.php:31
* @route '/orders/{order}/pdf'
*/
pdf.get = (args: { order: number | { id: number } } | [order: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: pdf.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrderController::pdf
* @see app/Http/Controllers/OrderController.php:31
* @route '/orders/{order}/pdf'
*/
pdf.head = (args: { order: number | { id: number } } | [order: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: pdf.url(args, options),
    method: 'head',
})

const OrderController = { index, show, pdf }

export default OrderController