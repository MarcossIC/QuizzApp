export interface DampOptions {
  smoothTime?: number;
  delta?: number;
  maxSpeed?: number;
  easing?: EasingFunction;
  eps?: number;
}

export interface EasingFunction {
  (t: number): number;
}
