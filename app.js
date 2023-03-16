// Importeer express uit de node_modules map
import express from 'express'

// Maak een nieuwe express app aan
const app = express()

// maak een const voor de API, dit is de BASE URL
const url = 'https://api.buurtcampus-oost.fdnd.nl/api/v1';

// Stel ejs in als template engine en geef de 'views' map door
app.set('view engine', 'ejs')
app.set('views', './views')

// Gebruik de map 'public' voor statische resources
app.use(express.static('public'))

// Maak een route voor de index
app.get('/', async function (request, response) {

  // voeg base url toe met stekjes = stekjes url
  const urlStekjes = url + "/stekjes"

  const data = await fetch(urlStekjes).then(response => response.json());

  // render de pagina maar ook de data van de API door naar view
    response.render('index', data)
})

// Stel het poortnummer in waar express op gaat luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})