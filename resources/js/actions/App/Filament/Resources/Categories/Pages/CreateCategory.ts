import { queryParams, type QueryParams } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Categories\Pages\CreateCategory::__invoke
* @see app/Filament/Resources/Categories/Pages/CreateCategory.php:7
* @route '/admin/categories/create'
*/
const CreateCategory = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: CreateCategory.url(options),
    method: 'get',
})

CreateCategory.definition = {
    methods: ['get','head'],
    url: '/admin/categories/create',
}

/**
* @see \App\Filament\Resources\Categories\Pages\CreateCategory::__invoke
* @see app/Filament/Resources/Categories/Pages/CreateCategory.php:7
* @route '/admin/categories/create'
*/
CreateCategory.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return CreateCategory.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Categories\Pages\CreateCategory::__invoke
* @see app/Filament/Resources/Categories/Pages/CreateCategory.php:7
* @route '/admin/categories/create'
*/
CreateCategory.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: CreateCategory.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Categories\Pages\CreateCategory::__invoke
* @see app/Filament/Resources/Categories/Pages/CreateCategory.php:7
* @route '/admin/categories/create'
*/
CreateCategory.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: CreateCategory.url(options),
    method: 'head',
})

export default CreateCategory