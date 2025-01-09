import PropTypes from "prop-types";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  Box,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PictureAsPdf } from "@mui/icons-material";
import DescriptionIcon from "@mui/icons-material/Description";

export default function AccordionComponent({ title }) {
  const theme = useTheme();

  const accordionData = [
    [
      "Element 2.pdf",
      "Element 3.docx",
      "Element 15.pdf",
      "Element 6.docx",
      "Element 7.pdf",
      "Element 9.docx",
      "Element 12.pdf",
      "Element 13.docx",
    ],
  ];

  return (
    <Box sx={{ mt: "2rem" }}>
      <Accordion sx={{ width: { sm: "80vw", md: "20vw" } }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0" }}>
          <List sx={{ width: "100%" }}>
            {accordionData[0].map((element, index) => {
              const isWord = element.toLowerCase().endsWith(".docx");
              return (
                <ListItem
                  key={index}
                  sx={{
                    backgroundColor: theme.palette.background.paper,
                    paddingTop: "1rem",
                    textAlign: "center",
                    width: "100%", // Make sure each item takes full width
                    display: "flex",
                    justifyContent: "space-between",
                    "&:hover": {
                      cursor: "pointer",
                      backgroundColor: theme.palette.background.default,
                    },
                  }}
                >
                  <Typography>{element}</Typography>
                  <Typography>
                    {isWord ? (
                      <DescriptionIcon sx={{ color: "blue" }} />
                    ) : (
                      <PictureAsPdf sx={{ color: "red" }} />
                    )}
                  </Typography>
                </ListItem>
              );
            })}
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

// Prop validation using PropTypes
AccordionComponent.propTypes = {
  title: PropTypes.string.isRequired,
};
