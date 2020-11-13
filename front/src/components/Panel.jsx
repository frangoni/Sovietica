import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// CONTAINERS
import AdminUsersContainer from "../containers/AdminUsersContainer";
import AdminCategoriesContainer from "../containers/AdminCategoriesContainer";
import AdminAddStockContainer from "../containers/AdminAddStockContainer";
import AdminAddProductsContainer from "../containers/AdminAddProductsContainer";
import AdminProductsContainer from "../containers/AdminProductsContainer";
import AdminStockContainer from "../containers/AdminStockContainer";
import AdminOrdersContainer from "../containers/AdminOrdersContainer"

// ICONOS
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import AddIcon from "@material-ui/icons/Add";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import IconButton from "@material-ui/core/IconButton";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },

  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "10vh",
    overflow: "auto",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Panel() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [items, setItems] = React.useState(1);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
      >
        {open ? (
          <div className={classes.toolbarIcon} >
            <IconButton onClick={handleDrawerOpen} style={{outline:"none"}} >
              <ChevronLeftIcon />
            </IconButton>
          </div>
        ) : (
          <div className={classes.toolbarIcon} >
            <IconButton onClick={handleDrawerOpen} style={{outline:"none"}}>
              <ChevronRightIcon />
            </IconButton>
          </div>
        )}

        <Divider />
        <ListItem button onClick={() => setItems(1)}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Usuarios" />
        </ListItem>
        <ListItem button onClick={() => setItems(2)}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Categorías" />
        </ListItem>

        <ListItem button onClick={() => setItems(5)}>
          <ListItemIcon>
            <ShoppingBasketIcon />
          </ListItemIcon>
          <ListItemText primary="Productos" />
        </ListItem>

        <ListItem button onClick={() => setItems(6)}>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>

          <ListItemText primary="Inventario" />
        </ListItem>
        <ListItem button onClick={() => setItems(7)}>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Ordenes" />
        </ListItem>

        <ListItem button onClick={() => setItems(3)}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Añadir Productos" />
        </ListItem>

        <ListItem button onClick={() => setItems(4)}>
          <ListItemIcon>
            <PlaylistAddIcon />
          </ListItemIcon>
          <ListItemText primary="Añadir Stock" />
        </ListItem>
        <Divider />
      </Drawer>

      <Container maxWidth="lg" className={classes.container}>
        <Grid>
          <Grid item xs={12}>
            {items == 1 && <AdminUsersContainer />}
          </Grid>
          <Grid item xs={12}>
            {items == 2 && <AdminCategoriesContainer />}
          </Grid>
          <Grid item xs={12}>
            {items == 3 && <AdminAddProductsContainer />}
          </Grid>
          <Grid item xs={12}>
            {items == 4 && <AdminAddStockContainer />}
          </Grid>
          <Grid item xs={12}>
            {items == 5 && <AdminProductsContainer />}
          </Grid>
          <Grid item xs={12}>
            {items == 6 && <AdminStockContainer />}
          </Grid>
          <Grid item xs={12}>
            {items == 7 && <AdminOrdersContainer />}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}


