import SimpleMDE from 'simplemde';
import guid from '../utils/guid';

const { chrome } = window;
const SKEY = "COZY_NOTES";

export default {
  data,
  mounted,
  methods: {
    title,
    addNote,
    selectNote
  }
};

function selectNote(note) {
  this.notes.forEach(n => n._selected = false);
  note._selected = true;
}

function addNote() {
  const note = {
    id: guid(),
    body: 'New Note'
  };
  this.notes.push(note);
  save(this.notes);
}

function save(notes) {
  chrome.storage.sync.set({[`${SKEY}_list`]: notes});
}

function mounted() {
  const key = `${SKEY}_list`;
  sget(key).then(({ [key]: list }) => {
    this.notes.push(...list);
  });

  const md = new SimpleMDE({
    element: document.getElementById("md-area"),
    autofocus: true,
    spellChecker: false,
    placeholder: "Type here...",
    toolbar: false,
    toolbarTips: false,
    status: false
  });
}

function data() {
  return {
    notes: [ ]
  };
}

function title({ body }) {
  const limit = 15;
  if (body.length > limit) {
    return body.substring(0, limit) + "...";
  } else {
    return body;
  }
}

function sget(key) {
  return new Promise((res, rej) => {
    chrome.storage.sync.get(key, val => res(val));
  });
}
