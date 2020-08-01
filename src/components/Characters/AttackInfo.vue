<template>
  <div class="attack-info">
    <table>
      <tr>
        <th>Name</th>
        <th>To Hit</th>
        <th>Damage</th>
        <th>Notes</th>
      </tr>
      <tr v-for="attack in attacks">
        <td class="attack-name">{{ attack.name }}</td>
        <td>{{ attack.toHit }}</td>
        <td>{{ attack.damageString }}</td>
        <td>{{ attack.notes }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    props: ["attacks"]
  }
</script>

<style lang="scss" scoped>
  .attack-info {
    margin-left: 0.8rem;
    border-left: 1px #E85A4F solid;
    padding: 1.5rem;
  }

  .name {
    font-weight: bold;
  }

  .to-hit {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  table {
    font-size: 0.85rem;
    border-collapse: collapse;
    width: 100%;
  }

  th {
    font-weight: bold;
  }

  td, th {
    border: 1px solid #D8C3A5; 
    text-align: left;
    padding: 0.5rem;
  }

</style>