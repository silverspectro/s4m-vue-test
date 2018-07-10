import { shallowMount } from '@vue/test-utils';
import Multiselect from '@/components/Multiselect/Multiselect.vue';

describe('Multiselect.vue', () => {
  it('should render a multiselect component', () => {
    const wrapper = shallowMount(Multiselect);
    expect(wrapper).toBeDefined();
  });
});
