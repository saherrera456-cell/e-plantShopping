import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Inicializa los items como un arreglo vacío
  },
  reducers: {
    // 1. Reducer para agregar un ítem
    addItem: (state, action) => {
      const { name, image, cost } = action.payload; 
      const existingItem = state.items.find(item => item.name === name);
      
      if (existingItem) {
        // Si el ítem ya existe en el carrito, incrementa su cantidad
        existingItem.quantity++;
      } else {
        // Si no existe, lo agrega con cantidad 1
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    
    // 2. Reducer para eliminar un ítem completamente
    removeItem: (state, action) => {
      // Filtra el arreglo dejando solo los ítems cuyo nombre NO coincida con el payload
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    
    // 3. Reducer para actualizar una cantidad específica
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; 
      const itemToUpdate = state.items.find(item => item.name === name);
      
      if (itemToUpdate) {
        // Si encuentra el ítem, actualiza su cantidad al nuevo valor
        itemToUpdate.quantity = quantity; 
      }
    },
  },
});

// Exportamos las acciones para usarlas en los componentes visuales
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Exportamos el reducer por defecto para conectarlo en el store.js
export default CartSlice.reducer;
