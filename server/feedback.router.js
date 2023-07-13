const express = require('express')
const router = express.Router()
const pool = require("./modules/pool");



router.get('/', (req,res) => {
    pool.query("SELECT * FROM feedback;")
    .then(data => {
        res.send(data.rows)
    })
})

router.post('/', (req, res) => {
    let sub = req.body
    console.log(sub)
    pool.query(`INSERT INTO feedback (feeling, understanding, support, comments) 
                VALUES ('${req.body.feeling}', '${req.body.understanding}', '${req.body.support}', '${req.body.comment}');`, 
                (error, results) => {
                    if(error) {
                        console.log(error)
                        res.sendStatus(401)
                    }else{res.sendStatus(201)}
                })

})

router.delete('/:id', (req, res) => {
    let id = req.params.id
    console.log(id)
    pool.query(`DELETE FROM feedback WHERE id='${id}';`)
} )

module.exports = router;