import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from '../components/MainFeaturedPost';


import Copyright from '../components/Copyright';
import ImageCard from '../components/ImageCard';


import TopImage from "../public/IMG_7707.jpg"

const inter = Inter({ subsets: ['latin'] })
const cards = [1, 2, 3, 4, 5, 6];

const theme = createTheme();


const mainFeaturedPost = {
  title: 'My Photo Gallary',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  //"",
  image: 'https://source.unsplash.com/user/i14nakatukasa',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" style={{ color: "#e0f2f1", backgroundColor: "#004d40" }}>
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            My Photograph
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        {/* <Image src={TopImage} alt="Image" /> */}
        <MainFeaturedPost post={mainFeaturedPost} />
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={2}>
            {cards.map((card) => {
              return (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <ImageCard />
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}