// import React from "react";

// const Testimonials = () => {
//   return (
//     <div>
//       <div className="testimonials">This is my Testimonials</div>
//     </div>
//   );
// };

// export default Testimonials;
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Avatar,
} from "@mui/material";

const testimonials = [
  {
    text: "Thanks to GeniusSchool, I've improved my English speaking skills...",
    name: "Jane Doe",
    image: "profile.jpg",
  },
  {
    text: "Joining the group sessions at GeniusSchool has been a game-changer...",
    name: "Jane Doe",
    image: "profile.jpg",
  },
  {
    text: "Learning English at GeniusSchool has been incredible...",
    name: "Jane Doe",
    image: "profile.jpg",
  },
  {
    text: "The teachers are amazing and the lessons are well-structured.",
    name: "John Smith",
    image: "profile.jpg",
  },
  {
    text: "I have made significant progress thanks to GeniusSchool.",
    name: "Emily Johnson",
    image: "profile.jpg",
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <Card style={{ height: 320, width: 346, margin: "auto" }}>
      {/* style={{ width: 346, height: 320 }} */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {testimonial.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container alignItems="center">
          <Grid item>
            <Avatar alt={testimonial.name} src={testimonial.image} />
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" style={{ marginLeft: 8 }}>
              {testimonial.name}
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 300,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    partialVisibilityGutter: 300,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
    partialVisibilityGutter: 300,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 100,
  },
};

export default function Testimonial() {
  return (
    <div style={{ maxWidth: 1400 }}>
      <Carousel
        responsive={responsive}
        infinite={true}
        arrows={true}
        containerClass="carousel-container"
      >
        {testimonials.map((item, i) => (
          <TestimonialCard key={i} testimonial={item} />
        ))}
      </Carousel>
    </div>
  );
}
