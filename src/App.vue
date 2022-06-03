<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Most Used Worlds</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <HomeTemplate/>
    </v-content>
  </v-app>
</template>

<script>
  import HomeTemplate from './components/HomeTemplate.vue'

export default {
  
  name: "App",

  components: {
    HomeTemplate
  },

  data: () => ({
    //
  }),
};
</script>
