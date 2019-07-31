<template lang='html'>
  <body>
      <div class="notes row">
          <div class="column column-20 sidebar">
              <h5 class="notes-title"><a href="#" @click="addNote">+</a></h5>
              <transition-group name="flip-list" tag="ul">
                  <li v-for="note in notes" :key="note.id" :class="{ active: note === selected }" @click="selectNote(note)">{{ note.body }}</li>
              </transition-group>
          </div>
          <div class="column column-80" style="position: relative;">
              <transition name="fade" appear="appear">
                  <editor v-if="selected" v-model="selected.body" :key="selected.id"></editor>
              </transition>
          </div>
      </div>
  </body>
</template>

<script>
import guid from '../utils/guid';

const { chrome } = window;
const SKEY = "COZY_NOTES";

const component = {
  data: () => {
    return {
      notes: [ ],
      selected: undefined
    };
  },
  mounted: function() {
    const vm = this;
    loadNotes(this);
    vm.$watch(function() {
      if (!this.selected) return undefined;
      return { id: this.selected.id, body: this.selected.body };
    }, function(val, prev) {
      if (!prev) return;
      if (val.id === prev.id && val.body !== prev.body) {
        const ind = vm.notes.findIndex((x) => x.id === val.id);
        if (ind > 0) {
          const el = vm.notes[ind];
          vm.notes.splice(ind, 1);
          vm.notes = [el, ...vm.notes];
        }
        save(vm.notes);
      }
    }, {
      deep: true
    });
  },
  methods: { addNote, selectNote }
};

export default component;

function selectNote(note) {
  if (note === this.selected) return;
  this.selected = note;

  if (this.notes.some((n) => !n.body)) {
    this.notes = this.notes.filter((note) => !!note.body);
    save(this.notes);
  }
}

function addNote() {
  const note = { id: guid(), body: '# ' };
  this.notes.unshift(note);
  this.selectNote(note);
  save(this.notes);
}

function save(notes) {
  if (!notes) return;
  chrome.storage.sync.set({[SKEY]: notes});
}

function loadNotes(vm) {
  chrome.storage.sync.get(SKEY, ({ [SKEY]: list = [] }) => {
    vm.notes.push(...list);
    vm.selectNote(list[0]);
  });
}
</script>
<style src="../../style/App.css" lang='css'></style>
