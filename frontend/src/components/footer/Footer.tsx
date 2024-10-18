type CustomFooterProps = {
  className?: string;
};

const Footer: React.FC<CustomFooterProps> = ({ className }) => {
  return (
    <footer className={className}>
      <div className="container py-3">
        <p>&copy; 2024 MyCompany. All rights reserved.</p>
        <p>
          <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
