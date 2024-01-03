import axios from "axios";

const BASE_URL_CURRENCY_API = "https://vatcomply.com";

/**
 * API instance for Vatcomply service.
 */
export const vatcomplyApi = axios.create({ baseURL: BASE_URL_CURRENCY_API });
