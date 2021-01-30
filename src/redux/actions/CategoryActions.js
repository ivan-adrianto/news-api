import { categoryTypes } from "./CategoryTypes"

export const categoryAction = payload => {
    return {type: categoryTypes.CATEGORY_REQUEST, payload}
}