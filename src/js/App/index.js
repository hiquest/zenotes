import guid from '../utils/guid';

const { chrome } = window;
const SKEY = "COZY_NOTES";

export default {
  data: () => {
    return {
      notes: [ ],
      selected: undefined
    };
  },
  mounted: function() {
    loadNotes(this);
  },
  methods: { addNote, selectNote },
  watch: {
    notes: function() {
      save(this.notes);
    },
    "selected.body": function() {
      save(this.notes);
    }
  }
};

function selectNote(note) {
  this.selected = note;
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
