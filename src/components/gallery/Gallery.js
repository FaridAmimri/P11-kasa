import Card from '../card/Card'
import './Gallery.scss'


function Gallery(props) {
  return (
    <div className="gallery">
      <ul>
        {props.data.map((house) => (
          <Card key={house.id} house={house} />
        ))}
      </ul>
    </div>
  )
}

export default Gallery
