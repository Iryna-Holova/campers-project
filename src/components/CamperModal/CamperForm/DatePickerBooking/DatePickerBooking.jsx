import { useField } from 'formik';
import DatePicker from 'react-datepicker';
import enGB from 'date-fns/locale/en-GB';
import { addMonths } from 'date-fns';
import './DatePicker.css';

const DatePickerBooking = ({ name = '' }) => {
  const [field, meta, helpers] = useField(name);
  const { value } = meta;
  const [startDate, endDate] = value;
  const { setValue } = helpers;

  return (
    <DatePicker
      {...field}
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      minDate={new Date()}
      maxDate={addMonths(new Date(), 6)}
      onChange={value => setValue(value)}
      locale={enGB}
      formatWeekDay={day => day.slice(0, 3)}
      placeholderText="Booking dates"
      dateFormat="dd.MM.yy"
      className="react-datepicker__input"
      showPopperArrow={false}
    />
  );
};

export default DatePickerBooking;
