import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useMediaQuery } from 'react-responsive'
import "./Module3Card.css"

  export default function ModuleCard() {

    const StyledCard = styled(Card)(({ theme }) => ({
      "&:hover": { transform: "scale3d(1.02, 1.02, 1)" },
    }))

    return (
      <Link to={"/modules/3"}>
        <StyledCard className={"module-3-card"} sx={{ width: 400, height: 500, borderRadius: 5, boxShadow: 5, border: 4, backgroundColor: "#FF6666" }}>
            <CardContent>
                <div className="level-title">
                  <Typography align='center' sx={{fontSize: 50, fontFamily: 'Jeju Hallasan'}}>
                    Level 3
                  </Typography>
                </div>
                <div className="module-title">
                  <Typography align='center' sx={{fontSize: 30, fontFamily: 'Jeju Hallasan'}}>
                    Colour Concepts
                  </Typography>
                </div>
            </CardContent>
            <CardMedia
              className={"colour-concepts-image"}
              image={require('../../images/navigation-images/colour_concepts.png')}
              title="Colour concepts image"
              sx={{height: 220, width: 270, objectFit: "contain", marginLeft: 8, marginTop: 8}}
            />
            <CardActions>
            </CardActions>
        </StyledCard>
      </Link>
    );
  }