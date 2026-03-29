// import { Api } from '@/app/services/api-client'
// import { Ingredient } from '@prisma/client'
// import { useEffect, useState } from 'react'
// interface ReturnProps {
// 	items: Ingredient[]
// }
// export const useFilterIngredients = (): ReturnProps => {
// 	const [items, setItems] = useState<Ingredient[]>([])
// 	useEffect(() => {
// 		async function fetchIngredients() {
// 			try {
// 				const ingredient = await Api.ingredients.getAll()
// 				setItems(ingredient)
// 			} catch (error) {
// 				console.log(error)
// 			}
// 		}
// 		fetchIngredients()
// 	}, [])
// }
