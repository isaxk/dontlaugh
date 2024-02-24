import { writable } from "svelte/store";

export const currentMicVolume = writable(0);
export const gameStarted = writable(false);
