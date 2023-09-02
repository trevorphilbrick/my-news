import { AppBar, Button, Container, Typography, IconButton, MenuItem, MenuList, ClickAwayListener, Grow, Paper,Popper   } from "@mui/material";
import { useTheme } from "@mui/material";
import * as React from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

type NavbarProps = {
  handleLogout: () => void
}

function NavBar({ handleLogout }: NavbarProps) {
  // const [anchorEl, setAnchorEl] = useState(null);

  const theme = useTheme();

  // const handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleCloseLogout = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
    handleLogout();
  };

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <AppBar sx={{position: 'static', boxShadow: 'none'}}>
      <Container sx={{display: 'flex', flexDirection: 'row'}}>
        <Typography
          variant="h5"
          sx={{
            letterSpacing: "0.3rem",
            fontFamily: "monospace",
            fontWeight: 700,
            marginTop: "0.3em",
            marginBottom: "0.3em",
            mr: 'auto'
          }}
        >
          My News
        </Typography><div style={{zIndex: 1}}>
        <IconButton size="large" sx={{color: theme.palette.primary.contrastText}} ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}><AccountCircleIcon/></IconButton>

<Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-end"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper >
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                    <MenuItem onClick={handleCloseLogout}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper></div>
        {/* <MenuList
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <MenuItem onClick={handleLogout}>Log out</MenuItem>
              </MenuList> */}
      </Container>
    </AppBar>
  );
}

export default NavBar;
