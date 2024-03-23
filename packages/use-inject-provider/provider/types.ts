import { EIP1193Provider } from "eip1193-provider";

declare global {
  interface Window {
    ReactNativeWebView?: { postMessage: (message: string) => void };
    ethereum?: EIP1193Provider;
  }
  interface Document {
    addEventListener(type: "message", listener: (e: MessageEvent) => void, options?: boolean | AddEventListenerOptions): void;
  }
}

export default global;
