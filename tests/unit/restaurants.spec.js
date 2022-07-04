import { mount } from '@vue/test-utils'
import Restaurants from '../../src/views/Restaurants'
import RestaurantCardList from '../../src/components/RestaurantCardList'
import RestaurantCreateForm from '../../src/components/RestaurantCreateForm'

describe('Testing Restaurants.vue', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(Restaurants)
    // then
    expect(wrapper.text()).toMatch('Hier findest du alle verfügbaren Restaurants an einem Ort')
  })

  it('should have restaurant card list component', () => {
    // when
    const wrapper = mount(Restaurants)
    // then
    const cardList = wrapper.findComponent(RestaurantCardList)
    expect(cardList.exists()).toBeTruthy()
  })

  it('should have restaurants create form component', () => {
    // when
    const wrapper = mount(Restaurants)
    // then
    const createForm = wrapper.findComponent(RestaurantCreateForm)
    expect(createForm.exists()).toBeTruthy()
  })
})
