import { EntitySchema } from 'typeorm';
import { Address } from '../../domain/entities';

export const AddressSchema = new EntitySchema<Address>({
  name: 'User',
  target: Address,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    zipCode: {
      type: String,
    },
  },
  relations: {
    user: {
      type: 'many-to-one',
      target: 'User',
    },
  },
});
