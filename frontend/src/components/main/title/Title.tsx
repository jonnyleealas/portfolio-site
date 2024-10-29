import './title.css'
import image from '../../../assets/image.jpg'
const Title: React.FC = () => {
    return (
        <div className="title">
            <h1>Jonathon Lee</h1>
            <h2>Software Developer</h2>
            <img src={image} className='image' />
        </div>
    )
}

export default Title