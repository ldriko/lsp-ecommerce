import { queryParams, type QueryParams } from './../../../../../wayfinder'
/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
* @route '/admin/logout'
*/
const LogoutController = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: LogoutController.url(options),
    method: 'post',
})

LogoutController.definition = {
    methods: ['post'],
    url: '/admin/logout',
}

/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
* @route '/admin/logout'
*/
LogoutController.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return LogoutController.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Http\Controllers\LogoutController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
* @route '/admin/logout'
*/
LogoutController.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: LogoutController.url(options),
    method: 'post',
})

export default LogoutController