import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import { api } from 'config'

class amortisationApi {
    axiosInstance: AxiosInstance

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: api.amortisationService.url,
        })
    }

    public get = (url: string, config: AxiosRequestConfig) => {
        return this.axiosInstance.get(url, config)
    }
}

export const amortisationService = new amortisationApi();
