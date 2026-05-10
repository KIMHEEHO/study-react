console.clear();

const { useState } = React;

import classNames from "https://esm.sh/classnames";

const {
  colors,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Link,
  Button,
  AppBar,
  Toolbar,
  Backdrop,
  CircularProgress
} = MaterialUI;

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="contained" onClick={()=>setOpen(true)}>안녕</Button>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        onClick={()=>setOpen(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

function Root() {
  // Create a theme instance.
  const theme = createTheme({
    typography: {
      fontFamily: ["GmarketSansMedium"]
    },
    palette: {
      primary: {
        main: "#ff8686",
        contrastText: "#ffffff"
      }
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
