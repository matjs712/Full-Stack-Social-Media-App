export default { // comment schema hace referencia a comentarios en un determinado post.
    name: 'comment',
    type: 'document',
    title: 'Comment',
    fields: [
        {
            name: 'postedBy',
            type: 'postedBy',
            title: 'PostedBy'
        },
        {
            name: 'comment',
            type: 'string',
            title: 'Comment'
        }
    ] 
}