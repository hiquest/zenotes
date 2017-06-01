export default {
  data,
  methods: {
    title
  }
};

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
