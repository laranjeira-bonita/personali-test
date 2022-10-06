import Vue from 'vue';
import axios from 'axios';
import router from '../router';
import { ToastPlugin } from 'bootstrap-vue'

Vue.use(ToastPlugin)

const vm = new Vue();

Vue.prototype.$http = axios;
let request = {};
const api = axios.create({
    baseURL: 'http://localhost:3000/',
});

api.interceptors.response.use(
    (response) => {
        if(response.data.status === "ERROR") {
            const error = {
                response: {
                    data: {
                        messages: response.data.messages,
                    }
                }
            }
            toastFailed(error)
            return Promise.reject(response)
        }
        return Promise.resolve(response)
    },
    (error) => {
        if(error.response.status === 401) {
            router.push(`/`)
        } else {
            toastFailed(error)
            return Promise.reject(error)
        }
    }
);

export default api;


