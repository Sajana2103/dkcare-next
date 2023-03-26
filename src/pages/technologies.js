import PageWrapper from "../../components/page-wrapper"
import cls from 'classnames'
import Image from "next/image"
import Link from "next/link"
import Button from "../../components/homepage/Button"
import styles from '../styles/Services.module.css'

const ServicesPage = () => {
  let title = 'Technologies'
  const page = <div>
    <div id="tech-intro" className={cls(styles.container)}>
    <h1 className={cls(" blue bold text-large", styles.mainTitle)}>Technologies</h1>

    </div>
  </div>

  return (
    <PageWrapper title={title} page={page} />
  )
}
export default ServicesPage
