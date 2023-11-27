type ActionTypeAC = {
    type: string
}

export type StateType = {
    collapsed: boolean
}
export const reducer = (state: StateType, action: ActionTypeAC): StateType   => {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED':
            const stateCopy={...state, collapsed: !state.collapsed}
            return stateCopy;
        default:
            throw new Error('Bad action type')
    }
    return state
}