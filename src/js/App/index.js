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
