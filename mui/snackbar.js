const { useState, useRef } = React;

import classnames from "https://esm.sh/classnames";

const {
  colors,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Link,
  Button,
  AppBar,
  Toolbar,
  Snackbar,
  Alert: MuiAlert
} = MaterialUI;

// Snackbar가 자식 컴포넌트에 ref를 전달할 수 있도록
// Alert 컴포넌트를 React.forwardRef로 감싸줌
const Alert = React.forwardRef((props, ref) => {
  return <MuiAlert {...props} ref={ref} variant="filled" />;
});

function App() {
  const [open, setOpen] = useState(false);

  const alertRef = useRef(null);
  
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open simple snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="success">게시물이 삭제되었습니다.</Alert>
      </Snackbar>
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
