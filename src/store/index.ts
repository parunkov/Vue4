import { CartItem } from '@/types/types';
import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export interface State {
  cart: CartItem[];
  cartQuantity: number;
}

export const key: InjectionKey<Store<State>> = Symbol();

const emptyCart: CartItem[] = new Array<CartItem>();
export const store = createStore<State>({
  state: {
    cart: emptyCart,
    cartQuantity: 0,
  },
  mutations: {
    ADD_TO_CART(state, payload): void {
      const cartItem: CartItem | undefined = state.cart.find(
        (item) =>
          item.title === payload.title &&
          item.brandName === payload.brandName &&
          item.color === payload.color &&
          item.size === payload.size,
      );
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.cart.push(payload);
      }
      state.cartQuantity = state.cart.reduce((summ, item) => summ + item.quantity, 0);
    },
    REMOVE_FROM_CART(state, payload): void {
      const cartItem: CartItem | undefined = state.cart.find(
        (item) =>
          item.title === payload.title &&
          item.brandName === payload.brandName &&
          item.color === payload.color &&
          item.size === payload.size,
      );
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      } else {
        const newCart: CartItem[] = state.cart.filter((item) => item.title !== payload.title);
        state.cart = newCart;
      }
      state.cartQuantity = state.cart.reduce((summ, item) => summ + item.quantity, 0);
    },
    REMOVE_PRODUCT(state, payload): void {
      const newCart: CartItem[] = state.cart.filter(
        (item) =>
          !(
            item.title === payload.title &&
            item.brandName === payload.brandName &&
            item.color === payload.color &&
            item.size === payload.size
          ),
      );
      state.cart = newCart;
      state.cartQuantity = state.cart.reduce((summ, item) => summ + item.quantity, 0);
    },
  },
  actions: {
    addToCart({ commit }, payload): void {
      commit('ADD_TO_CART', payload);
    },
    removeFromCart({ commit }, payload): void {
      commit('REMOVE_FROM_CART', payload);
    },
    removeProduct({ commit }, payload): void {
      commit('REMOVE_PRODUCT', payload);
    },
  },
  plugins: [createPersistedState()],
});
