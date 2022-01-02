const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: [5, "Minimum 5 letter Name"],
      maxlength: [200, "Maximum 200 letter Name"],
    },
    price: Number,
    quantity: Number,
    catagory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Catagory",
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
