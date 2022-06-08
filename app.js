let express = require('express')
let path = require('path')
let app = express()
let port = 3000
let dirname = path.join(__dirname)

app.get('/', (req, res) => res.send('Servidor levantado correctamente'))
app.get('/home', (req, res) => res.sendFile(path.join(__dirname,'views','home.html')))
app.get('/contacto', (req, res) => res.sendFile(path.join(__dirname,'views','contacto.html')))

app.listen(port, () => console.log(`servidor levantado con exito en el puerto http://localhost:${port}\n${dirname}`))