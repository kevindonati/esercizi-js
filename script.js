/*************************************************
 * FOGLIO UNICO ESERCIZI JS DOM — LIVELLO ALTO
 * Regole:
 * - usa JavaScript vanilla
 * - preferisci querySelector/querySelectorAll
 * - evita innerHTML += quando puoi
 * - usa createElement, appendChild, classList, addEventListener
 * - completa le funzioni senza cambiare i nomi
 *************************************************/

/* =================================================
   ESERCIZIO 1
   Scrivi una funzione updateMainTitle(newTitle) che:
   - selezioni l'h1
   - ne cambi il testo con il valore passato come parametro
   - aggiunga automaticamente la classe "updated-title"
   - se newTitle è una stringa vuota o contiene solo spazi,
     imposti come testo "Titolo non valido"
================================================= */

const updateMainTitle = function (newTitle) {
  const h1 = document.querySelector("h1")
  h1.classList.add("updated-title")
  if (newTitle === "" || newTitle === " ") {
    h1.innerText = "Titolo non valido"
  } else {
    h1.innerText = newTitle
  }
}

/* =================================================
   ESERCIZIO 2
   Scrivi una funzione decorateTitle() che:
   - aggiunga all’h1 le classi "myHeading" e "shadow"
   - se una delle due classi è già presente, non deve duplicarla
   - restituisca un array con tutte le classi finali dell’elemento
================================================= */

const decorateTitle = function () {
  const h1 = document.querySelector("h1")
  if (h1.classList.contains("myHeading")) {
  } else {
    h1.classList.add("myHeading")
  }
  if (h1.classList.contains("shadow")) {
  } else {
    h1.classList.add("shadow")
  }
  return h1.classList
}
/* =================================================
   ESERCIZIO 3
   Scrivi una funzione replaceDivParagraphs(text) che:
   - selezioni solo i paragrafi figli diretti di un div
   - sostituisca il loro contenuto con il testo passato come parametro
   - aggiunga alla fine di ogni paragrafo il numero progressivo:
     "Nuovo testo 1", "Nuovo testo 2", ecc.
================================================= */

const replaceDivParagraphs = function (text) {
  const p = document.querySelectorAll("div > p")
  for (let i = 0; i < p.length; i++) {
    p[i].innerText = text + [i + 1]
  }
}

/* =================================================
   ESERCIZIO 4
   Scrivi una funzione rewriteLinks(url) che:
   - cambi il valore href di tutti i link della pagina
   - escluda qualunque link contenuto nel footer
   - aggiunga target="_blank" e rel="noopener noreferrer"
   - se url non inizia con "http", usi di default
     "https://www.google.com"
================================================= */

const rewriteLinks = function (url) {
  const a = document.querySelectorAll("a:not(footer a)")
  for (let i = 0; i < a.length; i++) {
    const href = a[i].getAttribute("href")
    if (href.startsWith("http")) {
      a[i].setAttribute("href", url)
    } else {
      a[i].setAttribute("href", "https://www.google.com")
    }
    a[i].setAttribute("target", "_blank")
    a[i].setAttribute("rel", "noopener noreferrer")
  }
}

/* =================================================
   ESERCIZIO 5
   Scrivi una funzione appendItemsToSecondList(items) che:
   - riceva un array di stringhe
   - aggiunga tutti gli elementi come nuovi li alla lista con id "secondList"
   - assegni a ogni nuovo li un attributo data-index
   - non aggiunga duplicati se un elemento con lo stesso testo
     è già presente nella lista
================================================= */

const appendItemsToSecondList = function (items) {
  const secondaLista = document.querySelectorAll("#secondList > li")
  for (let i = 0; i < secondaLista.length; i++) {
    if (items[i] !== secondaLista[i]) {
      secondaLista[i].innerHTML = items[i]
    }
    secondaLista[i].setAttribute("data-index", [i])
  }
}

