import { AppBar, Toolbar, Box } from "@mui/material";
import Link from "../Link/Link";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header>
      <AppBar position="static" elevation={0} color="transparent">
        <Toolbar sx={{ justifyContent: "space-between", padding: "0" }}>
          <Link href="/">
            <Logo />
          </Link>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
};
export default Header;
