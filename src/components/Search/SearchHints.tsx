import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stockApi } from "../../api/stock";
import { setSearchStock } from "../../store/search/searchManager";
import { RootState } from "../../store/store";

interface Props {
  searchValue: string;
}

const SearchHints: React.FC<Props> = ({ searchValue }) => {
  const [hints, setHints] = useState([]);
  const searchStock = useSelector(
    (state: RootState) => state.search.searchStock
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(searchStock);
  }, [searchStock]);

  useEffect(() => {
    if (!searchValue) {
      return;
    }
    dispatch(setSearchStock({ searchValue: "tesla" }));
    stockApi
      .get("", {
        params: {
          function: "SYMBOL_SEARCH",
          keywords: searchValue,
        },
      })
      .then((data) => {
        console.log(data);
      });
  }, [searchValue]);

  return <div></div>;
};

export default SearchHints;
