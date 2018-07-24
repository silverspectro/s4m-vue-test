import {shallowMount,mount} from '@vue/test-utils';
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

    it('should search and return one object', () => {
        const wrapper = shallowMount(Multiselect);
        wrapper.vm.search('lea');
        expect(wrapper.data().list).toEqual([FAKE_USERS[0]]);

    });

    it('should select a tag, modify selected list and emit an event', () => {
        const wrapper = shallowMount(Multiselect);
        wrapper.vm.selectTag(FAKE_USERS[0]);

        expect(wrapper.props().model).toEqual([FAKE_USERS[0]]);
        expect(wrapper.emitted().select[0]).toEqual(FAKE_USERS[0]);
    });
});
