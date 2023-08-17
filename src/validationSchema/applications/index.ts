import * as yup from 'yup';

export const applicationValidationSchema = yup.object().shape({
  date_applied: yup.date().required(),
  cover_letter: yup.string().required(),
  status: yup.string().required(),
  job_id: yup.string().nullable(),
  freelancer_id: yup.string().nullable(),
});
