const initialState = {
    botaoClicado: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'BOTAO_CLICADO': {
            newState = { ...state };
            newState.botaoClicado = !newState.botaoClicado;
            return newState;
        }
        default: {
            return state;
        }
    }
};