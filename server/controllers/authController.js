const bcrypt = require('bcryptjs')

module.exports = {
    register: async(req, res) => {
        const {username, email, password} = req.body
        const db = req.app.get('db')

        const [foundUser] = await db.user.check_user({email})
        if(foundUser){
            return res.status(400).send('Email already registered')
        }

        let salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const [newUser] = await db.user.register_user({username, email, hash})

        req.session.user = newUser
        res.status(201).send(req.session.user)
    },
    login: async(req, res) => {
        const {email, password} = req.body
        const db = req.app.get('db')

        const [foundUser] = await db.user.check_user({email})
        if (!foundUser){
            return res.status(400).send('Email not registered')
        }

        const authenticated = bcrypt.compareSync(password, foundUser.password)
        if(!authenticated){
            return res.status(401).send('Incorrect password')
        }

        delete foundUser.password
        req.session.users = foundUser
        res.status(202).send(req.session.user)
    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }
}