/* =================================================
   ESERCIZIO 6
   Scrivi una funzione insertParagraphInFirstDiv(text, className) che:
   - crei un nuovo paragrafo
   - lo inserisca nel primo div
   - imposti il testo ricevuto come parametro
   - aggiunga una classe ricevuta come secondo parametro
   - se la classe non viene passata, usi "generated-paragraph"
================================================= */

const insertParagraphInFirstDiv = function (text, className) {
  const p = document.createElement("p")
  const div = document.querySelector("div")
  div.appendChild(p)
  p.innerText = text
  p.classList.add(className)
  if (p.classList.contains(className) === false) {
    p.classList.add("generated-paragraph")
  }
}

/* =================================================
   ESERCIZIO 7
   Scrivi una funzione toggleFirstList() che:
   - non rimuova la prima ul
   - la faccia scomparire e riapparire a ogni esecuzione
   - usi una classe CSS "hidden" invece di .remove()
   - restituisca true se la lista è visibile, false se è nascosta
================================================= */

const toggleFirstList = function () {
  const primaUl = document.querySelector("ul")
  if (primaUl.classList.contains("hidden")) {
    primaUl.classList.remove("hidden")
    return true
  } else {
    primaUl.classList.add("hidden")
    return false
  }
}

/* =================================================
   ESERCIZIO 8
   Scrivi una funzione paintLists(color) che:
   - renda del colore scelto il background di tutte le ul
   - se color non è valido o manca, usi "green"
   - aggiunga anche padding e border-radius via JavaScript
   - salvi il colore applicato in un attributo data-bg
================================================= */

const paintLists = function (color) {
  // scrivi qui
}

/* =================================================
   ESERCIZIO 9
   Scrivi una funzione makeTitleErasable() che:
   - renda cliccabile l’h1
   - a ogni click rimuova l’ultima lettera del testo
   - quando il testo arriva a una sola lettera, al click successivo
     diventi "Titolo finito"
   - dopo che è diventato "Titolo finito", un altro click
     lo riporti al titolo originale
================================================= */

const makeTitleErasable = function () {
  // scrivi qui
}

/* =================================================
   ESERCIZIO 10
   Scrivi una funzione revealFooterLink() che:
   - al click sul footer mostri in un alert() l’URL reale del link interno
   - non mostri l’oggetto HTML del link
   - se nel footer non c’è nessun link, mostri "Nessun link trovato"
================================================= */

const revealFooterLink = function () {
  // scrivi qui
}

/* =================================================
   ESERCIZIO 11
   Scrivi una funzione generateTable(products) che:
   - crei una tabella dentro l’elemento con id "tableArea"
   - riceva un array di 5 oggetti prodotto
   - ogni prodotto deve avere:
       image, name, quantity, price
   - la tabella deve contenere:
       intestazione + 5 righe dinamiche
   - se una proprietà manca, visualizza "Dato mancante"
================================================= */

const generateTable = function (products) {
  // scrivi qui
}

/* =================================================
   ESERCIZIO 12
   Scrivi una funzione addRow(product) che:
   - aggiunga una riga alla tabella già esistente
   - riceva i dati tramite oggetto
   - controlli che la tabella esista davvero
   - controlli che price e quantity siano numeri validi
   - se non lo sono, non aggiunga nulla e ritorni "Dati non validi"
================================================= */

const addRow = function (product) {
  // scrivi qui
}

/* =================================================
   ESERCIZIO 13
   Scrivi una funzione addDeleteButtonsToTable() che:
   - aggiunga in ogni riga prodotto un bottone "Elimina"
   - al click il bottone rimuova solo la riga corrispondente
   - se rimane soltanto l’intestazione, mostri un messaggio sotto la tabella:
     "Nessun prodotto disponibile"
================================================= */

const addDeleteButtonsToTable = function () {
  // scrivi qui
}

