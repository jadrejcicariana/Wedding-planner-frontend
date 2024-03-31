import axios from 'axios'

let Service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000
})

let Auth = {
    async register(username, password) {
        let response = await Service.post('/users', {
            username: username,
            password: password
        })
        console.log("registered: ", response.data)

        return true
    },


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
    },
    authenticated () {
        let user = Auth.getUser()
        if (user && user.token) {
            return true
        }
        return false
    },
    state: {
        get authenticated(){
            return Auth.authenticated()
        }
    }
}

let Details = {
    async fetchDetails() {
        let user = Auth.getUser()

        let response = await Service.get(`/${user.username}`)
        let doc = response.data
        console.log(doc)
        return {
            gname: doc.details.gname,
            bname: doc.details.bname,
            date: doc.details.date,
            time: doc.details.time,
            location: doc.details.location
        }        
    }
}

export { Service, Auth, Details }