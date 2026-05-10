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
  Drawer,
  List,
  ListItem
} = MaterialUI;

function App() {
  const anchor = "left";
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        안녕
      </Button>
      <Drawer anchor={anchor} open={open} onClose={() => setOpen(false)}>
        <List>
          <ListItem button onClick={()=>alert('내용1 클릭!')}>내용1</ListItem>
          <ListItem>내용2</ListItem>
          <ListItem>내용3</ListItem>
        </List>
      </Drawer>
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
