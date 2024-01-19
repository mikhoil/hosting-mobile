import AsyncStorage from '@react-native-async-storage/async-storage'
import { attach, createEffect, createEvent, createStore, merge, sample, split } from 'effector'
import { IMod } from './../../api/curse-forge/types'

export const init = createEvent()
export const addModToCart = createEvent<IMod>()
export const removeModFromCart = createEvent<number>()
export const clearModsCart = createEvent()

export const $modsCart = createStore<IMod[]>([])
	.on(init, (state, mods) => mods)
	.on(addModToCart, (state, mod) => [...state, mod])
	.on(removeModFromCart, (state, modId) => state.filter((m) => m.id !== modId))
	.on(clearModsCart, () => [])

const getModsCartFx = createEffect(async () => {
	return JSON.parse((await AsyncStorage.getItem('mods-cart')) ?? '[]')
})

const updateModsCartFx = attach({
	source: $modsCart,
	async effect(mods, payload: IMod | number) {
		try {
			await AsyncStorage.setItem(
				'mods-cart',
				JSON.stringify(
					typeof payload === 'number' ? mods.filter((m) => m.id !== payload) : [...mods, payload]
				)
			)
		} catch (e) {
			console.log(e)
		}
	},
})

const clearModsCartFx = createEffect(async () => await AsyncStorage.removeItem('mods-cart'))

sample({ clock: getModsCartFx.doneData, target: init })
sample({ clock: clearModsCartFx.done, target: clearModsCart })

split({
	source: merge([addModToCart, removeModFromCart]),
	match: {
		add: (payload) => isMod(payload),
		remove: (payload) => typeof payload === 'number',
	},
	cases: {
		add: updateModsCartFx,
		remove: updateModsCartFx,
	},
})

function isMod(payload: IMod | number): payload is IMod {
	return typeof payload !== 'number'
}

init()
