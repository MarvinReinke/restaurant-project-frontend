import { mount } from '@vue/test-utils'
import RestaurantCard from '../../src/components/RestaurantCard'

describe('Testing RestaurantCard.vue', () => {
  it('should render name and restaurant reference number', () => {
    // when
    const wrapper = mount(RestaurantCard, {
      propsData: {
        restaurant: {
          id: 1,
          name: 'Mr.Wu',
          adresse: 'Waldhofweg',
          hausnummer: '78',
          kategorie: []
        }
      }
    })

    const cardTitle = wrapper.find('.card-title')
    expect(cardTitle.text()).toBe('Mr.Wu, Restaurant-Referenz-Nummer: 1')
  })
})
