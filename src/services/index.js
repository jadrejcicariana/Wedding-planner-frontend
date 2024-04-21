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

        let data = doc.map(element => {
            return {
                title: element.title,
                price: element.price,
                paid: element.paid
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
    async updateExpenses(expenses) {
        let user = Auth.getUser()
        
        let response = await Service.patch(`/${user.username}`, {
            expenses: expenses
        })

        console.log("expenses updated: ", response.data)
    },
    async calculateExpenses(expenses) {
        let user = Auth.getUser()
        let expensestotal = 0
        let expensespaid = 0
        let expensesunpaid = 0

        for (var expense of expenses) {
        
            expensestotal += expense.price

            if (expense.paid) {
                expensespaid += expense.price
            } else {
                expensesunpaid += expense.price
            }
        }

        let response = await Service.patch(`/${user.username}`, {
            "results.expensestotal": expensestotal,
            "results.expensespaid" : expensespaid,
            "results.expensesunpaid": expensesunpaid
        })
        console.log("Expenses calculated: ", response.data)

        return true
    }
}

let Guests = {
    async addGuest(guest) {
        let user = Auth.getUser()

        let response = await Service.patch(`/${user.username}/guests`, {
            name: guest.name,
            confirmed: false,
            declined: false
        })
        console.log("added: ", response.data)
    },
    async fetchGuests() {
        let user = Auth.getUser()

        let response = await Service.get(`/${user.username}/guests`)
        let doc = response.data

        let data = doc.map(element => {
            return {
                name: element.name,
                confirmed: element.confirmed,
                declined: element.declined
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
    async updateGuests(guests) {
        let user = Auth.getUser()
        
        let response = await Service.patch(`/${user.username}`, {
            guests: guests
        })

        console.log("guests updated: ", response.data)
    },
    async calculateGuests(guests) {
        let user = Auth.getUser()
        let gueststotal = guests.length
        let guestsconfirmed = 0
        let guestsdeclined = 0
        let guestsawaiting = 0

        for (var guest of guests) {        
            if (guest.confirmed) {
                guestsconfirmed += 1
            } else if (guest.declined) {
                guestsdeclined += 1
            } else {
                guestsawaiting +=1
            }
        }

        let response = await Service.patch(`/${user.username}`, {
            "results.gueststotal": gueststotal,
            "results.guestsconfirmed" : guestsconfirmed,
            "results.guestsdeclined": guestsdeclined,
            "results.guestsawaiting": guestsawaiting
        })
        console.log("Expenses calculated: ", response.data)

        return true
    }
}

export { Service, Auth, Details, Expenses, Guests }