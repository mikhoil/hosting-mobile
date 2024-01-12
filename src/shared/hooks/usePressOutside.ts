// import { Component, RefObject } from 'react'

// import useEventListener from './useУvent-listener'

// type Handler = (event: MouseEvent) => void

// export function usePressOutside<T extends Component = Component>(
// 	ref: RefObject<T>,
// 	handler: Handler,
// 	mouseEvent: 'mousedown' | 'mouseup' = 'mousedown'
// ): void {
// 	useEventListener(mouseEvent, (event) => {
// 		const el = ref?.current

// 		if (!el || el.contains(event.target as Node)) {
// 			return
// 		}

// 		handler(event)
// 	})
// }
