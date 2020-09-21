import React from 'react';
import { Typography, TypographyProps } from '@material-ui/core'

interface PriceProps {
    children: number
};

const Price: React.FC<PriceProps & TypographyProps> = ({ children, ...typographyProps }) => {
    return (
        <Typography {...typographyProps} noWrap>
            {`${children.toFixed(2)} `}&euro;
        </Typography>
    );
};

export default Price;
