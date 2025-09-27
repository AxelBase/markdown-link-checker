import { writable } from 'svelte/store';

interface Config {
  timeout: number;
  ignorePatterns: string[];
  externalOnly: boolean;
  concurrency: number;
}

export const config = writable<Config>({
  timeout: 5000, // Default 5 seconds
  ignorePatterns: [], // Default no patterns
  externalOnly: false, // Default include all
  concurrency: 5 // Default parallel requests
});