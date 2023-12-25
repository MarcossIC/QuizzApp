import { DampOptions } from "../domain/entity/damp.model";
import * as THREE from 'three';

// Smoothing function for numbers
  export function damp(
    current: number,
    target: number,
    {
      smoothTime = 0.2,
      delta = 0.016,
      maxSpeed,
      easing,
      eps = 0.00001,
    }: DampOptions = {}
  ): number {
    const num = Math.max(eps, Math.abs(target - current));
    const speed = num / smoothTime;
    const maxDelta =
      maxSpeed !== undefined ? maxSpeed * delta : Number.MAX_VALUE;
    return clamp(speed, -maxDelta, maxDelta);
  }

  // Smoothing function for Vector3
  export function damp3(
    current: THREE.Vector3,
    target: any,
    options: DampOptions = {}
  ): THREE.Vector3 {
    const result = new THREE.Vector3();
    result.x = damp(current.x, target[0], options);
    result.y = damp(current.y, target[1], options);
    result.z = damp(current.z, target[2], options);
    return result;
  }

  // Smoothing function for Euler
  export function dampE(
    current: THREE.Euler,
    target: [number, number, number, THREE.EulerOrder?],
    options: DampOptions = {}
  ): THREE.Euler {
    const result = new THREE.Euler();
    result.x = damp(current.x, target[0], options);
    result.y = damp(current.y, target[1], options);
    result.z = damp(current.z, target[2], options);
    result.order = target[3] !== undefined ? target[3] : 'XYZ';
    return result;
  }

  // Simple clamp function
  export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }
