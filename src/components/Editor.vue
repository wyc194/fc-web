<template>
  <div>
    <mavon-editor
      @save="saveDoc"
      @change="updateDoc"
      ref="editor"
      v-model="doc">
    </mavon-editor>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor"
import "mavon-editor/dist/css/index.css"
export default {
  name: "Editor",
  components: { mavonEditor },
  data() {
    return {
      doc: ""
    }
  },
  methods: {
    saveDoc () {},
    updateDoc () {}
  }
}
</script>

<style scoped>

</style>
