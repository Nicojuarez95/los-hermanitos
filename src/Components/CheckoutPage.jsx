import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import CheckoutCard from "./CheckoutCard";
import Total from "./Total";
import { useStateValue } from "../stateProvider";

const CheckoutPage = () => {
  const [{ basket }, dispatch] = useStateValue();

  function FormRow() {
    return (
      <Grid container spacing={1} padding={0} marginTop={1}>
        {basket?.map((item) => (
          <Grid item xs={12} sm={10} md={6} lg={3} key={item.id} style={{ display:"flex", justifyContent:"center"}}>
            <CheckoutCard product={item}/>
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <>
    <div className="carrito">
        <Grid container spacing={2}>   
          <Grid item xs={12} sm={8} md={9} container spacing={3}>
            <FormRow />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography align="center" gutterBottom variant="h4">
              <Total />
            </Typography>
          </Grid>
        </Grid>
    </div>
</>
  );
};

export default CheckoutPage;