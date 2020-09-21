import React from 'react';
import {Box, Typography, Grid, CircularProgress} from '@material-ui/core';
import { AmortisationTableContainer } from 'containers'
import { Price } from 'components'

interface AmortisationOverviewProps {
    amortisation: any,
    isLoading: boolean,
    error: any
}

const AmortisationOverview = ({ amortisation, isLoading, error }: AmortisationOverviewProps) => {

    if (!amortisation && isLoading) return <CircularProgress variant={'indeterminate'}/>
    if (error) return <Typography color="error" align={"center"} variant={'h6'}>Ups da ist etwas schief gelaufen</Typography>

    return amortisation ? (
        <Box mt={2}>
            <Box>
                <Typography variant={'h3'} align={"center"}>Tilgungsplan</Typography>
                <Grid container spacing={1}>
                    <Grid item xs={5} sm={3}><Typography>monatliche Rate:</Typography></Grid>
                    <Grid item xs={7} sm={9}><Price>{ amortisation.monthlyLoanRate }</Price></Grid>
                    <Grid item xs={5} sm={3}><Typography>RestSchuld:</Typography></Grid>
                    <Grid item xs={7} sm={9}><Price>{ amortisation.balanceDueAfterFixedInterestRate }</Price></Grid>
                </Grid>
            </Box>
         <AmortisationTableContainer />
        </Box>
    ) : null;
};

export default AmortisationOverview;
