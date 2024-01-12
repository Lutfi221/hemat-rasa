export type EnvelopeExtras = {
  message?: string;
  errorMessage?: string;
  errorCode?: string;
};

export class Envelope<T> implements EnvelopeExtras {
  data?: T;
  message?: string;
  errorMessage?: string;
  errorCode?: string;

  constructor(data: T, extras?: EnvelopeExtras) {
    this.data = data;
    for (const key in extras) {
      if (extras.hasOwnProperty(key)) {
        this[key] = extras[key];
      }
    }
  }
}
