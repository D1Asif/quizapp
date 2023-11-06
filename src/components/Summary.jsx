/* eslint-disable react/prop-types */
import classes from '../styles/Summary.module.css'
import useFetch from '../hooks/useFetch'

export default function Summary({ score, noq }) {
  let prompt = '';
  if (score < 5 * noq * 0.5) {
    prompt = 'bad grade'
  } else if (score >= 5 * noq * 0.5 && score < 5 * noq) {
    prompt = 'good grade'
  } else {
    prompt = 'excellent grade'
  }
  const { photo, error, loading } = useFetch(prompt);
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      <div className={classes.badge}>
        {loading && "loading..."}
        {error && "there was an error"}
        {!loading && !error && photo != null
          && <img src={photo.src.original} alt={prompt} />
        }
      </div>
    </div>
  )
}