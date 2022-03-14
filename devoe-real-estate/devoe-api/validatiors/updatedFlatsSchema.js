import Joi from "joi";

const updatedFlatsSchema = Joi.object({
  _id: Joi.string().required(),
  name: Joi.string().valid("flat", "house"),
  price: Joi.number(),
  stock: Joi.number(),
  description:Joi.string().min(5).max(100)
});

export default updatedFlatsSchema;
