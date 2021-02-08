import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
    categoryRequest: ['category'],
    searchRequest: ['keyword'],
})

export default Creators