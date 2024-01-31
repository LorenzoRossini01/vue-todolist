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

    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
  },
}).mount("#app");
