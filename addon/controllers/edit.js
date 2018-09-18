import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    back() {
      this.transitionToRoute("index");
    },
    newQuestion() {
      this.transitionToRoute("edit.questions.new");
    },
    editQuestion(slug) {
      this.transitionToRoute("edit.questions.edit", slug);
    }
  }
});