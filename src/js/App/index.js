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
    vm.$watch('selected', function(val, prev) {
      if (!prev) return;
      save(vm.notes);
    }, {
      deep: true
    });
  },
  methods: { addNote, selectNote },
  watch: {
    notes: function() {
      save(this.notes);
    }
  }
};

export default component;

function selectNote(note) {
  if (note === this.selected) return;
  this.selected = note;

  this.notes = this.notes.filter((note) => !!note.body);
  save(this.notes);
}

function addNote() {
  const note = { id: guid(), body: '#' };
  this.notes.unshift(note);
  this.selectNote(note);
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
