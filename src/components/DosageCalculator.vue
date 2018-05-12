<template>
<div>
  <h2>Kalkulator</h2>
  <p v-if="disableInputFields">
    Du må først fylle ut IK og IF verdier før du kan kalkulere dosen.
  </p>
  <p><label>
    Blodsukker:
    <input type="number" v-model.number="bloodsugar" :disabled="disableInputFields">
  </label></p>
  <p><label>
      Karbohydrater:
      <input type="number" v-model.number="carbohydrates" :disabled="disableInputFields">
  </label></p>
  <p>
    Din anbefalte dose: {{ recommendedDose }}
  </p>
</div>
</template>

<script>
  export default {
    name: 'DosageCalculator',
    data() {
      return {
        bloodsugar: null,
        carbohydrates: null
      }
    },
    computed: {
      recommendedDose: function () {
        const result = this.bloodsugar + this.carbohydrates
        return result ? result : 0
      },
      disableInputFields: function () {
        return !(this.$store.state.IKValue && this.$store.state.IFValue)
      }
    }
  }
</script>
