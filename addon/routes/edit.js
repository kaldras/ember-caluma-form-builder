import Route from "@ember/routing/route";

export default Route.extend({
  model: ({ form_slug }) => form_slug
});