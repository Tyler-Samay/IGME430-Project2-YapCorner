const controllers = require('./controllers');

const router = (app) => {
    app.get('/', controllers.index);
    app.post('/signup', controllers.signup);
    app.post('/login', controllers.login);
    app.get('/logout', controllers.logout);
    app.post('/createPost', controllers.createPost);
    app.get('/getPosts', controllers.getPosts);
    app.get('*', controllers.notFound);

}

module.exports = router;