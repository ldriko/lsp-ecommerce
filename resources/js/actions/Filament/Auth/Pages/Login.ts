import { queryParams, type QueryParams } from './../../../../wayfinder'
/**
* @see \Filament\Auth\Pages\Login::__invoke
* @see vendor/filament/filament/src/Auth/Pages/Login.php:7
* @route '/admin/login'
*/
const Login = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: Login.url(options),
    method: 'get',
})

Login.definition = {
    methods: ['get','head'],
    url: '/admin/login',
}

/**
* @see \Filament\Auth\Pages\Login::__invoke
* @see vendor/filament/filament/src/Auth/Pages/Login.php:7
* @route '/admin/login'
*/
Login.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return Login.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\Login::__invoke
* @see vendor/filament/filament/src/Auth/Pages/Login.php:7
* @route '/admin/login'
*/
Login.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: Login.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\Login::__invoke
* @see vendor/filament/filament/src/Auth/Pages/Login.php:7
* @route '/admin/login'
*/
Login.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: Login.url(options),
    method: 'head',
})

export default Login