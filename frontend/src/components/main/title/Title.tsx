import './title.css'
import image from '../../../assets/image.jpg'
const Title: React.FC = () => {
    return (
        <div className="title">
            <h1>test</h1>
            <h2>test</h2>
            <img src={image} className='image' />
        </div>
    )
}

export default Title