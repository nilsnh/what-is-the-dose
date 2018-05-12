<template>
<div>
  <h2>Kalkulator</h2>
  <p v-if="disableInputFields">
    Du må først fylle ut IK og IF verdier før du kan kalkulere dosen.
  </p>
  <p><label>
    Målt blodsukker:
    <input type="number" step="0.1" v-model.number="measuredBloodsugar" :disabled="disableInputFields">
  </label></p>
  <p><label>
    Karbohydrater:
    <input type="number" v-model.number="plannedCarbohydratesIntake" :disabled="disableInputFields">
  </label></p>
  <p>Blodsukkermål: {{ bloodsugarGoal }}</p>
  <p><label>
      Treningsmodus:
      <input type="checkbox" v-model="isTrainingMode">
  </label></p>
  <p><strong>Din anbefalte dose: <span v-if="shouldShowCalculation">{{ roundToNearestHalf(recommendedDose) }}</span></strong></p>
  <p v-if="shouldShowCalculation">Bakgrunnstall: {{ recommendedDose }}</p>
</div>
</template>

<script>
  export default {
    name: 'DosageCalculator',
    data() {
      return {
        measuredBloodsugar: null,
        plannedCarbohydratesIntake: null,
        isTrainingMode: false
      }
    },
    computed: {
      recommendedDose: function () {
        const { IKValue, IFValue } = this.$store.state
        const {measuredBloodsugar, plannedCarbohydratesIntake, bloodsugarGoal} = this
        const result = plannedCarbohydratesIntake / IKValue + (measuredBloodsugar - bloodsugarGoal) / IFValue
        return result ? result : 0
      },
      bloodsugarGoal: function () {
        const defaultBloodSugarGoal = 5
        const trainingBloodsugarGoal = 8
        return this.isTrainingMode ? trainingBloodsugarGoal : defaultBloodSugarGoal
      },
      disableInputFields: function () {
        return !(this.$store.state.IKValue && this.$store.state.IFValue)
      },
      shouldShowCalculation: function () {
        return this.measuredBloodsugar !== null || this.plannedCarbohydratesIntake !== null
      }
    },
    methods: {
      roundToNearestHalf: function (num) {
        const decimals = num % 1
        let adjustment = 0.0
        if (decimals >= 0.3 && decimals <= 0.7) {
            adjustment = 0.5
        } else if (decimals > 0.7) {
            adjustment = 1.0
        } else if (decimals < 0.3) {
            adjustment = 0.0
        }
        return (num - decimals) + adjustment
      }
    }
  }
</script>
