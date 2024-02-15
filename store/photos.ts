import { makeAutoObservable } from 'mobx';
import { getPhotos } from '../api/getPhotos';
import { PhotoType } from '../types/types';

class Photos {
    photos: PhotoType[] = [];
    isLoad: boolean = false;
  
    constructor() {
      makeAutoObservable(this)
    }
  
    getPhotos() {
      this.isLoad = true;
      getPhotos()
        .then(res => this.photos = res)
        .catch(console.log) //* Создать функцию для логирования ошибок
        .finally(() => this.isLoad = false);
    };
  }

export const photosStore = new Photos();