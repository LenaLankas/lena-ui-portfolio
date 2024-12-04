import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Function and Fashion',
    Svg: require('@site/static/img/gem.svg').default,
    description: (
      <>
        I'm a designer who's all about aesthetics. But I'm also one who thinks order and structure are of utmost importance. I keep these ideas at the forefront of my mind when designing so the user experience is enjoyable (not ugly or frustrating).
      </>
    ),
  },
  {
    title: 'Creativity and Customization',
    Svg: require('@site/static/img/brush.svg').default,
    description: (
      <>
        My typical design process involves a large (potentially excessive) number of variations and concepts. My mind is always running with ideas and I have to see them all to fruition to feel confident in the final product. Not only do I hope my designs reflect this, but also that they empower users in the same way to take control of their experience.
      </>
    ),
  },
  {
    title: 'Efficiency and Achievement',
    Svg: require('@site/static/img/trophy.svg').default,
    description: (
      <>
        I strive to make everyday my best day, and every project my best project. My UIs reflect the modern user's energy and enthusiasm. I want my applications to be an extension of the user's productivity; as leverage to be 1% better.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{}</Heading>
        <Heading as="h3">{}</Heading>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
