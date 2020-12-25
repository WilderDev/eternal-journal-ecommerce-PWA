import { Store } from "../data/store"

export const FilterProducts = type => Store.filter(item => item.type === type)
