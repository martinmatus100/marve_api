import axiosClient from "./axiosClient";

export const comics = {
    title: 'title'
}

const marvelApi = {
    getComicsList: (params) => {
        const url = '/comics';
        return axiosClient.get(url, params);
    },

    getComic: (id, params) => {
        const url = '/comics/' + id;
        return axiosClient.get(url, params);
    },
}

export default marvelApi;