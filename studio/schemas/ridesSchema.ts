export const ridesSchema = {
    name: 'rides',
    type: 'document',
    title: 'Rides',
    fields: [
        {
            name: 'orderById',
            title: 'Order By ID',
            type: 'number',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'priceMultiplier',
            title: 'Price Multiplier',
            type: 'number',
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
        }
    ],
}