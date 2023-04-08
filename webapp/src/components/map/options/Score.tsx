import {ScoreType} from "../../../shared/shareddtypes";
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';


function Score({title}: ScoreType) {
    const [value, setValue] = React.useState<number | null>(2);
    const [hover, setHover] = React.useState(-1);

    return (
        <div id="rating">
            <h2>{title}</h2>
            <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}

                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
                <Box id="score" sx={{ ml: 2 }}>{hover !== -1 ? hover : value}</Box>
            )}
        </div>
    )
}

export default Score