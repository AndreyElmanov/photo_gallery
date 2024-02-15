import { makeAutoObservable } from 'mobx';

class DarkMode {
    isDark: boolean = false;
  
    constructor() {
      makeAutoObservable(this)
    }
  
    setMode(bool: boolean) {
      this.isDark = bool;
    };
  }

export const darkMode = new DarkMode();