import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProductCard from './ProductCard.jsx'

const handleAgregarCarrito = (estaEnCarrito) => {
  if (estaEnCarrito) {
    console.log('Producto quitado del carrito');
  } else {
    console.log('Producto agregado al carrito');
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div style={{ 
      padding: '20px',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f7fafc'
    }}>
      <ProductCard 
        nombre="Zapatillas Nike Air"
        precio={59999}
        imagen="https://tse2.mm.bing.net/th/id/OIP.QrU3j64RLbDWe1HRmzGukwHaFS?rs=1&pid=ImgDetMain&o=7&rm=3"
        onAgregarCarrito={handleAgregarCarrito}
      >
        ¡Nuevo Modelo!
      </ProductCard>
    </div>
  </StrictMode>,
)
