import { Grid, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchStock } from "../../store/search/searchManager";
import { RootState } from "../../store/store";
import SingleHint from "./SingleHint";

interface Props {
  searchValue: string;
}

const useStyle = makeStyles({
  wrapper: {
    margin: "1rem 0",
  },
});

const SearchHints: React.FC<Props> = ({ searchValue }) => {
  const { searchStock, isFetching } = useSelector(
    (state: RootState) => state.search
  );
  const dispatch = useDispatch();
  const style = useStyle();

  useEffect(() => {
    if (!searchValue) {
      return;
    }
    dispatch(setSearchStock({ searchValue: "tesla" }));
  }, [searchValue, dispatch]);

  let content: any = <h2>Loading...</h2>;

  if (!isFetching) {
    content = searchStock.map((stock) => (
      <SingleHint stock={stock} key={stock.symbol} />
    ));
  }

  return (
    <Grid container className={style.wrapper} justify="center">
      {content}
    </Grid>
  );
};

export default SearchHints;
