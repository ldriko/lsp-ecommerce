import { queryParams, type QueryParams } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Categories\Pages\ListCategories::__invoke
* @see app/Filament/Resources/Categories/Pages/ListCategories.php:7
* @route '/admin/categories'
*/
const ListCategories = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: ListCategories.url(options),
    method: 'get',
})

ListCategories.definition = {
    methods: ['get','head'],
    url: '/admin/categories',
}

/**
* @see \App\Filament\Resources\Categories\Pages\ListCategories::__invoke
* @see app/Filament/Resources/Categories/Pages/ListCategories.php:7
* @route '/admin/categories'
*/
ListCategories.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return ListCategories.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Categories\Pages\ListCategories::__invoke
* @see app/Filament/Resources/Categories/Pages/ListCategories.php:7
* @route '/admin/categories'
*/
ListCategories.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: ListCategories.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Categories\Pages\ListCategories::__invoke
* @see app/Filament/Resources/Categories/Pages/ListCategories.php:7
* @route '/admin/categories'
*/
ListCategories.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: ListCategories.url(options),
    method: 'head',
})

export default ListCategories