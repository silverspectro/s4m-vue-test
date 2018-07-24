import {DebounceHelper} from '../../helpers/debounce';
import {StringHelper} from '../../helpers/string';

export default {
    name: 'Multiselect',
    props: {
        source: {type: Array},
        options: {type: Object},
        model: {type: Array},
    },
    methods: {
        search(e) {
            //debounceable au besoin
            this.list = this.source.filter((line) => {
                const name = StringHelper.latinize(line.name).toLowerCase();
                const username = StringHelper.latinize(line.username).toLowerCase();
                const newNeedle = StringHelper.latinize(this.searchContent).toLowerCase();

                return !!~name.indexOf(newNeedle) || !!~username.indexOf(newNeedle);
            });
        },
        selectTag(value) {
            this.model.push(value);
            this.$emit('select', value);
        },
        removeTag(key) {
            this.$emit('remove', this.model[key]);
            this.model.splice(key, 1);
        },
        addFirstElement() {
            this.selectTag(this.filteredList[0]);
        },
        open() {
            this.isOpen = true;
            this.$emit('open');
        },
        close(e) {
            this.searchContent = '';
            this.isOpen = false;
            this.$emit('close');
        },
    },
    directives: {
        clickOut: {
            bind(el, binding) {
                if (typeof binding.value !== 'function') {
                    console.warn('Expression must be a function');
                }

                const bubble = binding.modifiers.bubble;
                const handler = (e) => {
                    if (bubble || (!el.contains(e.target) && el !== e.target)) {
                        binding.value(e);
                    }
                };
                el.__vueClickOut__ = handler;
                document.addEventListener('click', handler);
            },

            unbind(el) {
                document.removeEventListener('click', el.__vueClickOut__);
                el.__vueClickOut__ = null;
            },
        },
    },
    computed: {
        filteredList() {
            if (this.list) {
                return this.list.filter((line) => {
                    for (const val of this.model) {
                        if (val.id === line.id) {
                            return false;
                        }
                    }
                    return true;
                });
            }
            return [];
        },
    },
    watch: {
        source: {
            immediate: true,
            handler(values) {
                this.list = values;
            },
        },
    },
    data() {
        return {
            searchContent: '',
            list: [],
            isOpen: false,
        };
    },
};
