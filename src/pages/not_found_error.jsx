import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import styles from '../styles/PageNotFound.module.css'
import PageNotFoundImage from '../assets/images/page_not_found.svg'

const NotFoundError = () => {
  return (
    <Container>
      <div className={styles['sub-container']}>
        <img src={PageNotFoundImage} alt='Page Not Found' />
        <div className={styles['content-container']}>
          <Typography variant='h5'>
            Page Not Found
          </Typography>
          <Typography variant='subtitle1' style={{textAlign: 'center'}}>
            What are you looking for ?
          </Typography>
        </div>
      </div>
    </Container>
  )
}

export default NotFoundError