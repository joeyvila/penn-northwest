//! -- Joi Data Validations
const Joi = require('joi');
// console.log(Joi);

module.exports.eventSchema = Joi.object({
  name: Joi.string().required(),
  priceInCents: Joi.string().required(),
  description: Joi.string().required(),
  bulletPoints: Joi.array().items(Joi.string()),
  dates: Joi.array().items(Joi.date().required()).required(),
  location: Joi.string().required(),
  attendees: Joi.number().default(0),
});

module.exports.imageSchema = Joi.object({
  url: Joi.string.required(),
  filename: Joi.string().required(),
});

module.exports.registrationSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  username: Joi.string().min(2).required(),
  company: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

module.exports.membershipApplicationSchema = Joi.object({
  companyName: Joi.string().required(),
  website: Joi.string().required(),
  representative: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  zip: Joi.string().required(),
  descriptionOfBusiness: Joi.string().required(),
  companyType: Joi.string()
    .valid(
      'Private Sector',
      'Non-Profit/Charitable/Misc. Sector',
      'Public Sector'
    )
    .required(),
  affiliations: Joi.string().required(),
  annualContribution: Joi.string().required(),
  submittedBy: Joi.string().required(),
  submitterTitle: Joi.string().required(),
});

module.exports.newMemberSchema = Joi.object({
  newMember: Joi.object({
    name: Joi.string().required(),
    href: Joi.string().allow(null, ''),
  }),
});
