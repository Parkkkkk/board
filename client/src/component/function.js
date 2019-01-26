import axios from 'axios'

export const User_login = user => {
    return (axios('auth/login', {
        method : 'POST',
        headers : { 'Content-Type' : 'application/json'},
        data : JSON.stringify(user)
    }))
    .then(res => {
        if(res.data.code === 400) {
            alert(res.data.message);
        } else {
            alert(`${res.data.nick}님 환영합니다.`)
        }
    })

}

export const User_join = user_info => {
    return (axios('auth/join', {
        method : 'POST',
        headers : { 'Content-Type' : 'application/json'},
        data : JSON.stringify(user_info)
    }))
    .then(res => console.log(res))
}

export const Create_post = post_info => {
    return (axios('user/post', {
        method : 'POST',
        data : post_info
    })
    .then(res => console.log(res))
)
}

export const Delete_post = () => {
    return (axios('user/:id'))
}

export const Click_list = () => {
    return (axios('user/postlist'))
}

export const Veiew_post = () => {
    return (axios('user/'))
}