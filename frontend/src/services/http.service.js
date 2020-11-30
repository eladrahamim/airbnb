import router from '@/router'

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : '//localhost:3000/api/'


import Axios from 'axios';
var axios = Axios.create({
    withCredentials: true
});

export default {
    get(endpoint, data){
        return ajax(endpoint, 'GET', data)
    },
    post(endpoint, data){
<<<<<<< HEAD
        console.log('http service:', data);
=======
        console.log('data line 18',data,endpoint)
>>>>>>> 5b506df5a0948fd643d9a237a0c489c4cfcccc4a
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint, data){
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint, data){
        return ajax(endpoint, 'DELETE', data)
    }
}


async function ajax(endpoint, method='get', data=null) {
    
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data
        })
        console.log(res.data,'RES 39!!')
        return res.data;
    } catch (err) {
        if (err.response.status === 401) {
            router.push('/');
        }
        console.log(`Had issues ${method}ing to server`, err)
        throw err;
    }
}

