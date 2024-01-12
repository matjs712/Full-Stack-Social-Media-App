// pin schema, contiene la estructura que mantiene a cada imagen/post subida 

export default {
    name: 'pin',
    type:'document',
    title:'Pin',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'about',
            type: 'string',
            title: 'About'
        },
        {
            name: 'destination',
            type:'url',
            title: 'Destination'
        },
        {
            name: 'category',
            type:'string',
            title: 'Category'
        },
        {
            name: 'image',
            type:'string',
            title: 'Image',
            options: {
                hotspot: true //para seleccionar que areas pueden ser cortadas y cuales no.
            }
        },
        {
            name: 'userId',
            type:'string',
            title: 'UserId'
        },
        {
            name: 'postedBy',
            type:'postedBy',
            title: 'PostedBy'
        },
        {
            name: 'save',
            type:'array',
            title: 'Save',
            of: [{ type: 'save' }]
        },
        {
            name: 'comments',
            type:'array',
            title: 'Comments',
            of: [{ type: 'comment' }]
        },
    ]
}
