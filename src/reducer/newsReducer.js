import { getArticles } from '../services/new-service';
const initialState = {
    data: {
        country: 'us',
        category: 'Business',
        q: '',
        pageSize: 10,
        apiKey: '5c272dc78f954b94855e059b7e2dabc2'
    },
    loading: true,
    error: ''
};
export const paramsContext = React.createContext();
const reduce = (state, action) => {
    switch (action.type) {
        case 'OnSuccess':
            return {
                loading: false,
                user: action.payload,
                error: ''
            }
        case 'OnFailure':
            return {
                loading: false,
                user: {},
                error: 'Something went wrong'
            }

        default:
            return state
    }
}
export function ParamsContextProvider(props) {
    const [state, dispatch] = useReducer(reduce, initialState)

    useEffect(() => {
        getArticles()
            .then(response => {
                dispatch({ type: 'OnSuccess', payload: response })
            })
            .catch(error => {
                dispatch({ type: 'OnFailure' })
            })
    }, [])

    return (
        <paramsContext.Provider value={[state, dispatch]}>
            {state.loading ? 'Loading...' : props.children}
            {state.error ? state.error : null}
        </paramsContext.Provider>
    )
}
