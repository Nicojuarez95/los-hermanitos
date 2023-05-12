import React from "react";
import { Typography } from "@mui/material";
import { css } from '@emotion/react';
import Grid from "@mui/material/Grid";
import CheckoutCard from "./CheckoutCard"
import Total from "./Total";
import { useStateValue } from '../stateProvider';

const useStyles = () => ({
    root: css({
      flexGrow: 1,
      padding: "2rem",
    }),
  });

const CheckoutPage = () => {
    const classes = useStyles();
    const [{basket}, dispatch] = useStateValue()

    function FormRow() {
        return(
            <Grid container spacing={1} padding={0} >
                {basket?.map((item) => (
                    <Grid item xs={6} sm={10} md={6} lg={3}>
                        <CheckoutCard key={item.id} product={item}/>
                    </Grid>
                ))}
            </Grid>
        )
    }
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography align="center" gutterBottom variant='h4'>
                        Carrito de compra
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={9} container spacing={2}>
                    <FormRow/> 
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Typography align="center" gutterBottom variant='h4'>
                        <Total/>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};
export default CheckoutPage;