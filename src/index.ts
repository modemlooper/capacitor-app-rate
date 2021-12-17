import { registerPlugin } from '@capacitor/core';

import type { CapacitorAppRatePlugin } from './definitions';

const CapacitorAppRate = registerPlugin<CapacitorAppRatePlugin>(
  'CapacitorAppRate',
  {
    web: () => import('./web').then(m => new m.CapacitorAppRateWeb()),
  },
);

export * from './definitions';
export { CapacitorAppRate };
