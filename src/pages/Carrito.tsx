// src/pages/Carrito.tsx
import { useCart } from '../data/CartContext';

const Carrito = () => {
  const { items, eliminarItem, actualizarCantidad, total } = useCart();
  const payment = () => {
    alert('Esto es un simulacro de pago, no es real')
  }
  console.log(items)
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Mi Carrito</h1>
      
      {items.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center border p-4 rounded">
              {item.imagen && (
                <img 
                  src={item.imagen} 
                  alt={item.nombre} 
                  className="w-20 h-20 object-cover"
                />
              )}
              
              <div>
                <h3 className="font-medium">{item.nombre}</h3>
                <p>${item.precio}</p>
              </div>
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span>{item.cantidad}</span>
                <button 
                  onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
                
                <button 
                  onClick={() => eliminarItem(item.id)}
                  className="ml-4 text-red-500"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          
          <div className="mt-6">
            <div className="text-right mb-4">
              <p className="text-xl font-bold">
                Total: ${total.toFixed(2)}
              </p>
            </div>
            
            <button 
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              onClick={() => {payment()}}
            >
              Proceder al pago
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;