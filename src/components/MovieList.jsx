import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function MovieList({movie}) {
  return (
  
    <Card className='card' style={{ position:'relative', width:'18rem',height:'27rem' }}>
      <Card.Img style={{height:'300px', borderRadius:'20px', objectFit:'cover'}} variant="top" src={movie.posterURL} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        
        <Button style={{position:'absolute', bottom:'1%',left:'35%'}} variant="danger" >
          <Link style={{color:'white',textDecoration:'none'}} to={`/movies/${movie.id}`}>
          Show more
          </Link>
          </Button>
      </Card.Body>
    </Card>
 
  )
}

export default MovieList