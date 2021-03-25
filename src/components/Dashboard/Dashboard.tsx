import { Container } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Dashboard: React.FC = () => {
  const activeStock = useSelector(
    (state: RootState) => state.search.activeStock
  );
  if (!activeStock) {
    return null;
  }
  return (
    <Container color="primary">
      <h2>{activeStock}</h2>
    </Container>
  );
};

export default Dashboard;
