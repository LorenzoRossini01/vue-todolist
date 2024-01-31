const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "Todo List",
      tasks: [
        { name: "task", done: false },
        { name: "task", done: false },
        { name: "task", done: false },
        { name: "task", done: false },
        { name: "task", done: false },
        { name: "task", done: false },
      ],
    };
  },

  methods: {
    getTaskDone(task) {
      task.done = !task.done;
    },
  },
}).mount("#app");
