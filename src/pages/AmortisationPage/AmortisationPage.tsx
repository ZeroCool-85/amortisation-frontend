import React from 'react';
import {
    AmortisationFormContainer,
    AmortisationOverviewContainer
} from 'containers'
import {Box, Container, Grid, Typography} from '@material-ui/core';

const AmortisationPage = () => {
    return (
        <Container maxWidth={'md'}>
            <Box py={4}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography align={"center"} color={"primary"} variant={"h2"}>Tilgungsrechner</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <AmortisationFormContainer />
                    </Grid>
                    <Grid item xs={12}>
                        <AmortisationOverviewContainer />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AmortisationPage;
