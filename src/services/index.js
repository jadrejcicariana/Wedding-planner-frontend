import axios from 'axios'

let Service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000
})

let Auth = {
    async login(username, password){
        let response = await Service.post('/auth', {
            username: username,
            password: password
        })

        let user = response.data
        localStorage.setItem("user", JSON.stringify(user))

        return true

    },

    logout() {
        localStorage.removeItem("user")
    },

    getUser() {
        return JSON.parse(localStorage.getItem("user"))
    }
}


export { Service, Auth }