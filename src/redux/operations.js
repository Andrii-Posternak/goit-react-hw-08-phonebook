import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactApi,
  deleteContactApi,
  fetchContactsApi,
  updateContactApi,
} from 'services/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      return await fetchContactsApi();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      return await addContactApi(newContact);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await deleteContactApi(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const updateContact = createAsyncThunk(
//   'contacts/updateContact',
//   async (id, thunkAPI) => {
//     try {
//       await updateContactApi(id);
//       return id;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
