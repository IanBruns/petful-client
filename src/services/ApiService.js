import API_ADDRESS from '../config';

const ApiService = {
    getAllPets() {
        return fetch(`${API_ADDRESS}/pets`)
            .then((response) => {
                if (!response.ok) {
                    return response.json().then((event) => Promise.reject(event));
                } else {
                    return response.json();
                }
            })
            .catch((error) => console.error(error));
    },
    getPeople() {
        return fetch(`${API_ADDRESS}/people`)
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