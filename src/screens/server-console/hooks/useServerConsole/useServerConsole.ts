import { useRef, useState } from 'react'

import { FlatList, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { useSendCommandToServerConsoleMutation } from '../../queries'

export function useServerConsole() {
	const [inputValue, setInputValue] = useState('')

	const inputRef = useRef<TextInput>(null)
	const linesRef = useRef<FlatList>(null)

	const sendCommandMutation = useSendCommandToServerConsoleMutation()

	const handleSend = (value: string) => {
		if (value.trim().length === 0) return

		sendCommandMutation.mutateAsync({ command: value })
	}

	const handleInput = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
		setInputValue(e.nativeEvent.text)
	}

	const clearInput = () => {
		setInputValue('')
	}

	return {
		inputValue,
		inputRef,
		linesRef,
		functions: {
			handleInput,
			handleSend,
			clearInput,
		},
	}
}
