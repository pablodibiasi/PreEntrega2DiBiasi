import cajonera from '../imagenes/cajonera.jpg'
import mesa2 from '../imagenes/mesa2.jpg'
import mesa3 from '../imagenes/mesa3.jpg'
import mesa4 from '../imagenes/mesa4.jpg'
import mesa5 from '../imagenes/mesa5.jpg'
import mesaluz from '../imagenes/mesaluz.jpg'
import mesamovil from '../imagenes/mesamovil.jpg'
import mesaplegable from '../imagenes/mesaplegable.jpg'
import mesaRatona from '../imagenes/mesaRatona.jpg'
import vinoteca from '../imagenes/vinoteca.jpg'

export const productos = [
  {
    id: 1,
    title: 'cajonera',
    description: 'mueble de madera a medida',
    price: 7000,
    pictureUrl: cajonera,
    categoria: 'dormitorio',
  },
  {
    id: 2,
    title: 'mesa 2',
    description: 'mueble de madera a medida',
    price: 10000,
    pictureUrl: mesa2,
    categoria: 'living',
  },
  {
    id: 3,
    title: 'mesa 3',
    description: 'mueble de madera a medida',
    price: 10000,
    pictureUrl: mesa3,
    categoria: 'living',
  },
  {
    id: 4,
    title: 'mesa 4',
    description: 'mueble de madera a medida',
    price: 10000,
    pictureUrl: mesa4,
    categoria: 'living',
  },
  {
    id: 5,
    title: 'mesa 5',
    description: 'mueble de madera a medida',
    price: 10000,
    pictureUrl: mesa5,
    categoria: 'oficina',
  },
  {
    id: 6,
    title: 'mesa Luz',
    description: 'mueble de madera a medida',
    price: 10000,
    pictureUrl: mesaluz,
    categoria: 'dormitorio',
  },
  {
    id: 7,
    title: 'mesa movil',
    description: 'mueble de madera a medida',
    price: 10000,
    pictureUrl: mesamovil,
    categoria: 'living',
  },
  {
    id: 8,
    title: 'mesa plegable',
    description: 'mueble de madera a medida',
    price: 10000,
    pictureUrl: mesaplegable,
    categoria: 'living',
  },
  {
    id: 9,
    title: 'mesa Ratona',
    description: 'mueble de madera a medida',
    price: 10000,
    pictureUrl: mesaRatona,
    categoria: 'living',
  },
  {
    id: 10,
    title: 'vinoteca',
    description: 'mueble de madera a medida',
    price: 10000,
    pictureUrl: vinoteca,
    categoria: 'cocina',
  },
]

export const getProducts = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(productos)
    }, 2000)
  })
}

// export const getItem = () => {
//   return new Promise((res) => {
//     productos.find((product) => product.id == id)

//     setTimeout(() => {
//       res(productos)
//     }, 2000)
//   })

export const getProduct = (iditem) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos)
    }, 2000)
  })
}
