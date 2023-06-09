import { CartItem } from '@/types/types';
import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';

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
    ADD_TO_CART(state, payload) {
      const cartItem = state.cart.find((item) => item.title === payload.title);
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.cart.push(payload);
      }
      state.cartQuantity = state.cartQuantity + 1;
    },
  },
  actions: {
    addToCart({ commit }, payload) {
      commit('ADD_TO_CART', payload);
    },
  },
});
