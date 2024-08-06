import PropTypes from "prop-types";
import Container from "@mui/material/Container";

function HeaderContainer({ children }) {
  return (
    <Container maxWidth={false} disableGutters>
      {children}
    </Container>
  );
}

HeaderContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderContainer;
