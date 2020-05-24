export const ADD = (text) => {
    return {
        'type': 'Add'
    }
}
export const TYPE = (text) => {
    return {
        'type': 'type',
        'text': text
    }
}
export const DELETE = (name) => {
    return {
        'type': 'Delete',
        'name': name
    }
}
