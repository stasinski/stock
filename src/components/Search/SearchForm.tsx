import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const useStyle = makeStyles({
  form: {
    marginTop: 16,
  },
  input: {
    fontSize: 32,
  },
});
const SearchForm: React.FC<Props> = ({ searchValue, setSearchValue }) => {
  const classes = useStyle();
  return (
    <form className={classes.form}>
      <TextField
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        label="Search a stock"
        className={classes.input}
        type="text"
      />
    </form>
  );
};

export default SearchForm;
