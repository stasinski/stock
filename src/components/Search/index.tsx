import { Grid } from "@material-ui/core";
import { useState } from "react";
import SearchForm from "./SearchForm";
import SearchHints from "./SearchHints";

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Grid container justify="center">
      <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />
      <SearchHints searchValue={searchValue} />
    </Grid>
  );
};

export default Search;
