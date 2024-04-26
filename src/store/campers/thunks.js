import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAdverts } from 'api/adverts';

export const getCampersThunk = createAsyncThunk(
  'campers/getCampers',
  async params => {
    return await getAdverts(params);
  }
);

export const getFilteredThunk = createAsyncThunk(
  'campers/getFiltered',
  async filter => {
    const { page, limit, location, transmission, form, equipment } = filter;
    const params = {
      page,
      limit,
      location,
      form,
      transmission,
    };
    equipment.forEach(item => (params[item] = true));

    return await getAdverts(params);
  }
);
