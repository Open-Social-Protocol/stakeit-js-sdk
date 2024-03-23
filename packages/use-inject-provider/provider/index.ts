import { WebViewConnection } from "./webview-connection";
import { EIP1193Provider, EthereumProvider } from "eip1193-provider";
import { isInIframe } from "./utils";

declare global {
  interface Window {
    ReactNativeWebView?: { postMessage: (message: string) => void };
    ethereum?: EIP1193Provider;
  }
}

if (window.ReactNativeWebView || isInIframe()) {
  window.ethereum = new EthereumProvider(new WebViewConnection());
}
