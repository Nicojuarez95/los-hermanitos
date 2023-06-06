import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Product from "./Product.jsx"
import { Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import lomoClasico from "../images/Captura de pantalla 2023-06-06 160430.png"
import lomoRoque from "../images/LomitoRoque.png"
import lomoAmericano from "../images/lomoAmericano.png"
import americano from "../images/Americano.png"
import argentino from "../images/Argentino.png"
import quesoazul from "../images/quesoazul.png"
import orale from "../images/orale.png"
import polloAmericano from "../images/polloamericano.png"
import mediterraneo from "../images/Mediterraneo.png"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const products = [
  {
    id: 1,
    name: "Lomito clasico",
    productType: "Lomito",
    price: 1600,
    rating: 4.5,
    quantity: 1,
    image: lomoClasico,
    description: "Lomo, lechuga, tomate, queso, jamon, huevo y pan arabe. Ideal para compartir!",
  },
  {
    id: 2,
    name: "Lomito Roque",
    productType: "Lomito",
    price: 1700,
    rating: 4.5,
    quantity: 1,
    image: lomoRoque,
    description: "Pan arabe, lomo, roquefort, cebolla caramelizada, lechuga, tomate",
  },
  {
    id: 3,
    name: "Lomo estilo americano",
    productType: "Lomito",
    price: 1700,
    rating: 4.5,
    quantity: 1,
    image: lomoAmericano,
    description: "Pan arabe, lomo, roquefort, cebolla caramelizada, lechuga, tomate",
  },
  {
    id: 4,
    name: "Americano",
    productType: "Sanguche",
    price: 1400,
    rating: 4.5,
    quantity: 1,
    image: americano,
    description: "Pan brioche/Carne desmenuzada/Panceta/Queso cheddar/Cebolla caramelizada/Barbacoa",
  },
  {
    id: 5,
    name: "Argentino",
    productType: "Sanguche",
    price: 1400,
    rating: 4.5,
    quantity: 1,
    image: argentino,
    description: "Pan brioche/Carne desmenuzada/ Tomate/ Lechuga/ Queso Tybo/ Salsa criolla",
  },
  {
    id: 6,
    name: "Queso Azul",
    productType: "Sanguche",
    price: 1400,
    rating: 4.5,
    quantity: 1,
    image: quesoazul,
    description: "Pan brioche/ Carne desmenuzada/ queso Roquefort/ hongos salteados/cebolla caramelizada",
  },
  {
    id: 7,
    name: "Orale",
    productType: "Sanguche",
    price: 1400,
    rating: 4.5,
    quantity: 1,
    image: orale,
    description: "Pan brioche/Carne desmenuzada/Pimientos tatemados/Queso tybo/Panceta/Salsa sriracha",
  },
  {
    id: 8,
    name: "Pollo Americano",
    productType: "Milanesa",
    price: 1400,
    rating: 4.5,
    quantity: 1,
    image: polloAmericano,
    description: "Pan brioche/Pollo tiernizado frito/Tomates frescos/Aros de cebolla/Queso cheddar",
  },
  {
    id: 9,
    name: "Mediterraneo",
    productType: "Milanesa",
    price: 1400,
    rating: 4.5,
    quantity: 1,
    image: polloAmericano,
    description: "Pan brioche/Pollo tiernizado frita/Lechuga/Tomate/Queso tybo/Jamon",
  },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = React.useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.productType === selectedCategory)
    : products;

  return (
    <>
   
    <Box className="background-image-class" sx={{ flexGrow: 1, padding:1, minHeight:"91.5vh", width: '100%', overflow: 'auto', paddingTop:"10vh"}}>
      <Grid container spacing={1} padding={0}>
        <Grid item xs={12}>
          <FormControl className="custom-form-control">
            <InputLabel id="category-label">Categoría</InputLabel>
            <Select
              labelId="category-label"
              id="category-select"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <MenuItem value="">Todo el menú</MenuItem>
              <MenuItem value="Lomito">Lomito</MenuItem>
              <MenuItem value="Sanguche">Carne Desmenuzada</MenuItem>
              <MenuItem value="Milanesa">Milanesa</MenuItem>
              {/* Agrega más opciones de categorías aquí */}
              
            </Select>
          </FormControl>
        </Grid>
        {
            filteredProducts.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={2} key={product.id} style={{ display:"flex", justifyContent:"center"}}>
                    <Product product={product}/>
                </Grid>
            ))
        }
      </Grid>
    </Box>
    </>
  );
}