import { mount } from '@vue/test-utils'
import RestaurantCard from '../../src/components/RestaurantCard'
import RestaurantCardList from '../../src/components/RestaurantCardList'

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

  it('should render kategorie data', () => {
    // when
    const wrapper = mount(RestaurantCard, {
      propsData: {
        restaurant: {
          id: 1,
          name: 'Mr.Wu',
          adresse: 'Waldhofweg',
          hausnummer: '78',
          kategorie: {
            id: 2,
            kategorienName: 'Asiatisch',
            kategorienBeschreibung: 'Das hier ist die asiatische Kategorie',
            restaurants: [1]
          }
        }
      }
    })
    // then
    const cardBody = wrapper.find('.card-text')
    expect(cardBody.text()).toBe('Mr.Wu ist ein Restaurant in Berlin. Es befindet sich in der folgenden Straße: Waldhofweg in der Hausnummer 78.  Es gehört zur Kategorie Asiatisch')
  })
})
