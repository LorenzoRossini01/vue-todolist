const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "Todo List",
      tasks: [],

      newTask: {
        name: "",
        done: false,
      },

      message: {
        show: false,
        text: "",
        class: "",
        icon: "",
      },
    };
  },

  methods: {
    getTaskDone(task) {
      task.done = !task.done;
    },

    deleteTask(index) {
      this.tasks.splice(index, 1);
    },

    addNewTask() {
      const newTaskCopy = { ...this.newTask };
      if (this.newTask.name) {
        this.tasks.push(newTaskCopy);
        this.newTask.name = "";
        this.setMessage(
          "Hai aggiunto una Task con successo",
          "alert-success",
          "fa-circle-check"
        );
      } else {
        this.setMessage(
          "Non puoi aggiungere una Task senza nome",
          "alert-danger",
          "fa-circle-exclamation"
        );
      }
    },

    setMessage(text, classes, icon) {
      this.message.show = true;
      this.message.text = text;
      this.message.class = classes;
      this.message.icon = icon;
    },
  },
}).mount("#app");
