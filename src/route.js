const UserController = require('./controllers/UserController')
const coffeecontroller=require('./controllers/coffeecontroller')

module.exports = (app) => {
    app.post('/user', UserController.create)

    app.post('/login', UserController.ind) //update
    
    app.put('/user/:userId', UserController.put)
    
    app.delete('/user/:userId', UserController.remove)
    
    app.get('/user/:userId', UserController.show)
    
    app.get('/users', UserController.index)




    app.post('/coffee', coffeecontroller.create)

    
    
    app.put('/coffee/:coffeeId', coffeecontroller.put)
    
    app.delete('/coffee/:coffeeId', coffeecontroller.remove)
    
    app.get('/coffee/:coffeeId', coffeecontroller.show)
    
    app.get('/coffee', coffeecontroller.index)
}