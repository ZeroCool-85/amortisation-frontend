import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableHead,
    TableContainer,
    Paper,
    Box
} from '@material-ui/core'
import Price from '../../atoms/Price/Price'

interface AmortisationTableProps {
    amortisation: any
}


const AmortisationTable = ({ amortisation }: AmortisationTableProps) => {
    return (
        <Box pt={2}>
            <TableContainer component={Paper}>
                <Table aria-label="amortisation table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Jahr</TableCell>
                            <TableCell align="right">Rate</TableCell>
                            <TableCell align="right">Zinsen</TableCell>
                            <TableCell align="right">Tilgung</TableCell>
                            <TableCell align="right">Restschuld</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {amortisation?.amortisationSchedule.map((row: any) => (
                            <TableRow key={row.year}>
                                <TableCell component="th" scope="row">
                                    {row.year}
                                </TableCell>
                                <TableCell align="right">
                                    <Price>{row.rate}</Price>
                                </TableCell>
                                <TableCell align="right">
                                    <Price>{row.interestPortion}</Price>
                                </TableCell>
                                <TableCell align="right">
                                    <Price>{row.amortisationPortion}</Price>
                                </TableCell>
                                <TableCell align="right">
                                    <Price>{row.balanceDue}</Price>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default AmortisationTable;
