import saverReducer, {
  actions as saverActions,
  selectors as saverSelectors,
} from "./saver";

export const actions = { ...saverActions };

export default { reducers: { saverReducer }, actions: actions };

export const selectors = { ...saverSelectors };
