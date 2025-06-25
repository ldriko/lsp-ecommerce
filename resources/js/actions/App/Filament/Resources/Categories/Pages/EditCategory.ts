import { queryParams, type QueryParams } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Categories\Pages\EditCategory::__invoke
* @see app/Filament/Resources/Categories/Pages/EditCategory.php:7
* @route '/admin/categories/{record}/edit'
*/
const EditCategory = (args: { record: string | number } | [record: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: EditCategory.url(args, options),
    method: 'get',
})

EditCategory.definition = {
    methods: ['get','head'],
    url: '/admin/categories/{record}/edit',
}

/**
* @see \App\Filament\Resources\Categories\Pages\EditCategory::__invoke
* @see app/Filament/Resources/Categories/Pages/EditCategory.php:7
* @route '/admin/categories/{record}/edit'
*/
EditCategory.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return EditCategory.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Categories\Pages\EditCategory::__invoke
* @see app/Filament/Resources/Categories/Pages/EditCategory.php:7
* @route '/admin/categories/{record}/edit'
*/
EditCategory.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: EditCategory.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Categories\Pages\EditCategory::__invoke
* @see app/Filament/Resources/Categories/Pages/EditCategory.php:7
* @route '/admin/categories/{record}/edit'
*/
EditCategory.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: EditCategory.url(args, options),
    method: 'head',
})

export default EditCategory