const Joi = require('joi');

const postSchema = Joi.object({
  descripcion: Joi.string().required().min(1).max(2000).messages({
    "any.required" : "La descripción es obligatoria.",
    "string.empty": "La descripción no puede estar vacía.",
    "string.min": "La descripción debe tener como mínimo {#limit} caracteres.",
    "string.max": "La descripción debe tener como máximo {#limit} caracteres.",
  }),

  fecha: Joi.string().optional(),

  imagenes: Joi.array().items(Joi.string().uri().messages({
    "string.uri": "Cada imagen debe ser una URL válida."
  })).optional()

});

module.exports = postSchema;