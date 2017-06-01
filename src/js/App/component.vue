<template lang='pug'>
.notes
  .row
    .column.column-20.sidebar
      h5.notes-title
        span Notes
        a(href='#') +
      ul
        li(v-for="note in notes") {{ title(note) }}
    .column.column-80
      .note-area
        h5 This is a note area
</template>

<script src="./index.js"></script>
<style src="./styles.sass" lang='sass'></style>
