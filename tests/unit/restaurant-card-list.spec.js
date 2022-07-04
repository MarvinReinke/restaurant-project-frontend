import { mount } from '@vue/test-utils'
import RestaurantCardList from '../../src/components/RestaurantCardList'
import RestaurantCard from '../../src/components/RestaurantCard'

describe('Testing RestaurantCardList.vue', () => {
  it('should render a restaurant card for each restaurant', () => {
    // when
    const wrapper = mount(RestaurantCardList, {
      propsData: {
        restaurants: [
          {
            id: 1,
            name: 'Mr.Wu',
            adresse: 'Waldhofweg',
            hausnummer: '78',
            kategorie: []
          },
          {
            id: 2,
            name: 'Marios Pizzeria',
            adresse: 'Stubenrauchstraße',
            hausnummer: '23',
            kategorie: []
          }
        ]
      }
    })
    // then
    const restaurantCards = wrapper.findAllComponents(RestaurantCard)
    expect(restaurantCards.length).toBe(2)
  })
})
