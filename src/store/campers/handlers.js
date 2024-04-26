import { TOTAL_CAMPERS } from 'constants/campers';

export const handlePending = (state, { meta }) => {
  const { page } = meta.arg;
  if (page === 1) state.items = [];
  state.page = page;
  state.error = null;
  state.isLoading = true;
  state.isLoadMore = false;
};

export const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};

export const handleFulfilled = (state, { meta, payload }) => {
  const { limit } = meta.arg;
  state.isLoading = false;
  state.isLoaded = true;
  state.items = state.items.concat(payload);
  state.isLoadMore =
    limit < TOTAL_CAMPERS
      ? state.page < Math.ceil(TOTAL_CAMPERS / limit)
      : false;
};
