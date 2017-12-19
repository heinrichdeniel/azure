module.exports = {
  movieList: [{
    title: "A viszkis",
    length: "127 perc",
    description: "Vagány volt, híres lett. Ő az, akit mindenki ismer, olyasmit mert, amit senki előtte, és aki mindig egy lépéssel a rendőrség előtt járt. És aki minden bankrablása előtt megivott egy pohár viszkit.Ambrus Attila (Szalay Bence) félárván nő fel, zűrös kamaszkort és javítóintézeti éveket hagy maga mögött, amikor Erdélyből kalandos körülmények között Magyarországra szökik. ",
    photo_url: "static/assets/img/viszkis.jpg",
    actors: ['Szalay Bence', 'Móga Piroska', 'Schneider Zoltán', 'Klem Viktor', 'Gazsó György'],
    genre: 'Akció'
  },
  {
    title: "Rossz anyák karácsonya",
    length: "104 perc",
    description: "Az év legvarázslatosabb ünnepén, mikor minden pillanat csupa öröm és boldogság… na, ilyenkor köthetik csak fel igazán a gatyájukat az anyukák: jön a rohangálás az ajándékok után, a dekorálás és a napokon át tartó főzés. Nem is csoda, hogy Amy (Mila Kunis), Kiki (Kristen Bell) és Carla (Kathryn Hahn) ismét fellázad. A túlhajszolt trió megint szembe megy az árral, és magasról tesz a karácsonyi hagyományokra. A szabadelvű anyák ezúttal is a kimenőre hajtanak, a lehető legkevesebb energiából akarják kihozni a leglazább, legbulisabb karácsonyi ünnepet.",
    photo_url: "static/assets/img/rossz-anyak.jpg",
    actors: ['Mila Kunis', 'Kristen Bell', 'Kathryn Hahn', 'Susan Sarandon', 'Christine Baranski', 'Cheryl Hines'],
    genre: 'Vígjáték'
  },{
    title: "Star Wars: Az utolsó Jedik",
    length: "152 perc",
    description: "A Star Wars: Az utolsó Jedikben a Skywalker saga folytatódik. Az ébredő Erő hősei a galaxis legendás alakjaival indulnak nagyívű kalandra, s közben nem csak az Erővel kapcsolatos ősi rejtélyekre találnak választ, hanem megdöbbentő múltbéli titkokra is fényt derítenek.",
    photo_url: "static/assets/img/star-wars.jpg",
    actors: ['Daisy Ridley', 'John Boyega', 'Mark Hamill'],
    genre: 'Fantasy'
  },{
    title: "Szabadulószoba",
    length: "152 perc",
    description: "A hat fős baráti társaság egy játékkal teszteli tudásukat ami végül egy sötét fodulatot vesz.",
    photo_url: "static/assets/img/szabaduloszoba.jpg",
    actors: ['Daisy Ridley', 'John Boyega', 'Mark Hamill'],
    genre: 'Fantasy'
  },{
    title: "Megjött apuci 2",
    length: "90 perc",
    description: "Brad (Will Ferrell) és Dusty (Mark Wahlberg) elérték a lehetetlent: barátok és apatársak lettek. Minden simán megy, amíg Dusty régi motoros, macsó faterja, Kurt (Mel Gibson) és Brad ultraérzékeny és érzelmes apja, Don (John Lithgow) meg nem érkeznek a karácsonyi ünnepekre. Kurtnak feltett szándéka, hogy éket verjen Dusty és Brad közé.Vajon a fiúk össze tudnak-e dolgozni, hogy bebizonyítsák Kurtnak, hogy működik a modern nevelésük, és sikerül összehozniuk a nagy családi karácsonyt?A nagysikerű vígjáték folytatásában az apucik mellé a nagyapucik is betársulnak a mókába.",
    photo_url: "static/assets/img/megjott-apuci.jpg",
    actors: ['Evan Williams', 'Annabelle Stephenson', 'Elisabeth Hower'],
    genre: 'Thriller'
  },{
    title: "Boldog halálnapot!",
    length: "97 perc",
    description: "A Bloomhouse produkciós cég a Whiplash, a Széttörve és a Tűnj el! sikere után egy újabb eredeti és izgalmas filmmel lepi meg a mozinézőket, melyben egy egyetemista lány újra és újra átéli azt a napot, melynek végén brutálisan meggyilkolják. Nincs más hátra, mint hogy megpróbálja kideríteni gyilkosa kilétét, ráadásul pont a születésnapján.",
    photo_url: "static/assets/img/halalnap.jpg",
    actors: ['Jessica Rothe', 'Israel Broussard', 'Charles Aitken', 'Ruby Modine'],
    genre: 'Thriller'
  }],
  reservations: [
    {
      date: new Date(),
      time: "19:00",
      firstname: "Heinrich",
      lastname: "deniel",
      email: "deniel@gmail.com",
      phone: "075862323123",
      movieId: 4
    },
    {
      date: new Date(),
      time: "12:30",
      firstname: "Heinrich",
      lastname: "deniel",
      email: "a",
      phone: "075862323123",
      movieId: 3
    }
  ],
  reservedSeats: [
    { row: 1, column: 6, reservationId: 2 },
    { row: 1, column: 5, reservationId: 2 },
    { row: 4, column: 3, reservationId: 2 },
    { row: 4, column: 4, reservationId: 2 },
    { row: 4, column: 5, reservationId: 2 },
    { row: 4, column: 6, reservationId: 2 },
    { row: 5, column: 3, reservationId: 2 },
    { row: 5, column: 4, reservationId: 2 },
    { row: 5, column: 5, reservationId: 2 },
    { row: 5, column: 6, reservationId: 2 },
    { row: 5, column: 7, reservationId: 2 },
    { row: 5, column: 6, reservationId: 1 },
    { row: 5, column: 7, reservationId: 1 },
  ]
}