import { queryParams, type QueryParams } from './../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Categories\Pages\ListCategories::index
* @see app/Filament/Resources/Categories/Pages/ListCategories.php:7
* @route '/admin/categories'
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
    url: '/admin/categories',
}

/**
* @see \App\Filament\Resources\Categories\Pages\ListCategories::index
* @see app/Filament/Resources/Categories/Pages/ListCategories.php:7
* @route '/admin/categories'
*/
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Categories\Pages\ListCategories::index
* @see app/Filament/Resources/Categories/Pages/ListCategories.php:7
* @route '/admin/categories'
*/
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Categories\Pages\ListCategories::index
* @see app/Filament/Resources/Categories/Pages/ListCategories.php:7
* @route '/admin/categories'
*/
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Categories\Pages\CreateCategory::create
* @see app/Filament/Resources/Categories/Pages/CreateCategory.php:7
* @route '/admin/categories/create'
*/
export const create = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ['get','head'],
    url: '/admin/categories/create',
}

/**
* @see \App\Filament\Resources\Categories\Pages\CreateCategory::create
* @see app/Filament/Resources/Categories/Pages/CreateCategory.php:7
* @route '/admin/categories/create'
*/
create.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Categories\Pages\CreateCategory::create
* @see app/Filament/Resources/Categories/Pages/CreateCategory.php:7
* @route '/admin/categories/create'
*/
create.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Categories\Pages\CreateCategory::create
* @see app/Filament/Resources/Categories/Pages/CreateCategory.php:7
* @route '/admin/categories/create'
*/
create.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Categories\Pages\EditCategory::edit
* @see app/Filament/Resources/Categories/Pages/EditCategory.php:7
* @route '/admin/categories/{record}/edit'
*/
export const edit = (args: { record: string | number } | [record: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '/admin/categories/{record}/edit',
}

/**
* @see \App\Filament\Resources\Categories\Pages\EditCategory::edit
* @see app/Filament/Resources/Categories/Pages/EditCategory.php:7
* @route '/admin/categories/{record}/edit'
*/
edit.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    const parsedArgs = {
        record: args.record,
    }

    return edit.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Categories\Pages\EditCategory::edit
* @see app/Filament/Resources/Categories/Pages/EditCategory.php:7
* @route '/admin/categories/{record}/edit'
*/
edit.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Categories\Pages\EditCategory::edit
* @see app/Filament/Resources/Categories/Pages/EditCategory.php:7
* @route '/admin/categories/{record}/edit'
*/
edit.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(args, options),
    method: 'head',
})

const categories = {
    index,
    create,
    edit,
}

export default categories