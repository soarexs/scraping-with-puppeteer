const App = require('./app')

const main = () => {
    const app = new App
    app.routes()
    app.listen(5000, 'Server is running!')
}

main()