// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Faggenza',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: 'Buongiorno!',
  greetingAfternoon: 'Buonasera,',
  greetingEvening: 'Buonasera,',
  greetingNight: 'Vai a Dormire!',

  // Weather
  weatherKey: 'a31ac7884a367272892e6061ccf244ea',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'it', // More languages in https://openweathermap.org/current#multi

  trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
  //Bari
  defaultLatitude: '41.687310',
  defaultLongitude: '16.872110',
  //Torremaggiore
  //defaultLatitude: '15.292660',
  //defaultLongitude: '15.292660',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://youtube.com/',
    },
    {
      id: '2',
      name: 'G-Mail',
      icon: 'mail',
      link: 'https://mail.google.com/mail/',
    },
    {
      id: '3',
      name: 'Amazon',
      icon: 'shopping-cart',
      link: 'https://www.amazon.it/',
    },
    {
      id: '4',
      name: 'CoinmarketCap',
      icon: 'trending-up',
      link: 'https://coinmarketcap.com/',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'bookmark',
      link: 'https://reddit.com/',
    },
    {
      id: '6',
      name: 'Telegram',
      icon: 'send',
      link: 'https://web.telegram.org/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'home',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'PoliBa (esse3)',
        link: 'https://poliba.esse3.cineca.it/auth/studente/HomePageStudente.do',
      },
      {
        name: 'Office 365',
        link: 'https://www.office.com/?auth=2',
      },
      {
        name: 'Outlook (Uni)',
        link: 'https://outlook.office.com/mail/inbox',
      },
      {
        name: 'PoliBa',
        link: 'https://www.poliba.it/',
      },
    ],
    secondList: [
      {
        name: 'Usage',
        link: 'https://github.com/migueravila/SimpleFox#-usage',
      },
      {
        name: 'Figma',
        link: 'https://figma.com/',
      },
      {
        name: 'Dribbble',
        link: 'https://dribbble.com',
      },
      {
        name: 'Telegram',
        link: 'https://webk.telegram.org',
      },
    ],
  },
};
