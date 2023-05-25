import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block'}}
    >
      •
    </Box>
  );

  export default function ModuleCard() {
    return (
      <Card sx={{ width: 270, height: 400, borderRadius: 5, boxShadow: 5, marginRight: 5, marginLeft: 5, backgroundColor: "#FF9559" }}>
        <CardMedia>
            {/**
             * The stars picture?
             */}
        </CardMedia>
        <CardContent>
          <Typography align='center' sx={{fontSize: 40, fontFamily: 'Jeju Hallasan'}}>
            Level 2
          </Typography>
          <Typography align='center' sx={{fontSize: 25, fontFamily: 'Jeju Hallasan'}}>
            Advanced
          </Typography>
          <Typography align='center' sx={{fontSize: 25, fontFamily: 'Jeju Hallasan'}}>
            Colour Wheel
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
    );
  }