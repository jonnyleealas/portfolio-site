type NavbarProps = {
    className?: string
};

const Navbar: React.FC<NavbarProps> = ({className}) => {
    return (
        <nav className={className}>
            <h1>Navbar</h1>
        </nav>
    )
}

export default Navbar;