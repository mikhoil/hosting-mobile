import { createEvent, createStore } from 'effector'

const setServerHash = createEvent<string>()

const resetServerHash = createEvent()

const $serverHash = createStore<string | undefined | null>(null)
	.on(setServerHash, (_, serverHash) => serverHash)
	.reset(resetServerHash)

export { $serverHash, resetServerHash, setServerHash }