/* =================================================
   ESERCIZIO 14
   Scrivi una funzione toggleTableImages() che:
   - nasconda tutte le immagini della tabella quando viene eseguita
   - se richiamata una seconda volta, le mostri di nuovo
   - non usi remove()
   - aggiorni anche il testo di un bottone con id "toggleImagesBtn" in:
     "Nascondi immagini" / "Mostra immagini"
================================================= */

const toggleTableImages = function () {
  // scrivi qui
}

/* =================================================
   ESERCIZIO 15
   Scrivi una funzione randomizeH2Color() che:
   - selezioni l’h2 con id "changeMyColor"
   - cambi il colore del testo con un valore RGB random a ogni click
   - mostri il colore generato in un piccolo span subito dopo l’h2
   - il contenuto dello span deve essere:
     "Colore attuale: rgb(12, 44, 201)"
================================================= */

const randomizeH2Color = function () {
  // scrivi qui
}

/* =================================================
   ESERCIZIO 16
   Scrivi una funzione highlightExpensiveProducts(limit) che:
   - legga tutte le righe della tabella prodotti
   - evidenzi con una classe "expensive" quelle con prezzo > limit
   - se limit non è passato, usi 100
   - conti quante righe sono state evidenziate e restituisca quel numero
================================================= */

const highlightExpensiveProducts = function (limit) {
  // scrivi qui
}

/* =================================================
   ESERCIZIO 17
   Scrivi una funzione calculateWarehouseValue() che:
   - per ogni riga della tabella calcoli quantità × prezzo
   - sommi il totale complessivo
   - mostri il risultato in un paragrafo con id "totalValue"
   - se il paragrafo non esiste, lo deve creare
================================================= */

const calculateWarehouseValue = function () {
  // scrivi qui
}

/* =================================================
   ESERCIZIO 18
   Scrivi una funzione sortProductsByPrice() che:
   - riordini le righe della tabella dal prezzo più basso al più alto
   - non tocchi la riga di intestazione
   - funzioni anche dopo che hai aggiunto o eliminato prodotti
================================================= */

const sortProductsByPrice = function () {
  // scrivi qui
}

/* =================================================
   ESERCIZIO 19
   Scrivi una funzione filterProducts(searchText) che:
   - mostri solo le righe il cui nome prodotto contiene il testo cercato
   - non faccia distinzione tra maiuscole e minuscole
   - se il campo di ricerca è vuoto, faccia riapparire tutte le righe
================================================= */

const filterProducts = function (searchText) {
  // scrivi qui
}

/* =================================================
   ESERCIZIO 20
   Scrivi una funzione buildProductForm() che costruisca via JavaScript
   un form con questi campi:
   - nome
   - immagine
   - quantità
   - prezzo
   - bottone submit
   Il form deve essere inserito in un contenitore con id "formArea"
================================================= */

const buildProductForm = function () {
  // scrivi qui
}

/* =================================================
   ESERCIZIO 21
   Scrivi una funzione handleProductForm() che:
   - intercetti il submit del form
   - eviti il refresh della pagina
   - validi i dati inseriti
   - aggiunga il prodotto alla tabella solo se i dati sono corretti
   - svuoti il form dopo l’inserimento
   - mostri un messaggio d’errore se:
     * un campo è vuoto
     * quantità è negativa
     * prezzo non è un numero
================================================= */

const handleProductForm = function () {
  // scrivi qui
}

/* =================================================
   ESERCIZIO 22
   Scrivi una funzione attachRowHoverEffect() che:
   - aggiunga a ogni riga prodotto un effetto hover
   - al passaggio del mouse mostri un bordo speciale
   - quando il mouse esce, il bordo torni normale
   - funzioni anche sulle righe aggiunte dopo
================================================= */

const attachRowHoverEffect = function () {
  // scrivi qui
}

/* =================================================
   ESERCIZIO 23
   Scrivi una funzione saveProductsToLocalStorage() che:
   - prenda tutti i prodotti visibili nella tabella
   - li trasformi in un array di oggetti
   - li salvi in localStorage con chiave "products"
================================================= */

