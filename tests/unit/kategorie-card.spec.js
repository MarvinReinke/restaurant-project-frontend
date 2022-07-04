import KategorieCard from '../../src/components/KategorieCard'
import { mount } from '@vue/test-utils'
import KategorieCardList from '../../src/components/KategorieCardList'

describe('testing KategorieCard.vue', () => {
  it('should render name and kategorie-reference-number', function () {
    // when
    const wrapper = mount(KategorieCard, {
      propsData: {
        kategorie: {
          id: 2,
          kategorienName: 'Asiatisch',
          kategorienBeschreibung: 'Dies ist eine asiatische Beschreibung',
          restaurants: []
        }
      }
    })
    // then
    const cardTitle = wrapper.find('.card-title')
    expect(cardTitle.text()).toBe('Asiatisch, Kategorie-Referenz-Nummer: 2')
  })

  it('should render a card for ever kategorie',  () => {
    // when
    const wrapper = mount(KategorieCardList, {
      propsData: {
        kategorien: [
          {
            id: 1,
            kategorienName: 'Asiatisch',
            kategorienBeschreibung: 'Dies ist eine asiatische Beschreibung',
            restaurants: []
          },
          {
            id: 2,
            kategorienName: 'Indisch',
            kategorienBeschreibung: 'Dies ist eine indische Beschreibung',
            restaurants: []
          }
        ]
      }
    })
    // then
    const kategorieCards = wrapper.findAllComponents(KategorieCard)
    expect(kategorieCards.length).toBe(2)
  })
})
