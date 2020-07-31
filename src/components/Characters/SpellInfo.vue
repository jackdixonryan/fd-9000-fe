<template>
  <div class="spell-info">
    <table>
      <tr>
        <th>Name</th>
        <th>Level</th>
        <th>Preparation</th>
        <th>Attack</th>
        <th>Saving</th>
        <th>Duration</th>
        <th>Range</th>
      </tr>
      <tr v-for="spell in spells">
        <td class="name">{{ spell.name }}
          <a class="spell-link" :href="`/spells/${encodeURIComponent(spell.name)}`">
            <i class="fas fa-link"></i>
          </a>
        </td>
        <td>
          <span v-if="spell.level === 0">Cantrip</span>
          <span v-else>{{ spell.level }}</span>
        </td>
        <td>
          <span v-if="spell.canPrepare">Needs Preparation</span>
          <span v-else-if="spell.alwaysPrepared">Always Prepared</span>
        </td>
        <td>
          <span v-if="spell.requiresAttackRoll">
            {{ spell.attackType }}, {{ spell.toHit }} to Hit
          </span>
        </td>
        <td>
          <span v-if="spell.requiresSavingThrow">
            {{ spell.attackSaveStatKey }} {{ spell.attackSaveValue }}
          </span>
        </td>
        <td>{{ spell.duration }}</td>
        <td>{{ spell.range }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    props: ["spells"],
  }
</script>

<style lang="scss" scoped>
  .spell-info {
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
    border-collapse: collapse;
    width: 100%;
    font-size: 0.85rem;
  }

  th {
    font-weight: bold;
  }

  td, th {
    border: 1px solid #D8C3A5; 
    text-align: left;
    padding: 0.5rem;
  }

  .spell-link {
    color: #E98074;
    float: right;
    text-decoration:none;
  }
</style>