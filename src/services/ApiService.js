import API_ADDRESS from '../config';

const ApiService = {
    getCat() {
        return fetch(`${API_ADDRESS}/cats`)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(e => Promise.reject(e));
                }
                return res.json();
            })
            .then(data => {
                return data;
            })
            .catch((error) => console.error(error));
    },
    getDog() {
        return fetch(`${API_ADDRESS}/dogs`)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(e => Promise.reject(e));
                }
                return res.json();
            })
            .then(data => {
                return data;
            })
            .catch((error) => console.error(error));
    }
}

export default ApiService;