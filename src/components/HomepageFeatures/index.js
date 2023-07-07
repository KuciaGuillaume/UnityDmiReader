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
        Getters flexibles : accédez facilement aux données dont vous avez besoin. UnityDmiReader offre un ensemble robuste de méthodes getter, vous permettant de récupérer efficacement des informations pertinentes à partir de fichiers .dmi. Qu'il s'agisse d'images d'animation, de propriétés de sprite ou de métadonnées, les getters d'UnityDmiReader vous fournissent les données exactes dont vous avez besoin pour créer une expérience de jeu fluide.
      </>
    ),
  },
  {
    title: 'Powerful Setters',
    Svg: require('@site/static/img/UnityDmiReader.svg').default,
    description: (
      <>
        Setters puissants : Prenez le contrôle de vos actifs .dmi avec les méthodes de setter intuitives de UnityDmiReader. Attribuez facilement de nouvelles valeurs aux propriétés, définissez des séquences d'animation et manipulez les métadonnées pour répondre aux exigences de votre jeu. Personnalisez vos fichiers .dmi à la perfection sans compromettre les performances, grâce à la fonctionnalité de configuration simplifiée de UnityDmiReader.
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
