import { queryParams, type QueryParams } from './../../../../wayfinder'
/**
* @see \Filament\Auth\Pages\Login::login
* @see vendor/filament/filament/src/Auth/Pages/Login.php:7
* @route '/admin/login'
*/
export const login = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ['get','head'],
    url: '/admin/login',
}

/**
* @see \Filament\Auth\Pages\Login::login
* @see vendor/filament/filament/src/Auth/Pages/Login.php:7
* @route '/admin/login'
*/
login.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\Login::login
* @see vendor/filament/filament/src/Auth/Pages/Login.php:7
* @route '/admin/login'
*/
login.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\Login::login
* @see vendor/filament/filament/src/Auth/Pages/Login.php:7
* @route '/admin/login'
*/
login.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Http\Controllers\LogoutController::logout
* @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
* @route '/admin/logout'
*/
export const logout = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ['post'],
    url: '/admin/logout',
}

/**
* @see \Filament\Auth\Http\Controllers\LogoutController::logout
* @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
* @route '/admin/logout'
*/
logout.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Http\Controllers\LogoutController::logout
* @see vendor/filament/filament/src/Auth/Http/Controllers/LogoutController.php:10
* @route '/admin/logout'
*/
logout.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: logout.url(options),
    method: 'post',
})

const auth = {
    login,
    logout,
}

export default auth