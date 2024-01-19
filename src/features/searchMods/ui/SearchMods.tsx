import { useStore } from 'effector-react'
import { Href, Link } from 'expo-router'
import { Search, X } from 'lucide-react-native'

import { ModUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'

import { useSearchMods } from '../hooks'

import { View } from 'react-native'
import { SearchModsResults } from './searchModsResults'

export function SearchMods({ hideList = false }: { hideList?: boolean }) {
	const serverHash = useStore($serverHash)

	const { mods, searchTerm, showList, containerRef, functions } = useSearchMods(hideList)

	const {
		handleSearch,
		//  handleClickOutside,
		handleInputFocus,
		resetSearch,
	} = functions

	return (
		<View ref={containerRef}>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					backgroundColor: '#171C17',
					borderRadius: 10,
				}}
			>
				<Input
					inputMode="search"
					placeholder="Поиск модов"
					placeholderTextColor={'#cccccc'}
					value={searchTerm}
					onChange={handleSearch}
					onFocus={handleInputFocus}
					style={{ flex: 1, color: '#cccccc', textDecorationLine: 'none', paddingLeft: 10 }}
				/>
				<Button onPress={resetSearch} variant="ghost" size="icon">
					<X color={'#ccc'} size={'10'} style={{ marginRight: 10 }} />
				</Button>
				<Button
					size="sm"
					className="h-10"
					variant="primary"
					style={{ borderTopRightRadius: 10, borderBottomRightRadius: 10 }}
				>
					<Link
						href={
							(searchTerm.length > 0
								? ModUrls.search(serverHash!, { searchFilter: searchTerm })
								: ModUrls.search(serverHash!)) as Href<string>
						}
					>
						<Search size={20} color="#000" />
					</Link>
				</Button>
			</View>
			{mods && mods.length > 0 && !hideList && (
				<SearchModsResults mods={mods || []} searchTerm={searchTerm} showList={showList} />
			)}
		</View>
	)
}
