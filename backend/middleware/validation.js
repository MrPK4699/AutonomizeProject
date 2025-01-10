const Joi = require('joi');

// Validation schema for saveUser

// Validation middleware
exports.userValidator = (req, res, next) => {
      const userSchema = Joi.object({
            username: Joi.string().alphanum().min(3).max(30).required(),
            name: Joi.string().optional(),
            bio: Joi.string().optional(),
            blog: Joi.string().optional(),
            location: Joi.string().optional(),
            repos_url: Joi.string().optional(),
            public_repos: Joi.number().integer().optional(),
            public_gists: Joi.number().integer().optional(),
            followers: Joi.number().integer().optional(),
            following: Joi.number().integer().optional(),
            avatar_url: Joi.string().uri().optional(),
            created_at: Joi.date().optional(),
            updated_at: Joi.date().optional(),
      });
      const { error } = userSchema.validate(req.body);
      console.log('User Validation in Pprocess')
      // If validation fails, send error response
      if (error) {
            console.log('User Validation Error')
            return res.status(400).json({ error: error.details[0].message });
      }

      next();
};


exports.updateValidator = (req, res, next) => {
      const updateSchema = Joi.object({
            name: Joi.string().max(100).optional(),
            bio: Joi.string().max(200).optional(),
            blog: Joi.string().uri().optional(),
            location: Joi.string().max(100).optional(),
      });
      const { error } = updateSchema.validate(req.body);
      console.log('Update Validation in Process')
      // If validation fails, send error response
      if (error) {
            console.log('Update Validation Error')
            return res.status(400).json({ error: error.details[0].message });
      }

      next();
};