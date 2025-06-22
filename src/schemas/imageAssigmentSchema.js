const Joi = require("joi");

const imageAssignmentSchema = Joi.object({
  imageIds: Joi.array().items(Joi.string().required()).min(1).messages({
    "array.base": "Debés enviar un array de IDs de imágenes.",
    "array.min": "Al menos una imagen debe ser asignada.",
    "string.base": "Cada ID debe ser una cadena válida.",
    "any.required": "El campo imageIds es obligatorio."
  }),
});

module.exports = imageAssignmentSchema;