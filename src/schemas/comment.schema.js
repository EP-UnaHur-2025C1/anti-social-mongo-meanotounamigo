const Joi = require('joi');

const commentSchema = Joi.object({
  contenido: Joi.string().required().min(1).max(2000).messages({
    "any.required" : "El contenido es obligatoria.",
    "string.empty": "El contenido no puede estar vacía.",
    "string.min": "El contenido debe tener como mínimo {#limit} caracteres.",
    "string.max": "El contenido debe tener como máximo {#limit} caracteres.",
  }),

  fecha: Joi.string().optional()
});

module.exports = commentSchema;