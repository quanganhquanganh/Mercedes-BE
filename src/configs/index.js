import { A_WEEK } from '../constants';
import { formatNumber } from '../utils/number';

export const PORT = process.env.PORT || 3000;
export const MONGO_URI = process.env.MONGO_URI;
export const PEPPER = process.env.PEPPER;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
export const JWT_EXPIRES_TIME = formatNumber(
  process.env.JWT_EXPIRES_TIME,
  A_WEEK
);
