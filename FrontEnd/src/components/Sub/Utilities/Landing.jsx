import { Box, Container, Typography } from "@mui/material";
import AccordionComponent from "./AccordionComponent";
export default function Landing() {
  return (
    <>
      <Box sx={{ mt: "15rem" }}>
        <Container>
          <Typography variant="h4" sx={{ textAlign: "center", mb: "3rem" }}>
            Welcome To File Bank
          </Typography>
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              mb: "4rem",
              flexDirection: { sm: "column", md: "row" },
              alignItems: { sm: "center", md: "start" },
              gap: "2rem",
            }}
          >
            <AccordionComponent title="TD" />
            <AccordionComponent title="TP" />
            <AccordionComponent title="COURSE" />
          </Box>
        </Container>
      </Box>
    </>
  );
}