const saveProductsToLocalStorage = function () {
  // scrivi qui
}

/* =================================================
   ESERCIZIO 24
   Scrivi una funzione loadProductsFromLocalStorage() che:
   - recuperi i dati da localStorage
   - ricrei la tabella automaticamente al caricamento della pagina
   - se non ci sono dati salvati, generi la tabella con un array di default
================================================= */

const loadProductsFromLocalStorage = function () {
  // scrivi qui
}

/* =================================================
   ESERCIZIO 25
   Scrivi una funzione createDarkModeToggle() che:
   - crei un bottone per attivare/disattivare la dark mode
   - al click aggiunga o rimuova la classe "dark-mode" al body
   - salvi la preferenza in localStorage
   - ripristini automaticamente la modalità scelta al reload
================================================= */

const createDarkModeToggle = function () {
  // scrivi qui
}

/* =================================================
   ESERCIZIO 26 — BOSS FIGHT
   Realizza una mini app “Gestione prodotti” che includa tutto in una
   singola pagina:
   - titolo modificabile
   - tabella prodotti generata da array
   - form per aggiungere prodotti
   - filtro ricerca per nome
   - ordinamento per prezzo
   - ordinamento per quantità
   - bottone elimina per ogni riga
   - bottone globale mostra/nascondi immagini
   - totale complessivo aggiornato automaticamente
   - evidenziazione prodotti costosi
   - salvataggio in localStorage

   Vincoli:
   - niente librerie
   - niente duplicazione inutile di codice
   - usa funzioni piccole e riutilizzabili
   - ogni evento deve essere gestito con addEventListener
   - il codice deve continuare a funzionare anche dopo modifiche dinamiche
================================================= */

const buildStoreApp = function () {
  // scrivi qui
}

/* =================================================
   ESERCIZIO 27 — EXTRA HARD REFACTOR
   Prendi tutto il codice degli esercizi precedenti e rifattorizzalo:
   - separa logica e manipolazione DOM
   - crea funzioni helper riutilizzabili
   - riduci il codice duplicato
   - rendi il file più leggibile e modulare
================================================= */

// scrivi qui eventuali helper functions

/* =================================================
   AREA TEST / ESECUZIONE
   Decommenta solo quello che ti serve mentre provi gli esercizi
================================================= */

updateMainTitle("Nuovo titolo")
console.log(decorateTitle())
replaceDivParagraphs("Paragrafo aggiornato")
rewriteLinks("https://example.com")
appendItemsToSecondList(["Uno", "Due", "Tre"])
insertParagraphInFirstDiv("Paragrafo creato da JS", "custom-paragraph")
console.log(toggleFirstList())
// paintLists("lightblue")
// makeTitleErasable()
// revealFooterLink()

// const defaultProducts = [
//   { image: "https://picsum.photos/60?1", name: "Mouse", quantity: 3, price: 29 },
//   { image: "https://picsum.photos/60?2", name: "Tastiera", quantity: 5, price: 49 },
//   { image: "https://picsum.photos/60?3", name: "Monitor", quantity: 2, price: 199 },
//   { image: "https://picsum.photos/60?4", name: "Cuffie", quantity: 7, price: 89 },
//   { image: "https://picsum.photos/60?5", name: "Webcam", quantity: 4, price: 119 },
// ]

// generateTable(defaultProducts)
// addRow({ image: "https://picsum.photos/60?6", name: "Microfono", quantity: 2, price: 139 })
// addDeleteButtonsToTable()
// toggleTableImages()
// randomizeH2Color()
// console.log(highlightExpensiveProducts(100))
// calculateWarehouseValue()
// sortProductsByPrice()
// filterProducts("mo")
// buildProductForm()
// handleProductForm()
// attachRowHoverEffect()
// saveProductsToLocalStorage()
// loadProductsFromLocalStorage()
// createDarkModeToggle()
// buildStoreApp()
