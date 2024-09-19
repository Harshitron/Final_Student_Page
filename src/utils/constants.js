export const HOST = import.meta.env.VITE_SERVER_URL

export const AUTH_ROUTES = "api/auth";

export const SIGNUP_ROUTE = `${AUTH_ROUTES}/signup`
export const SIGNIN_ROUTE = `${AUTH_ROUTES}/signin`
export const LOGOUT_ROUTE = `${AUTH_ROUTES}/logout`
export const CHECKAUTH_ROUTE = `${AUTH_ROUTES}/check-auth`
export const SUBMIT_FORM_ROUTE = `${AUTH_ROUTES}/submit-form`