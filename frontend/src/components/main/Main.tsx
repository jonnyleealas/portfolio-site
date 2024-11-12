import Contact from './contact/Contact'
import Project from './projects/Project'
import Title from './title/Title'
import './main.css'

const Main: React.FC = () => {
    return (
        <main className="main">
            <div className='box-1'>
                <Title />
            </div>
            <div className='box-2'>
                <Project />
                <Project />
                <Project />
            </div>
            <div className='box-3'>
                <Contact />
            </div>
        </main>
    )
}

export default Main