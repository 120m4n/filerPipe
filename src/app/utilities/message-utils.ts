export class Message {
  constructor(public type: string, public body: any) { }
}

export function sendMessage(windowObj: Window | null, payload: any) {
  if (windowObj) {
    windowObj.postMessage(payload, '*');
  }
}
