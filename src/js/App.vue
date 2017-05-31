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

<script>
export default {
  data,
  methods: {
    title
  }
}

function data() {
  return {
    notes: [
      {
        body: "This is a simple text I just wated to share"
      },
      {
        body: "And here's another note"
      }
    ]
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

</script>

<style lang='sass'>
.notes
  position: absolute
  top: 50px
  bottom: 50px
  left: calc(50% - 400px);
  width: 800px
  .row 
    height: 100%
  ul
    list-style-type: none
    li
      cursor: pointer
    li:hover, li.active
      background: #f3f5f8;

.sidebar
  border-right: 1px solid #eee

.notes-title
  position: relative
  a
    position: absolute
    right: 0
    font-size: 26px

.note-area
  padding-left: 20px
</style>
