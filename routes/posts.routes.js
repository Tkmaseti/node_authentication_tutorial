module.exports = app => {
    const posts = require('../controllers/posts.controllers.js')
    var router = require('express').Router();

    //Create new post
    router.post("/", posts.create)
    //Retrieve all posts
    router.get("/", posts.findAll);
    //Retrieve publishes
    router.get("/publishes", posts.findAllPublished);

    //Retrieve a single by id
    router.get("/:id", posts.findOne);
    //Updating single by id
    // app.put("/:id", posts.findByIdAndUpdarouter

    app.use('/api/posts', router)
}