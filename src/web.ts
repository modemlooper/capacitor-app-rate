import { WebPlugin } from '@capacitor/core';

import type { CapacitorAppRatePlugin } from './definitions';

export class CapacitorAppRateWeb
  extends WebPlugin
  implements CapacitorAppRatePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
