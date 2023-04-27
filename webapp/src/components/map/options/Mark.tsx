import {ScoreType} from "../../../shared/shareddtypes";
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';


function Mark({title, id}: ScoreType) {
    const [value, setValue] = React.useState<number | null>(0);
    const [hover, setHover] = React.useState(-1);

    return (
        <div>
            <h2>{title}</h2>
            <div id="rating">
                <Rating
                    name="size-large"
                    value={value}
                    precision={1}
                    size={"large"}

                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                        setHover(newHover);
                    }}
                    emptyIcon={<StarIcon style={{opacity: 0.55}} fontSize="inherit"/>}
                />
                {value !== null && (
                    <Box id={id} sx={{ml: 3}}>{hover !== -1 ? hover : value}</Box>
                )}
            </div>
        </div>
    )
}

export default Mark