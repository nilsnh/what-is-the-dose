<template>
<div>
  <h2>Brukerinfo</h2>
  <form @submit.prevent="handleSubmit">
    <p><label>
      IK:
      <input type="number" v-model.number="IKValue">
    </label></p>
    <p><label>
      IF:
      <input type="number" v-model.number="IFValue">
    </label></p>
    <button type="submit">Lagre</button>
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
      handleSubmit: function () {
        const { IKValue, IFValue } = this
        this.$store.commit('updateIKAndIFValues', { IKValue, IFValue })
      }
    }
  }
</script>
