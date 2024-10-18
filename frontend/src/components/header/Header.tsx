import Nav from './nav'

type NavbarProps = {
    className?: string
};

const Navbar: React.FC<NavbarProps> = ({className}) => {
    return (
        <nav className={className}>
            <Nav />
        </nav>
    )
}

export default Navbar;