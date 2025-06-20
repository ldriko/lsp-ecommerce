import { queryParams, type QueryParams } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AuthController::showRegister
* @see app/Http/Controllers/AuthController.php:15
* @route '/register'
*/
export const showRegister = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: showRegister.url(options),
    method: 'get',
})

showRegister.definition = {
    methods: ['get','head'],
    url: '/register',
}

/**
* @see \App\Http\Controllers\AuthController::showRegister
* @see app/Http/Controllers/AuthController.php:15
* @route '/register'
*/
showRegister.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return showRegister.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::showRegister
* @see app/Http/Controllers/AuthController.php:15
* @route '/register'
*/
showRegister.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: showRegister.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::showRegister
* @see app/Http/Controllers/AuthController.php:15
* @route '/register'
*/
showRegister.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: showRegister.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:20
* @route '/register'
*/
export const register = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: register.url(options),
    method: 'post',
})

register.definition = {
    methods: ['post'],
    url: '/register',
}

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:20
* @route '/register'
*/
register.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:20
* @route '/register'
*/
register.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: register.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::showLogin
* @see app/Http/Controllers/AuthController.php:10
* @route '/login'
*/
export const showLogin = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: showLogin.url(options),
    method: 'get',
})

showLogin.definition = {
    methods: ['get','head'],
    url: '/login',
}

/**
* @see \App\Http\Controllers\AuthController::showLogin
* @see app/Http/Controllers/AuthController.php:10
* @route '/login'
*/
showLogin.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return showLogin.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::showLogin
* @see app/Http/Controllers/AuthController.php:10
* @route '/login'
*/
showLogin.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: showLogin.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::showLogin
* @see app/Http/Controllers/AuthController.php:10
* @route '/login'
*/
showLogin.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: showLogin.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:39
* @route '/login'
*/
export const login = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ['post'],
    url: '/login',
}

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:39
* @route '/login'
*/
login.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:39
* @route '/login'
*/
login.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: login.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:53
* @route '/logout'
*/
export const logout = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: logout.url(options),
    method: 'get',
})

logout.definition = {
    methods: ['get','head'],
    url: '/logout',
}

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:53
* @route '/logout'
*/
logout.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:53
* @route '/logout'
*/
logout.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: logout.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:53
* @route '/logout'
*/
logout.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: logout.url(options),
    method: 'head',
})

const AuthController = { showRegister, register, showLogin, login, logout }

export default AuthController