import { initQueryClient } from '@ts-rest/react-query';
import { testContract } from '../../contracts/test-contract';

export const edgeApi = initQueryClient(testContract, {
  baseUrl: 'http://localhost:4200/api/edge',
  baseHeaders: {},
});
