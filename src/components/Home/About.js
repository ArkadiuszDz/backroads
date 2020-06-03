import React from 'react';
import Title from '../Title';
import styles from '../../css/about.module.css';
import img from '../../images/defaultBCG.jpeg';

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us"/>
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>
            Explore the difference
          </h4>
          <p>
            Fugiat pariatur labore cillum duis minim. 
            Sit tempor veniam consequat sint qui nostrud tempor aliqua. 
            Proident deserunt esse ad dolor labore eu magna proident proident ea irure. 
            Cillum non cillum irure ex incididunt dolore sint. 
            Non laborum eiusmod nostrud nostrud culpa nulla laborum. 
          </p>
          <p>
            Cillum non cillum irure ex incididunt dolore sint. 
            Non laborum eiusmod nostrud nostrud culpa nulla laborum. 
          </p>
          <button type="button" className="btn-primary">read more</button>
        </article>
      </div>
    </section>
  )
}

export default About;