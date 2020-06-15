import { checkRequied } from '../../../commons/FormHelper/validate';

const validate = (values) => {
  const errors = {};
  const requiredFields = ['coupon'];

  requiredFields.forEach((field) => {
    errors[field] = checkRequied(values[field]);
  });

  return errors;
};

export default validate;
