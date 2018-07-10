import { shallowMount } from '@vue/test-utils';
import Multiselect from '@/components/Multiselect/Multiselect.vue';

describe('Multiselect.vue', () => {
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
});
