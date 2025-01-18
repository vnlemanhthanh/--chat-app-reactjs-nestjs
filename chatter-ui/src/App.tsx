import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container>
          <h1>Dark Mode</h1>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;
