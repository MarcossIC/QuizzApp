import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  type OnInit,
  AfterViewInit,
  NgZone,
  OnDestroy,
} from '@angular/core';
import { ShirtComponent } from './shirt.component';
import { CamreRingComponent } from './camreRing.component';
import { BackdropComponent } from './backdrop.component';
import * as THREE from 'three';
import { StoreService } from 'src/app/application/store/store.service';
import { DampOptions } from 'src/app/domain/entity/damp.model';
import { damp3, dampE } from 'src/app/application/math.easig';

@Component({
  selector: 'custom-canvas',
  standalone: true,
  template: `
    <div class="w-full max-w-full h-full transition-all ease-in">
      <canvas
        (mousemove)="onMouseMove($event)"
        #rendererCanvas
        id="renderCanvas"
      ></canvas>
    </div>
  `,
  styles: [``],
  imports: [
    CommonModule,
    ShirtComponent,
    CamreRingComponent,
    BackdropComponent,
  ],
})
export class CustomCanvasComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas!: ElementRef<HTMLCanvasElement>;
  public canvas!: HTMLCanvasElement | null;

  public renderer!: THREE.WebGLRenderer | null;
  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene;
  private light!: THREE.AmbientLight;
  private group: THREE.Group;

  private frameId: number = 0;
  private pointer: { x: number; y: number } = { x: 0, y: 0 };

  constructor(private ngZone: NgZone, private store: StoreService) {
    this.canvas = null;
    this.renderer = null;
    this.scene = new THREE.Scene();
    this.group = new THREE.Group();
  }

  ngOnInit(): void {
    this.canvas = this.rendererCanvas.nativeElement;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true, // smooth edges
      preserveDrawingBuffer: true,
      powerPreference: 'high-performance',
    });

    this.renderer.shadowMap = {
      enabled: true,
      autoUpdate: true,
      needsUpdate: false,
      type: THREE.PCFShadowMap,
    } as THREE.WebGLShadowMap;
  }

  ngAfterViewInit(): void {
    this.startScene();
    this.animate();
  }

  ngOnDestroy(): void {
    if (this.frameId !== 0) {
      cancelAnimationFrame(this.frameId);
    }
    if (this.renderer !== null) {
      this.renderer.dispose();
      this.renderer = null;
      this.canvas = null;
    }
  }

  private startScene() {
    this.renderer!.setSize(window.innerWidth, window.innerHeight);

    this.camera = new THREE.PerspectiveCamera();
    this.camera.fov = 25;
    this.camera.position.set(0, 0, 0);

    this.scene.add(this.camera);

    this.light = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(this.light);

    this.group.add(this.startBackdrop());
    this.scene.add(this.group);
  }

  private startBackdrop() {
    const backdropGroup = new THREE.Group();

    const backdropGeometry = new THREE.PlaneGeometry(100, 100);
    const backdropMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });

    backdropMaterial.alphaTest = 0.85;

    const backdrop = new THREE.Mesh(backdropGeometry, backdropMaterial);
    backdrop.rotation.x = -Math.PI / 2;
    backdrop.rotation.y = 0;
    backdrop.rotation.z = 0;

    backdrop.position.set(0, 0, -0.14);
    backdrop.receiveShadow = true;

    backdropGroup.add(backdrop);

    // Crea luces aleatorias
    const light1 = new THREE.PointLight(0xffffff, 0.55, 9, 4);

    light1.position.set(5, 5, -10);
    light1.castShadow = true;
    light1.shadow.bias = 0;
    light1.shadow.mapSize.width = 512;
    light1.shadow.mapSize.height = 512;
    light1.shadow.camera.near = 0.5;
    light1.shadow.camera.far = 500;

    backdropGroup.add(light1);

    const light2 = new THREE.PointLight(0xffffff, 0.25, 5, 4);

    light2.castShadow = true;
    light2.shadow.bias = 0;
    light2.shadow.mapSize.width = 512;
    light2.shadow.mapSize.height = 512;
    light2.shadow.camera.near = 0.5;
    light2.shadow.camera.far = 500;
    backdropGroup.add(light2);

    return backdropGroup;
  }

  private createShirt(){
    const group = new THREE.Group();

    const mesh = new THREE.Mesh();
  }

  public animate(): void {
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.startRender();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.startRender();
        });
      }

      window.addEventListener('resize', () => {
        this.resize();
      });
    });
  }

  private startRender() {
    const render = ()=>{
          this.renderer!.render(this.scene, this.camera);
          this.update();
    };
    this.frameId = requestAnimationFrame(render);


  }

  private update() {
    const targetPosition = this.defineTargetPosition(this.store.state().intro);

    // set model camera position
    const smoothedPosition = damp3(this.camera.position, targetPosition, {
      smoothTime: 0.25,
      delta: 0.016,
    });

    this.camera.position.copy(smoothedPosition);

    // set the model rotation smoothly
    const smoothedRotation = dampE(
      this.group.rotation,
      [this.pointer.y / 10, -this.pointer.x / 5, 0],
      {
        smoothTime: 0.25,
        delta: 0.016,
      }
    );
    this.group.rotation.copy(smoothedRotation);
  }

  private get isBreakpoint(): boolean {
    return window.innerWidth <= 1260;
  }

  private get isMobile(): boolean {
    return window.innerWidth <= 600;
  }

  private defineTargetPosition(introState: boolean) {
    let targetPosition = [-0.4, 0, 2];

    if (introState) {
      if (this.isBreakpoint) targetPosition = [0, 0, 2];
      if (this.isMobile) targetPosition = [0, 0.2, 2.5];
    } else {
      if (this.isMobile) targetPosition = [0, 0, 2.5];
      else targetPosition = [0, 0, 2];
    }

    return targetPosition;
  }

  public onMouseMove(event: MouseEvent): void {
    this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  public resize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer!.setSize(width, height);
  }
}
