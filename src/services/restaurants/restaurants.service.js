import { mocks, mockImages } from './mock/index';
import camelize from 'camelize';

export const restaurantsRequest = (location = '37.7749295,-122.4194155') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject('Not found');
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * mockImages.length - 1)];
    });
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED TEMPORARILY',
      address: restaurant.vicinity.split(',')[0],
    };
  });
  return camelize(mappedResults);
};

restaurantsRequest()
  .then(restaurantsTransform)
  .then((transformedResponse) => {
    console.log(1);
  })
  .catch((err) => {
    console.log('error');
  });
