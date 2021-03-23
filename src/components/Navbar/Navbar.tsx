import { Typography } from "@material-ui/core";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Typography component="h4" color="primary" variant="h4" align="center">
        Stock Exchance App
      </Typography>
    </nav>
  );
};

export default Navbar;
