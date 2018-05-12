<template>
  <div>
    <div class="u-p">
      <h1>Kva er dosen?</h1>
    </div>
    <div class="bg-gray u-mb u-p">
      <DosageCalculator />
    </div>
    <div class="bg-gray u-mb u-p">
      <UserSettings />
    </div>
    <div class="bg-gray u-mb u-p">
      <p>Denne applikasjonen er under utvikling.</p>
    </div>
  </div>
</template>

<script>
  import DosageCalculator from './DosageCalculator.vue'
  import UserSettings from './UserSettings.vue'
  export default {
    name: 'app',
    components: { DosageCalculator, UserSettings }
  }
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>
  code {
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
    font-size: 0.9em;
    white-space: pre-wrap;
    color: #2c3e50;
  }

  code::before, code::after {
    content: '`';
  }

  .bg-gray {
    background-color: #ccc;
  }

  .u-mb {
    margin-bottom: 20px;
  }

  .u-p {
    padding: 20px;
  }
</style>
