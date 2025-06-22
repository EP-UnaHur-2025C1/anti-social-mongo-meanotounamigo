const Joi = require('joi');

const postSchema = Joi.object({
  descripcion: Joi.string().required().min(1).max(2000).messages({
    "any.required" : "La descripción es obligatoria.",
    "string.empty": "La descripción no puede estar vacía.",
    "string.min": "La descripción debe tener como mínimo {#limit} caracteres.",
    "string.max": "La descripción debe tener como máximo {#limit} caracteres.",
  }),

  fecha: Joi.string()
    .pattern(/^\d{4}-\d{2}-\d{2}$/)
    .optional()
    .messages({
      "string.pattern.base": "La fecha debe tener el formato YYYY-MM-DD."
  }),

  imagenes: Joi.array().items(Joi.string().uri().messages({
    "string.uri": "Cada imagen debe ser una URL válida."
  })).optional(),

  etiquetas: Joi.array().items(
  Joi.string().regex(/^[0-9a-fA-F]{24}$/).message("ID de etiqueta inválido.")
  ).optional(),

  user: Joi.string().length(24).hex().required()
});

module.exports = postSchema;