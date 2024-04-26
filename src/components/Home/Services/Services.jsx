import alcove from '../../../images/services/alcove.webp';
import alcove2x from '../../../images/services/alcove@2x.webp';
import integrated from '../../../images/services/integrated.webp';
import integrated2x from '../../../images/services/integrated@2x.webp';
import van from '../../../images/services/van.webp';
import van2x from '../../../images/services/van@2x.webp';
import Section from 'components/Home/Section/Section';
import CardTitle from 'components/CardTitle/CardTitle';
import ButtonLink from 'components/ButtonLink/ButtonLink';
import css from './Services.module.css';

const SERVICES = [
  {
    title: 'Alcoves',
    description:
      "Offer a cozy and spacious living area above the driver's cab, providing extra sleeping space. Ideal for families and groups, these campers combine comfort with practicality, making them perfect for longer journeys and outdoor adventures.",
    image: {
      normal: alcove,
      retina: alcove2x,
    },
    name: 'alcove',
  },
  {
    title: 'Fully Integrated',
    description:
      "Feature a seamless design where the living area is integrated with the driver's cab. Enjoy a luxurious and modern camping experience with all the amenities you need on board. Perfect for those seeking a premium travel experience.",
    image: {
      normal: integrated,
      retina: integrated2x,
    },
    name: 'fullyIntegrated',
  },
  {
    title: 'Vans',
    name: 'panelTruck',
    description:
      'Offer compact and versatile options for adventurers on the go. These nimble campers are easy to maneuver and park, making them ideal for spontaneous road trips and exploring off-the-beaten-path destinations.',
    image: {
      normal: van,
      retina: van2x,
    },
  },
];

const Services = () => {
  return (
    <Section title="Start Your Adventure">
      <ul className={css.list}>
        {SERVICES.map(({ title, description, image, name }, idx) => (
          <li key={idx} className={css.item}>
            <img
              src={image.normal}
              srcSet={`${image.normal} 1x, ${image.retina} 2x`}
              width={424}
              height={241}
              alt={title}
              className={css.image}
            />
            <div className={css.text}>
              <CardTitle>{title}</CardTitle>
              <p>{description}</p>
            </div>
            <ButtonLink tag="Link" to={`/categories?type=${name}`}>
              Book now
            </ButtonLink>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Services;
