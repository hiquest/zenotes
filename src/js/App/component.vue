<template lang='pug'>
.notes.row
  .column.column-20.sidebar
    h5.notes-title
      a(href='#' @click="addNote") +
    ul
      li(v-for="note in notes"
      :key="note.id"
      :class="{ active: note === selected }"
      @click="selectNote(note)") {{ note.body }}
  .column.column-80
    editor(v-if='selected' v-model='selected.body' :key="selected.id")
</template>

<script src="./index.js"></script>
<style src="./styles.sass" lang='sass'></style>
