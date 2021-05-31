import { SET_TITLE } from './actionTypes';
import { createAction } from '@reduxjs/toolkit';

export const setTitle = createAction<{ title: string }>(SET_TITLE);
