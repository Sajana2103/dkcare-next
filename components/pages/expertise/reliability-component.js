import styles from './Expertise.module.css'
import cls from 'classnames'
import Image from "next/image"
import Button from "../../homepage/Button"
import Link from "next/link"
import Head from "next/head"

const ReliabilityComponent = () => {

  return (
    <div className='page-content-wrapper'>
      <Head>
        <title>Reliability</title>
      </Head>
      <div id="exp-reliability " className={cls(styles.container)}>
        <div className='bd-line-wrapper'>
          <div className='bd-line'></div>
          <h2 className={cls('blue split-text', styles.secTitle)}>Reliability</h2>
          <div className='bd-line'></div>
        </div>

        <div className={cls("gap40", styles.flex2)}>
          <div className="wPer40">
            <p className={cls("text-large blue bold pdTopBtm", styles.pdTopBtm, styles.textL)}
            >Dedicated to ensure that our customers have a positive
              experience from the moments they book their ride to the
              moments they are dropped at their destination.</p>
            <p className={cls("text-med semi-bold blue  pdTopBtm", styles.pdTopBtm, styles.textM)}
            >We understand that working with multiple transportation providers can be frustrating, which is why
              we strive to provide a seamless and high-quality experience from start to finish.</p>
            <div className={cls("", styles.flex2)} style={{ alignItems: 'center' }}>
              <Button name="Read More" />
              <p className={cls('blue bold')}>Read more on our services page.</p>
            </div>
          </div>
          <Image alt="Reliability" className={styles.img50} width={400} height={100}
            src="/Dk-Care-LLC-about-us-2.jpg" />
        </div>

      </div>

    </div>
  )
}
export default ReliabilityComponent
