const mongoose = require("mongoose");
const Joi = require("joi");

const Customer = mongoose.model(
  "Customer",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    isGold: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: Number,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
  })
);

function validateCustomer(genre) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    phone: Joi.number().min(4).max(9999999999).required(),
    isGold: Joi.boolean(),
  });
  return schema.validate(genre);
}

exports.Customer = Customer;
exports.validate = validateCustomer;
