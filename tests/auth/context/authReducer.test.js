import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe("Pruebas en authReducer", () => {
    test("Deberia retornar el estado por defecto", () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });
    test("Debe de (login) llamar el login autenticar y establecer el valor por defecto", () => {
        const action = {
            type: types.login,
            payload: {
                name: "Juan",
                id: "123",
            },
        };
        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({
            logged: true,
            user: action.payload,
        });
    });
    test("Debe de (logout) borrar el name del usuario y logged en false", () => {
        const state = {
            logged: true,
            payload: {
                id: "123",
                name: "Juan",
            },
        };

        const action = {
            type: types.logout,
        };
        const newState = authReducer(state, action);
        expect(newState).toEqual({
            logged: false,
        });
    });
});
