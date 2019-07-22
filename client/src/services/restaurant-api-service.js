import config from '../config'

const RestaurantApiService = {
  getRestaurants() {
    return fetch(`${config.API_ENDPOINT}/restaurants`, {
      headers: {'authorization': `bearer ${TokenService.getAuthToken()}`,
    
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getRestaurant(restaurantId) {
    return fetch(`${config.API_ENDPOINT}/restaurants/${restaurantId}`, {
      headers: {'authorization': `bearer ${TokenService.getAuthToken()}`,
    
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
 
  postComment(restaurantId, text) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
       
      },
      body: JSON.stringify({
        restaurant_id: restaurantId,
        text,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default RestaurantApiService
