// User schema, contiene la estructura para registrar usuarios 

export default {
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
        {
            name: 'userName',
            type: 'string',
            title: 'Username'
        },
        {
            name: 'image',
            type: 'string',
            title: 'Image'
        },
    ]
}