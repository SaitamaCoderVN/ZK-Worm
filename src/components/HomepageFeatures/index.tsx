import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Comprehensive Resource Hub',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
        Your project aims to create a centralized repository that encompasses not only source code but also detailed documentation and integration guides for ZK proofs with Wormhole. This will significantly benefit developers by reducing the time spent searching for information across multiple platforms. A well-structured repository can streamline the integration process and promote wider adoption of ZK technology across various blockchain applications
      </>
    ),
  },
  {
    title: 'Enhanced Security and Privacy',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
        By enabling the integration of ZK proofs, your project directly contributes to enhancing the security and privacy of cross-chain transactions. With ZK technology, users can conduct transactions without revealing sensitive data, thereby fostering trust in decentralized applications. This focus on privacy aligns with increasing user demands for confidentiality in their financial and digital interactions​
      </>
    ),
  },
  {
    title: 'Support for Interoperability',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
        Your project leverages Wormhole’s capabilities to facilitate seamless communication between different blockchain networks. By integrating ZK proofs, it enhances the security of asset transfers across chains while ensuring that users maintain control over their privacy. This interoperability is crucial for the growing multi-chain ecosystem, allowing for more complex and privacy-preserving interactions in decentralized finance (DeFi) and beyond
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
