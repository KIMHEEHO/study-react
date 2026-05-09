import classnames from "https://cdn.skypack.dev/classnames";

const {
  colors,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Link,
  Button,
  AppBar,
  Toolbar
} = MaterialUI;

function App() {
  return (
    <>
      <div className="flex gap-3 p-3">
        <Button
          color="secondary"
          onClick={() => {
            alert("버튼 클릭 이벤트 발생!");
          }}
          variant="text"
        >
          Text
        </Button>
        <Button
          variant="contained"
          color="success"
          startIcon={
            <i
              className="fa-solid fa-message"
              style={{ fontSize: "1.5rem" }}
            ></i>
          }
        >
          Contained
        </Button>
        <Button variant="outlined" color="error">
          Outlined
        </Button>
      </div>
      <hr />
      {/** 이렇게 버튼의 사이즈가 다른 경우에 flex를 주면 상향 평준화가 되어버림
      평준화를 풀고싶다? 하면 items-start를 같이 써주면 됨! **/}
      <div className="flex items-start p-3 gap-3">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </div>
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
