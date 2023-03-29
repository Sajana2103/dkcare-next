import PageWrapper from "../../components/page-wrapper"
import cls from 'classnames'

import styles from '../styles/Services.module.css'

const HowItWorks = () => {
  let title = 'How It Works'
  const page = <div>
    <div id="tech-intro" className={cls(styles.container)}>
    <h1 className={cls(" blue bold text-large", styles.mainTitle)}>How It Works</h1>

    </div>
  </div>

  return (
    <PageWrapper title={title} page={page} />
  )
}
export default HowItWorks
