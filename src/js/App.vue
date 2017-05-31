<template lang='pug'>
  .notes
    .row
      .column.column-20.sidebar
        h5 Notes
        button.button.button-clear + Add
      .column.column-80.note-area
        h5 This is a note area
</template>

<script>
export default {

}
</script>

<style>
.notes {
  width: 800px;
  margin: 50px auto;
}

.sidebar {
  border-right: 1px solid #ccc;
}
</style>
