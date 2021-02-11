// import axios from "axios"

// export const postsApi = () => {
//     return axios.get('https://jsonplaceholder.typicode.com/posts/1')
// }


import axios from 'axios';

function sendMessage(id, text) {
    const params = { q: text };
    if (id) {
        params.chatId = id;
    }
    const url = 'https://jsonplaceholder.typicode.com/posts/1';

    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url,
        }).then(({ status, data }) => {
            if (status === 200) {
                resolve(data);
            } else {
                reject(new Error('error'));
            }
        });
    });
}

export default {
    sendMessage
};