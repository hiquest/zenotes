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
  mounted,
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
  this.notes.push(note);
  this.selectNote(note);
}

function save(notes) {
  if (!notes) return;
  chrome.storage.sync.set({[SKEY]: notes});
}

function mounted() {
  chrome.storage.sync.get(SKEY, ({ [SKEY]: list = [] }) => {
    this.notes.push(...list);
    this.selectNote(list[0]);
  });
}
