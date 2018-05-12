<template>
<div>
  <h2>Brukerinfo</h2>
    <p>Verdiene lagres automatisk når du skriver inn.</p>
    <p><label>
      IK:
      <input type="number" step="0.1" @change="changeListener" v-model="IKValue">
    </label></p>
    <p><label>
      IF:
      <input type="number" step="0.1" @change="changeListener" v-model="IFValue">
    </label></p>
  </form>
</div>
</template>

<script>
  export default {
    name: 'UserSettings',
    data () {
      const { IKValue, IFValue } = this.$store.state
      return { IKValue, IFValue }
    },
    methods: {
      changeListener: function () {
        const { IKValue, IFValue } = this
        console.log('Handle submit was called');
        this.$store.commit('updateIKAndIFValues', { IKValue, IFValue })
      }
    }
  }
</script>
