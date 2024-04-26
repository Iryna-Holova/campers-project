import { Field, Form, Formik } from 'formik';
import { useSelector } from 'react-redux';
import {
  selectFilterValues,
  selectIsEquipmentFilterActive,
  selectIsFilterActive,
  selectIsLoading,
} from 'store/selectors';
import { EQUIPMENT_FILTER, FORMS, ICONS, LOCATIONS } from 'constants/campers';
import icons from '../../images/sprite.svg';
import ButtonLink from 'components/ButtonLink/ButtonLink';
import css from './Filter.module.css';

const INITIAL_VALUES = {
  location: '',
  transmission: [],
  equipment: [],
  form: null,
};

const Filter = ({ onSearch, onReset }) => {
  const isFilterActive = useSelector(selectIsFilterActive);
  const currentValues = useSelector(selectFilterValues);
  const isEquipmentFilterActive = useSelector(selectIsEquipmentFilterActive);
  const isLoading = useSelector(selectIsLoading);
  const { location, transmission, equipment, form } = currentValues;

  return (
    <div className={css.wrapper}>
      <h2 className="visually-hidden">Filter Vehicles</h2>
      <Formik
        initialValues={{
          location: location || '',
          transmission: transmission ? [transmission] : [],
          equipment,
          form,
        }}
        onSubmit={values => {
          console.log(values);
          console.log(currentValues);
          if (
            !values.location &&
            !values.transmission.length &&
            !values.equipment.length &&
            !values.form
          ) {
            if (!isFilterActive) return;
            onReset();
          } else if (
            values.location === (location ?? '') &&
            values.transmission[0] === transmission &&
            values.equipment.length === equipment.length &&
            values.equipment.every(item => equipment.includes(item)) &&
            values.form === form
          ) {
            return;
          } else {
            onSearch({
              location: values.location || null,
              transmission: values.transmission[0] || null,
              equipment: values.equipment,
              form: values.form,
            });
          }
        }}
        onReset={async () => {
          if (isFilterActive) await onReset();
        }}
      >
        {({ values, setFieldValue, resetForm }) => (
          <Form>
            <div className={css.location}>
              <h3 className={css.title}>Location</h3>
              <div className={css.field}>
                <Field
                  name="location"
                  as="select"
                  className={`${css.select} ${
                    values.location ? css.selected : ''
                  } ${
                    values.location !== (location ?? '') ? css.unapplied : ''
                  }`}
                >
                  <option value="" disabled hidden>
                    City
                  </option>
                  {LOCATIONS.map((location, idx) => (
                    <option key={idx} value={location}>
                      {location.split(', ').reverse().join(', ')}
                    </option>
                  ))}
                </Field>
                <svg width={20} height={20} className={css.location_icon}>
                  <use href={icons + '#icon-location'} />
                </svg>
                <button
                  type="button"
                  onClick={() => setFieldValue('location', '')}
                  className={css.location_clear}
                >
                  <svg width={20} height={20}>
                    <use href={icons + '#icon-close'} />
                  </svg>
                </button>
              </div>
            </div>
            <div className={css.filters_wrapper}>
              <h3 className={css.title}>Filters</h3>
              <div className={css.filters}>
                <div className={css.filter}>
                  <div id="equipment-group" className={css.subtitle}>
                    Vehicle equipment
                  </div>
                  <div
                    role="group"
                    aria-labelledby="equipment-group"
                    className={css.checkbox_group}
                  >
                    <label
                      className={`${css.label} ${
                        isEquipmentFilterActive
                          ? transmission === 'automatic'
                            ? css.active
                            : css.inactive
                          : css.unapplied
                      }`}
                    >
                      <Field
                        type="checkbox"
                        name="transmission"
                        value="automatic"
                        className={css.checkbox_hidden}
                      />
                      <svg width={32} height={32}>
                        <use href={`${icons}#icon-transmission`} />
                      </svg>
                      Automatic
                    </label>
                    {Object.entries(EQUIPMENT_FILTER).map(
                      ([key, value], idx) => (
                        <label
                          key={idx}
                          className={`${css.label} ${
                            isEquipmentFilterActive
                              ? equipment.includes(key)
                                ? css.active
                                : css.inactive
                              : css.unapplied
                          }`}
                        >
                          <Field
                            type="checkbox"
                            name="equipment"
                            value={key}
                            className={css.checkbox_hidden}
                          />
                          <svg width={32} height={32}>
                            <use href={icons + ICONS[value]} />
                          </svg>
                          {value}
                        </label>
                      )
                    )}
                  </div>
                </div>
                <div className={css.filter}>
                  <div id="radio-group" className={css.subtitle}>
                    Vehicle type
                  </div>
                  <div
                    role="group"
                    aria-labelledby="radio-group"
                    className={css.checkbox_group}
                  >
                    {Object.entries(FORMS).map(([key, value], idx) => (
                      <label
                        key={idx}
                        className={`${css.label} ${
                          form
                            ? form === key
                              ? css.active
                              : css.inactive
                            : css.unapplied
                        }`}
                      >
                        <Field
                          type="radio"
                          name="form"
                          value={key}
                          className={css.checkbox_hidden}
                        />
                        <svg width={40} height={28}>
                          <use href={`${icons}#icon-${key}`} />
                        </svg>
                        {value}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className={css.buttons}>
              <ButtonLink type="submit" disabled={isLoading}>
                Search
              </ButtonLink>
              <ButtonLink
                type="reset"
                onClick={() =>
                  resetForm({
                    values: INITIAL_VALUES,
                  })
                }
                disabled={isLoading}
                size="small"
                color="secondary"
              >
                Reset
              </ButtonLink>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Filter;
