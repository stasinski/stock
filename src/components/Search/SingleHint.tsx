import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useDispatch } from "react-redux";
import { setActiveStock } from "../../store/search/searchManager";

interface Props {
  stock: {
    symbol: string;
    name: string;
    region: string;
  };
}

const useStyle = makeStyles({
  root: {
    margin: 8,
    cursor: "pointer",
    maxWidth: 200,
  },
});

const SingleHint: React.FC<Props> = ({ stock }) => {
  const style = useStyle();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setActiveStock({ activeStock: stock.symbol }));
  };
  return (
    <Grid
      onClick={handleClick}
      className={style.root}
      item
      xs={6}
      sm={4}
      md={2}>
      <Card>
        <CardHeader title={stock.symbol} />
        <CardContent>
          <Typography variant="h6">{stock.name}</Typography>
          <Typography component="p">{stock.region}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SingleHint;
