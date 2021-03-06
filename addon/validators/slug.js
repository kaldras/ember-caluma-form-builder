import {
  validatePresence,
  validateLength,
  validateFormat
} from "ember-changeset-validations/validators";
import and from "ember-caluma-utils/utils/and";

const validateSlug = () =>
  and(
    validatePresence(true),
    validateLength({ max: 50 }),
    validateFormat({ regex: /^[a-z0-9-]+$/ })
  );

export default validateSlug;
