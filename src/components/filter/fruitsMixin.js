export const fruitsMixin = {
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      filterText: '',
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(element => {
        return element.toLowerCase().includes(this.filterText);
      });
    },
  },
};
