import Contact from './contact/Contact'
import Project from './projects/Project'
import './main.css'

const Main: React.FC = () => {
    return (
        <main className="main">
            <div className='box-1'>
                <h1>Jonathon Lee</h1>
                <h1>Main Content</h1>
                <p>This is a temporary content for testing the layout.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Additional content to ensure the main section has enough height.</p>
                <p>More content...</p>
                <p>More content...</p>
                <p>More content...</p>
                <p>More content...</p>
                <p>More content...</p>
                <h1>Main</h1>
            </div>
            <div className='box-2'>
                <Project />
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