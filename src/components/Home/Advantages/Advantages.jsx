import icons from '../../../images/sprite.svg';
import Section from 'components/Home/Section/Section';
import CardTitle from 'components/CardTitle/CardTitle';
import css from './Advantages.module.css';

const ADVANTAGES = [
  {
    title: 'Wide Selection',
    description:
      'Choose from a variety of campers to suit your preferences and group size',
    icon: '#icon-selection',
  },
  {
    title: 'Quality and Safety',
    description:
      'Our campers undergo regular maintenance and safety checks to ensure a worry-free trip',
    icon: '#icon-quality',
  },
  {
    title: 'Convenient Booking',
    description:
      'Easily book online and customize your rental with optional add-ons',
    icon: '#icon-booking',
  },
  {
    title: 'Expert Support',
    description:
      'Our friendly team is here to assist you every step of the way, from planning to on-the-road assistance',
    icon: '#icon-phone',
  },
];

const Advantages = () => {
  return (
    <Section title="Why choose us">
      <ul className={css.list}>
        {ADVANTAGES.map(({ title, description, icon }, idx) => (
          <li key={idx} className={css.item}>
            <div className={css.icon}>
              <svg width={64} height={64}>
                <use href={icons + icon} />
              </svg>
            </div>
            <CardTitle>{title}</CardTitle>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Advantages;
