import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import icons from '../../../images/sprite.svg';
import DatePickerBooking from './DatePickerBooking/DatePickerBooking';
import ButtonLink from 'components/ButtonLink/ButtonLink';
import css from './CamperForm.module.css';

const BookSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short')
    .max(50, 'Name is too long')
    .required('Please enter your name'),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email'),
  dates: Yup.array(Yup.date().nullable())
    .required('Please choose booking dates')
    .test('is-start-date', 'Please choose booking dates', value => {
      return value && value[0] !== null;
    })
    .test('is-both-dates', 'Please choose end date', value => {
      return value && value[1] !== null;
    }),
});

export const CamperForm = ({ id }) => (
  <div className={css.wrapper}>
    <h3 className={css.title}>Book your campervan now</h3>
    <p className={css.text}>Stay connected! We are always ready to help you.</p>
    <Formik
      initialValues={{
        name: '',
        email: '',
        dates: [null, null],
      }}
      validationSchema={BookSchema}
      onSubmit={values => {
        console.log('Formdata: ', { id, ...values });
        window.location.reload();
      }}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off">
          <div className={css.fields}>
            <div className={css.field}>
              {errors.name && touched.name ? (
                <div className={css.error}>{errors.name}</div>
              ) : null}
              <Field
                name="name"
                type="text"
                placeholder="Name"
                className={css.input}
              />
            </div>
            <div className={css.field}>
              {errors.email && touched.email ? (
                <div className={css.error}>{errors.email}</div>
              ) : null}
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className={css.input}
              />
            </div>
            <div className={css.field}>
              {errors.dates && touched.dates ? (
                <div className={css.error}>{errors.dates}</div>
              ) : null}
              <DatePickerBooking name="dates" />
              <svg width={20} height={20} className={css.icon}>
                <use href={icons + '#icon-calendar'} />
              </svg>
            </div>
            <Field
              name="comment"
              type="text"
              as="textarea"
              rows={4}
              placeholder="Comment"
              className={css.input}
            />
          </div>
          <ButtonLink type="submit">Send</ButtonLink>
        </Form>
      )}
    </Formik>
  </div>
);
export default CamperForm;
