const Joi = require('joi');

const questionDataSchema = Joi.object().keys({
  title: Joi.string().strict().required(),
  body: Joi.string().required(),
  meetupId: Joi.number().integer().required(),
  userId: Joi.number().integer()
});

export default questionDataSchema;
