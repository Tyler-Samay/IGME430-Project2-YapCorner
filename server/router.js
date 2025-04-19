const controllers = require('./controllers');

const router = (app) => {
    app.get('/', controllers.main.index);
    app.post('/signup', controllers.account.signup);
    app.post('/login', controllers.account.login);
    app.get('/logout', controllers.account.logout);
    app.post('/createPost', controllers.post.createPost);
    app.get('/getPosts', controllers.post.getPosts);

    app.get('/', controllers.index);

    app.get('/*', controllers.notFound);

}

module.exports = router;