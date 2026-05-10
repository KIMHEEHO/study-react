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
  Tabs,
  Tab
} = MaterialUI;

function App() {
  const [tab1CurrentIndex, setTab1CurrentIndex] = useState(0);
  return (
    <>
      <Tabs value={tab1CurrentIndex} onChange={(_,newValue) => setTab1CurrentIndex(newValue)}
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three"  />
      </Tabs>
      {tab1CurrentIndex == 0 && <div>내용1</div>}
       {tab1CurrentIndex == 1 && <div>내용2</div>}
       {tab1CurrentIndex == 2 && <div>내용3</div>}
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
