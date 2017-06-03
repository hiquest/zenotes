<template lang='pug'>
.notes
  .row
    .column.column-20.sidebar
      h5.notes-title
        a(href='#' @click="addNote") +
      ul
        li(v-for="note in notes"
        :class="{ active: note._selected }"
        @click="selectNote(note)") {{ title(note) }}
    .column.column-80
      .note-area
        textarea#md-area
</template>

<script src="./index.js"></script>
<style src="./styles.sass" lang='sass'></style>
