import SimpleMDE from 'simplemde';

export default {
  props: ['value'],
  mounted
};

function mounted() {
  const md = initEditor(this.$el.childNodes[0], this.value);
  md.codemirror.on("change", () => {
    const val = this.md.value();
    this.$emit('input', val);
  });

  this.md = md;
}

function initEditor(el, val) {
  return new SimpleMDE({
    element: el,
    autofocus: true,
    spellChecker: false,
    placeholder: "Type here...",
    toolbar: false,
    toolbarTips: false,
    status: false,
    autoDownloadFontAwesome: false,
    forceSync: true,
    initialValue: val
  });

}
