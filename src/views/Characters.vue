<template>
  <div>
    <h1 class="title">Your Characters</h1>
    <div v-for="character in characters" :key="character.name" class="character-data">
      <character-overview :character="character"></character-overview>
        
      <!-- <div class="character-stats">
        <template>
            <div>
                <vue-good-table

                :columns="attackColumns"
                :rows="character.attacks"
                
                />
            </div>
        </template>
      </div>
      <div class="character-stats">
        <template>
            <div>
                <vue-good-table
                    :columns="spellColumns"
                    :rows="character.spells"
                    :select-options="{ enabled: true, selectOnCheckboxOnly: true }" 
                    @on-selected-rows-change="selectionChanged">
                    
                </vue-good-table>

            </div>
        </template>
      </div> -->
    </div>
  </div>
</template>


<script>
import CharacterOverview from "../components/Characters/CharacterOverview"
export default {
  name: 'characters',
  components: {
    CharacterOverview
  },
  data(){
    return {
      spellColumns: [
        {
          label: '?',
          field: 'prepared',
        },{
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Range',
          field: 'range',
        },
        {
          label: 'Cmpts',
          field: 'components',
        },
        {
          label: 'Lvl',
          field: 'level',
          type: 'number',
        },
        {
          label: 'Duration',
          field: 'duration',
        },
      ],
      attackColumns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'To Hit',
          field: 'toHit',
          type: 'number',
        },
        {
          label: 'Damage',
          field: 'damageString',
        },
        {
          label: 'Notes',
          field: 'notes',
        },
      ],
      characters: []
    };
  },
  created() {
    fetch("list.json")
        .then(response => response.json())
        .then(data => (this.characters = data));
  },
  methods: {
  selectionChanged(params) {
    for (let i = 0; i < params.selectedRows.length; i++) {
        console.log("Selected: " + params.selectedRows[i].name)
    }

    for (let i = 0; i < params.selectedRows.length; i++) {
        for (let j = 0; j < this.characters.length; j++) {
            if (this.characters[j].name === params.selectedRows[i].caster) {
                for (let k = 0; k < this.characters[j].spells.length; k++) {
                    if (this.characters[j].spells[k].name === params.selectedRows[i].name){
                        if (this.characters[j].spells[k].prepared === "N"){
                            console.log("Preparing spell " + this.characters[j].spells[k].name)
                            this.characters[j].spells[k].prepared = "Y"
                        }
                        else{
                            console.log("Unpreparing spell " + this.characters[j].spells[k].name)
                            this.characters[j].spells[k].prepared = "N"
                        }
                    }
                }
            }
        }
    }
  }
}
};
</script>

<style scoped>

.character-data {
  display: flex;
  margin-left: 1.5rem;
  padding: 1.3rem;
}

.character-stats {
  flex-grow: 8;
  text-align: left;
  padding-left: 20px;
  max-width: 30%;
}

.character-stats .name {
  font-size: 30px;
}

.character-stats .money {
  font-size: 15px;
}

.character-armor-class {
  flex-grow: 1;
  font-size: 25px;
  margin-top: 10px;
}

img {
  width: 70px;
}


table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  font-size: 12px;
}

th {
    font-weight: bold;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

ul {
  margin-left: 20px;
}

/* Style the button that is used to open and close the collapsible content */
.collapsible {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active, .collapsible:hover {
  background-color: #ccc;
}

/* Style the collapsible content. Note: hidden by default */
.content {
  padding: 0 18px;
  display: none;
  overflow: hidden;
  background-color: #f1f1f1;
}

.title {
  padding: 1.5rem;
  color: #E85A4F;
  font-size: 2rem;
}
</style>