export interface CapacitorAppRatePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
