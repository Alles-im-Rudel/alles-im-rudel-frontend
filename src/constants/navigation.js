export default [
  {
    name: 'Shop',
    href: 'https://www.teamstolz.de/vereinsshop/alles-im-rudel/'
  },
  {
    name: 'Airsoft',
    children: [
      {
        name: 'Über uns',
        route: 'airsoft',
      },
      {
        name: 'Spielergalerie',
        route: 'airsoftPlayers',
      },
      {
        name: 'Guides',
        route: 'airsoftGuides',
      },
    ]
  },
  {
    name: 'Gaming',
    route: 'gaming'
  },
  {
    name: 'Beitritt',
    route: 'join'
  },
];
