import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Smooth Animation Integration',
    Svg: require('@site/static/img/UnityDmiReader.svg').default,
    description: (
      <>
        Bring your sprites to life effortlessly with UnityDmiReader. Seamlessly import .dmi files into Unity and create dynamic animations for characters and objects in your game. No need to worry about compatibility or complex conversion processes; UnityDmiReader takes care of everything.
      </>
    ),
  },
  {
    title: 'Flexible Getters',
    Svg: require('@site/static/img/UnityDmiReader.svg').default,
    description: (
      <>
        Flexible Getters: Easily access the data you need. UnityDmiReader offers a robust set of getter methods, allowing you to efficiently retrieve relevant information from .dmi files. Whether it's animation frames, sprite properties, or metadata, UnityDmiReader's getters provide you with the exact data you need to create a smooth gaming experience.
      </>
    ),
  },
  {
    title: 'Powerful Setters',
    Svg: require('@site/static/img/UnityDmiReader.svg').default,
    description: (
      <>
        Powerful Setters: Take control of your .dmi assets with UnityDmiReader's intuitive setter methods. Easily assign new values to properties, define animation sequences, and manipulate metadata to meet your game's requirements. Customize your .dmi files to perfection without compromising performance, thanks to UnityDmiReader's simplified configuration functionality.
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
        <h3>{title}</h3>
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
