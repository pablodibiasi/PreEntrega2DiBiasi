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
    title: 'Cajonera',
    description: 'Mueble de madera paraiso a medida, hidrolaqueada',
    price: 10000,
    pictureUrl: cajonera,
    categoria: 'Dormitorio',
  },
  {
    id: 2,
    title: 'Recibidor 2 cajones',
    description:
      'Mueble de madera Paraiso a medida, dos cajones mas estantes, hidrolaca satinada.',
    price: 10000,
    pictureUrl: mesa2,
    categoria: 'Living',
  },
  {
    id: 3,
    title: 'Recibidor con 1 cajon',
    description:
      'Mueble de madera Paraiso a medida, 1 cajon mas estantes, hidrolaca satinada.',
    price: 10000,
    pictureUrl: mesa3,
    categoria: 'Living',
  },
  {
    id: 4,
    title: 'Recibidor basico',
    description: 'Mueble de madera paraiso, hidrolaca satinada, a medida',
    price: 10000,
    pictureUrl: mesa4,
    categoria: 'Living',
  },
  {
    id: 5,
    title: 'Escritorio',
    description:
      'Mueble de madera Paraiso a medida, dos cajones mas estantes, hidrolaca satinada.',
    price: 10000,
    pictureUrl: mesa5,
    categoria: 'Oficina',
  },
  {
    id: 6,
    title: 'Mesa de Luz',
    description:
      'mueble de madera Paraiso a medida, 1 cajon, hidrolaca satinada.',
    price: 10000,
    pictureUrl: mesaluz,
    categoria: 'Dormitorio',
  },
  {
    id: 7,
    title: 'Mesa movil',
    description: 'mueble de madera Paraiso a medida, hidrolaca satinada.',
    price: 10000,
    pictureUrl: mesamovil,
    categoria: 'Living',
  },
  {
    id: 8,
    title: 'Mesa plegable',
    description: 'mueble de madera Paraiso a medida, hidrolaca satinada.',
    price: 10000,
    pictureUrl: mesaplegable,
    categoria: 'Living',
  },
  {
    id: 9,
    title: 'Mesa ratona Oslo',
    description:
      'mueble de madera Paraiso, patas macizas y tapa enchapado natural,terminacion hidrolaca satinada, a medida',
    price: 20000,
    pictureUrl: mesaRatona,
    categoria: 'Living',
  },
  {
    id: 10,
    title: 'Vinoteca',
    description: 'Mueble de madera Paraiso a medida,',
    price: 10000,
    pictureUrl: vinoteca,
    categoria: 'Cocina',
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
