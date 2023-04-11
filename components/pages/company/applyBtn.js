import styles from '../../../src/styles/Pages.module.css'
import cls from 'classnames'

const ApplyBtn = () => {
  return (
    <button className={cls(styles.applyBtn)}>
      <div style={{ display: 'grid', alignItems: 'center', gridTemplateColumns: '50px auto' }}>
        <div className={cls(styles.circle)}>
          <svg fill="#ed7036" width="25px" height="25px" viewBox="0 0 32 40" >

            <g data-name="Layer 2" id="Layer_2">

              <path className='stW' d="M29,11H3a1,1,0,0,0-1,1V29a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V12A1,1,0,0,0,29,11Zm-2.79,2L16,20.23,5.79,13ZM4,28V14.18l11.42,8.09a1,1,0,0,0,1.16,0L28,14.18V28Z" />

            </g>

          </svg>
        </div><p className={cls('tl ', styles.applyNow)}>Apply now</p>
      </div>
    </button>
  )
}
export default ApplyBtn