import axios from 'axios'

export const User_login = user => {
    return (axios('auth/login', {
        method : 'POST',
        headers : { 'Content-Type' : 'application/json'},
        data : JSON.stringify(user)
    })
    .then(res => alert(res))
)
}

export const User_join = user_info => {
    return (axios('auth/join', {
        method : 'POST',
        headers : { 'Content-Type' : 'application/json'},
        data : JSON.stringify(user_info)
    })
    .then(res => alert(res))
)
}

export const Create_post = post_info => {
    return (axios('user/post', {
        method : 'POST',
        headers : { 'Content-Type' : 'application/json'},
        data : JSON.stringify(post_info)
    })
    .then(res => alert(res))
)
}

export const Image_upload = image => {
    return (axios('user/img' , {
        method : 'POST',
        headers : {'Content-Type' : 'multipart/form-data'}
    }))
}

export const Delete_post = () => {
    return (axios('user/:id'))
}

export const Click_list = () => {
    return (axios('user/postlist'))
}

export const Veiew_post = () => {
    return (axios('user/p'))
}