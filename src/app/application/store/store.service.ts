import { Injectable, WritableSignal, signal } from '@angular/core';
import { StoreState } from 'src/app/domain';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  public state: WritableSignal<StoreState> = signal({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
  });

  constructor() {}
}
