const app = angular.module('channelApp', []);

app.controller('ChannelController', function ($scope) {
  $scope.categories = [
    {
      name: 'Entertainment',
      channels: [
        { number: 101, name: 'Discovery Channel', url: 'https://www.discovery.com' },
        { number: 102, name: 'Animal Planet', url: 'https://www.animalplanet.com' },
        { number: 103, name: 'Disney Channel', url: 'https://www.disney.in' },
        { number: 104, name: 'Cartoon Network', url: 'https://www.cartoonnetworkindia.com' },
        { number: 105, name: 'Discovery Kids', url: 'https://www.discoverykidsindia.com' },
        { number: 106, name: 'National Geographic', url: 'https://www.nationalgeographic.com' },
      ],
    },
    {
      name: 'News',
      channels: [
        { number: 201, name: 'BBC World News', url: 'https://www.bbc.com/news' },
        { number: 202, name: 'CNN News 18', url: 'https://www.cnn.com' },
        { number: 203, name: 'NDTV India', url: 'https://www.ndtv.com' },
        { number: 204, name: 'India Today', url: 'https://www.indiatoday.in' },
        { number: 205, name: 'Zee News', url: 'https://zeenews.india.com' },
        { number: 206, name: 'Republic Bharat', url: 'https://www.republicworld.com' },
      ],
    },
    {
      name: 'Sports',
      channels: [
        { number: 301, name: 'Sony Sports Ten 1', url: 'https://www.sonyliv.com' },
        { number: 302, name: 'DD Sports', url: 'https://www.ddsports.gov.in' },
        { number: 303, name: 'Eurosport', url: 'https://www.eurosport.com' },
        { number: 304, name: 'Star Sports', url: 'https://www.starsports.com' },
        { number: 305, name: 'KTV', url: 'https://www.ktv.com' },
      ],
    },
    {
      name: 'Music',
      channels: [
        { number: 401, name: 'B4U Music', url: 'https://www.b4umusic.in' },
        { number: 402, name: 'Zoom', url: 'https://www.zoomtv.in' },
        { number: 403, name: '9X Jalwa', url: 'https://www.9xjalwa.com' },
        { number: 404, name: 'Sun Music', url: 'https://www.sunnetwork.in' },
        { number: 405, name: 'MTV Beats', url: 'https://www.mtvindia.com' },
      ],
    },
    {
      name: 'Kids',
      channels: [
        { number: 501, name: 'Nickelodeon', url: 'https://www.nickindia.com' },
        { number: 502, name: 'Pogo TV', url: 'https://www.pogo.tv' },
        { number: 503, name: 'Disney Junior', url: 'https://www.disneyjunior.disney.in' },
        { number: 504, name: 'BabyTV', url: 'https://www.babytv.com' },
        { number: 505, name: 'Cartoonito', url: 'https://www.cartoonito.com' },
      ],
    },
  ];
});
