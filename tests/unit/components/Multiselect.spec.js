import {shallowMount} from '@vue/test-utils';
import Multiselect from '../../../src/components/Multiselect/Multiselect';
import {FAKE_USERS} from '../../fakeUsers';

describe('Multiselect', () => {
    it('should render a multiselect component', () => {
        const wrapper = shallowMount(Multiselect);
        const input = wrapper.find('.multiselect__input');
        const contentWrapper = wrapper.find('.multiselect__content-wrapper');

        expect(wrapper).toBeDefined();
        expect(input).toBeDefined();
        expect(input.name()).toBe('input');
        expect(contentWrapper).toBeDefined();
        expect(contentWrapper.name()).toBe('div');
    });

    it('test opening', () => {
        const wrapper = shallowMount(Multiselect, {
            propsData: {
                source: FAKE_USERS
            }
        })
        const input = wrapper.find('.multiselect__input');
        const contentWrapper = wrapper.find('.multiselect__content-wrapper');

        input.setValue('Leanne');
        expect(wrapper.emitted().open).toBeTruthy()
    })

});
