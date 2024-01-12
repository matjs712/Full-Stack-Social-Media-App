export default {  //save schema hace referencia a guardar un post, el campo postedBy es el post y el userId el usuario
    name: 'save',
    type: 'document',
    title: 'Save',
    fields: [
        {
            name: 'postedBy',
            type: 'postedBy',
            title: 'PostedBy'
        },
        {
            name: 'userId',
            type: 'string',
            title: 'UserId'
        }
    ] 
}