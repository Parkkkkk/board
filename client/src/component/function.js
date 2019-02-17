import axios from 'axios'

export const User_login = user => {
    return (axios('auth/login', {
        method : 'POST',
        headers : { 'Content-Type' : 'application/json'},
        data : JSON.stringify(user)
    }))
    .then(res => {
        if(res.data.code === 400) {
            console.log(res.data.message);
        } else {
            localStorage.setItem('useremail', res.data.email)
            localStorage.setItem('nick' , res.data.nick)
            console.log(`${res.data.nick}님 환영합니다.`)
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
    return (axios('post/', {
        method : 'POST',
        data : post_info
    })
    .then(res => console.log(res))
)
}

export const Put_post = (data) => {
    return (axios(`/post/${data.id}` , {
        method : 'PUT',
        data : data
    })
    .then(res => console.log(res))
)}

export const select_post = (id) => {
    return (axios.get(`/post/${id}`))}

export const View_post = () => {
    return (axios.get('post/postlist'))}

export const Delete_post = (id) => {
    return (axios.delete(`/post/${id}`).then(res => console.log(res)))
}
