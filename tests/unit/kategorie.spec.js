import { mount } from '@vue/test-utils'
import Kategorien from '../../src/views/Kategorien'
import KategorieCardList from '../../src/components/KategorieCardList'
import KategorieCreateForm from '../../src/components/KategorieCreateForm'

describe('Testing Kategorie.vue', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(Kategorien)
    // then
    expect(wrapper.text()).toMatch('Hier findest du alle Kategorien')
  })
  it('should have kategorie cards list component', () => {
    // when
    const wrapper = mount(Kategorien)
    // then
    const cardList = wrapper.findComponent(KategorieCardList)
    expect(cardList.exists()).toBeTruthy()
  })
  it('should have kategorie create form component', () => {
    // when
    const wrapper = mount(Kategorien)
    // then
    const createForm = wrapper.findComponent(KategorieCreateForm)
    expect(createForm.exists()).toBeTruthy()
  })
})
