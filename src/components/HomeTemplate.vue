<template>
  <v-container fluid>
    <v-form>
      <v-file-input label="Selecione as legendas"
      prepend-icon="mdi-message-text"
      append-outer-icon="mdi-send"
      outlined
      multiple chips v-model="files"
      @click:append-outer="processSubtitle"/>

    </v-form>
    <div class="pills">
      <PillTemplate v-for="word in groupedWords" v-bind:key="word.name"
      :name="word.name" :amount="word.amount"/>
    </div>
  </v-container>
</template>

<script>
import PillTemplate from './PillTemplate.vue'
import { ipcRenderer } from "electron";

export default {
  components: {PillTemplate},

  data: function() {
    return {
      files: [],
      groupedWords: [
        {name: 'i', amount: 1234},
        {name: 'you', amount: 900},
        {name: 'he', amount: 853},
      ]
    }
  },
  methods: {
    processSubtitle() {
      console.log(this.files)

      ipcRenderer.send('canal', 'teste')
      ipcRenderer.on('canal', (evento, resposta) => {
        console.log(resposta)
      })
    }
  }
}
</script>

<style>
.pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>