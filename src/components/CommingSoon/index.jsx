import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import styles from './index.module.css'
import CommingSoonImage from '../../assets/images/comming_soon.svg'

const CommingSoon = () => {
  return (
    <Container className={styles['main-container']}>
      <div className={styles['sub-container']}>
        <img src={CommingSoonImage} alt='Comming Soon' />
        <div className={styles['content-container']}>
          <Typography variant='h4'>
            Cooming Soon
          </Typography>
          <Typography variant='subtitle1' style={{textAlign: 'center'}}>
            The feature is still under development, sory for the incovenience
          </Typography>
        </div>
      </div>
    </Container>
  )
}

export default CommingSoon