import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import YinTeacher from "../../../assets/yin-teacher.jpeg";
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const YinTeacherCard = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title="Paola Meffan" subheader="Yin Yoga" />
      <CardMedia
        component="img"
        height="194"
        image={YinTeacher}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Paola Meffan is a compassionate and insightful Yin yoga instructor
          with a nurturing approach that invites deep relaxation and
          introspection.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Paola specializes in the gentle, meditative practice of Yin yoga,
            focusing on passive holds that deeply stretch the connective tissues
            and promote healing and flexibility. Her teaching style emphasizes
            mindfulness and the subtle energetics of the body, guiding students
            to explore the inner landscapes of their emotions and thoughts
            through sustained poses and calming breathwork.
          </Typography>
          <Typography paragraph>
            With a soothing voice and a profound understanding of anatomy and
            mind-body connections, Paola creates a supportive and safe space for
            students of all levels to unwind and reconnect with themselves. Her
            classes are a haven for those looking to escape the hustle of
            everyday life and find a moment of peace and stillness. Under
            Paola's gentle guidance, students learn to embrace stillness,
            cultivate patience, and nurture their own wellbeing.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default YinTeacherCard;
