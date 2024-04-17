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
            location: doc.details.location,
            expensestotal: doc.results.expensestotal,
            expensespaid: doc.results.expensespaid,
            expensesunpaid: doc.results.expensesunpaid,
            gueststotal: doc.results.gueststotal,
            guestsconfirmed: doc.results.guestsconfirmed,
            guestsdeclined: doc.results.guestsdeclined,
            guestsawaiting: doc.results.guestsawaiting
        }        
    },
    async updateDetails(details) {
        let user = Auth.getUser()

        let response = await Service.patch(`/${user.username}`, {
            details: {
                gname: details.gname,
                bname: details.bname,
                date: details.date,
                time: details.time,
                location: details.location
            }
        })
        console.log("Details updated: ", response.data)

        return true
        

    }
}

let Expenses = {
    async addExpense(expense) {
        let user = Auth.getUser()

        let response = await Service.patch(`/${user.username}/expenses`, {
            title: expense.title,
            price: expense.price,
            paid: false
        })
        console.log("added: ", response.data)
    },

    async fetchExpenses() {
        let user = Auth.getUser()

        let response = await Service.get(`/${user.username}/expenses`)
        let doc = response.data
        console.log(doc)

        let data = doc.map(element => {
            return {
                title: element.data.title,
                price: element.data.price,
                paid: element.data.paid
            }
        })
        console.log(data)
        return data
     
    },
    async deleteExpense(title) {
        let user = Auth.getUser()

        let response = await Service.patch(`/${user.username}/expenses/${title}`)
        console.log("deleted: ", response.data)
    },
    async calculateExpenses(expenses) {
        let user = Auth.getUser()
        let expensestotal = 0

        for (var expense of expenses) {
        
            expensestotal += expense.price
            console.log(expensestotal)
        }

        let response = await Service.patch(`/${user.username}`, {
            "results.expensestotal": expensestotal,
        })
        console.log("Expenses calculated: ", response.data)

        return true
    }
}

let Guests = {
    async addGuest(guest) {
        let user = Auth.getUser()

        let response = await Service.patch(`/${user.username}/guests`, {
            name: guest.name
        })
        console.log("added: ", response.data)
    },

    async fetchGuests() {
        let user = Auth.getUser()

        let response = await Service.get(`/${user.username}/guests`)
        let doc = response.data
        console.log(doc)

        let data = doc.map(element => {
            return {
                name: element.data.name
            }
        })
        console.log(data)
        return data
     
    },
    async deleteGuest(name) {
        let user = Auth.getUser()

        let response = await Service.patch(`/${user.username}/guests/${name}`)
        console.log("deleted: ", response.data)
    },
    async calculateGuests(guests) {
        let user = Auth.getUser()
        let gueststotal = guests.length

        console.log(gueststotal)

        let response = await Service.patch(`/${user.username}`, {
            "results.gueststotal": gueststotal,
          
        })
        console.log("Guests calculated: ", response.data)

        return true
    }
}

export { Service, Auth, Details, Expenses, Guests }