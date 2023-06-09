import { CartItem } from '@/types/types';
import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';

export interface State {
  cart: CartItem[];
}

export const key: InjectionKey<Store<State>> = Symbol();

const emptyCart: CartItem[] = new Array<CartItem>();
export const store = createStore<State>({
  state: {
    cart: emptyCart,
  },
  mutations: {
    ADD_TO_CART(state, payload) {
      console.log(payload);
      state.cart.push(payload);
    },
  },
  actions: {
    addToCart({ commit }, payload) {
      commit('ADD_TO_CART', payload);
    },
  },
});
