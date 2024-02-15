import { PhotoType } from "../types/types";

export const getPhotos = (): Promise<PhotoType[]> => {
    return new Promise(((resolve, reject) => {
        fetch('https://api.slingacademy.com/v1/sample-data/photos') //* Стоит вынести основную часть URL в константу и подставлять эндпоинты
        .then(res => res.json())
        .then(res => resolve(res.photos))
        .catch(reject);
    }))
  };