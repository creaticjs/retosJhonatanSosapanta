const controllerUser = require('../controllers/users');

module.exports = (app) => {
    app.get('/userslistarget', controllerUser.userslistarget);
    app.post('/userslistarpost', controllerUser.userslistarpost);
    app.post('/userscrearpost', controllerUser.userscrearpost);
}