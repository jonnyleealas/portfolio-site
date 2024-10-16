type FooterProps = {
  className?: string 
    
}

const Footer: React.FC<FooterProps> = ({className}) => {
  return (
    <footer className={className}>
        <h1>Footer</h1>
    </footer>
  )
}

export default Footer