<template>
  寶可夢圖鑑

  {{ pokemoneData.front_default }}
  <!-- <div v-for="PokemoneData."></div> -->
</template>
<script>
export default {
  data() {
    return {
      pokemoneData: [],
    };
  },
  components: {},
  methods: {
    getPokemoneData() {
      this.$http.get(`https://pokeapi.co/api/v2/pokemon/1`).then((res) => {
        console.log(res.data.sprites.front_default);
        this.PokemoneData = res.data.sprites;
      });
    },
  },
  mounted() {
    this.getPokemoneData();
  },
};
</script>
