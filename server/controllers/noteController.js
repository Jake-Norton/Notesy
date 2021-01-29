module.exports = {
    createNote: (req, res) => {
        const {id, noteBody} = req.body
        const db = req.app.get('db')

        db.post.create_note(id, noteBody)
            .then(() => res.sendStatus(200))
            .catch(err => res.status(500).send(err))
    },
    getUserNotes: (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')

        db.post.get_user_notes(id)
            .then(notes => res.status(200).send(notes))
            .catch(err => res.status(500).send(err))
    },
    deleteNote: (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')

        db.post.delete_note(id)
            .then(() => res.sendStatus(200))
            .catch(err => res.status(500).send(err))
    }
}