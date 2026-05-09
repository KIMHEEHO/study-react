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
      <AppBar position="fixed">
        <Toolbar>
          <div className="flex-1"><span><i className="fa-solid fa-bars"></i></span></div>
          <span className="font-bold">HAPPY NOTE</span>
            <div className="flex-1 flex justify-end">글쓰기</div> 
        </Toolbar>
      </AppBar>
      
      {/** 높이 잡아주는 역할 **/}
      <Toolbar />
      <div>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quaerat, asperiores totam facilis optio velit nesciunt cumque impedit quasi harum ipsum, hic repudiandae aliquam id nisi autem officiis necessitatibus repellat.
  Itaque in esse, optio alias voluptatum quisquam consequatur quo illo ab, quod magni at iure eius accusantium perferendis accusamus dolorum consectetur molestiae soluta maiores! Quia nisi quisquam sequi dignissimos soluta!
  Obcaecati nihil quod repellendus praesentium nesciunt eaque, consequatur vel deserunt illum, omnis natus voluptas, expedita repellat quaerat nulla! Doloremque facere itaque officia? Quos magni ullam mollitia quisquam expedita corrupti. Illum.
  Totam quis quod tempora distinctio eveniet officia voluptatum praesentium aperiam, architecto non, eos, sequi accusantium eius rerum porro vero? Ratione, dolore! Alias tempore dolorem odit distinctio vero quia expedita cum?
  Blanditiis nobis quasi debitis eum cupiditate dolorem officia numquam sapiente minus reprehenderit asperiores, est quas vero explicabo beatae repudiandae. Esse, veritatis quod. Eaque nam ab, quos quia id accusantium animi!
  Odit at, sint quisquam suscipit atque fugit vitae quidem, eligendi quos aperiam, esse nemo quo minima velit a quibusdam. Expedita voluptatem ab blanditiis voluptates explicabo autem quis, aliquam adipisci aliquid.
  Odio amet quibusdam nobis ipsam exercitationem cum sequi dicta? Id inventore ea, quae placeat sequi provident doloribus non voluptas dolorem nisi nulla quidem nesciunt, laboriosam ad illum fugit laudantium! Ducimus!
  Culpa, tempore ipsa, natus quidem earum hic quas fugiat animi blanditiis provident quis cumque, enim optio aperiam. Totam pariatur tempora necessitatibus saepe fugiat porro rem illum animi blanditiis. Perspiciatis, similique.
  Doloremque laudantium nam facilis quasi rem dolor beatae ad necessitatibus libero quisquam, recusandae placeat accusamus aliquam aperiam, dolores laboriosam amet expedita nostrum perferendis dicta ipsum facere? Aperiam eaque voluptatem laudantium.
  Quis totam eaque ea corporis! Dolore asperiores, tenetur amet labore similique sit. Quas eius mollitia qui quibusdam, hic totam quo ullam magnam. Pariatur enim alias quod facere veniam harum impedit!
  
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
