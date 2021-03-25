import { Grid } from "@material-ui/core";
import React from "react";

interface Props {
  stock: {
    symbol: string;
    name: string;
    type: string;
    region: string;
  };
}

const SingleHint: React.FC<Props> = ({ stock }) => {
  return (
    <Grid item xs={6} sm={4} md={2}>
      {stock.name}
    </Grid>
  );
};

export default SingleHint;
