import {
  formatJsonRpcError,
  formatJsonRpcResult,
  isJsonRpcRequest
} from "@json-rpc-tools/utils";
import { EIP1193Provider } from "eip1193-provider";
import { RefObject, useCallback, useMemo } from "react";
// @ts-expect-error
import generatedProvider from "inline:../provider/generated-provider.js";

export const useIframeInjectProvider = (args: {
  provider: EIP1193Provider;
  iframe: RefObject<HTMLIFrameElement>;
}) => {
  const { provider, iframe } = args;

  const injectedJavaScript: NonNullable<string> =
    generatedProvider;
  const onMessage = useCallback<NonNullable<(this: Window, ev: WindowEventMap["message"]) => any>>(
    async ({ data }) => {
      try {
        if (!iframe.current) {
          return console.warn("webViewRef.current is missing");
        }

        const parsedData = JSON.parse(data);

        if (!isJsonRpcRequest(parsedData)) {
          return iframe.current?.contentWindow?.postMessage(
            JSON.stringify(formatJsonRpcError(parsedData.id, "Invalid request"))
          );
        }

        const result = await provider
          .request({
            method: parsedData.method,
            params: parsedData.params
          })
          .then((result) => formatJsonRpcResult(parsedData.id, result))
          .catch((e) => formatJsonRpcError(e));

        return iframe.current?.contentWindow?.postMessage(JSON.stringify(result), "*");
      } catch (error) {
        console.log(error);
      }
    },
    [provider, iframe]
  );

  return useMemo(() => {
    return {
      injectedJavaScript,
      onMessage
    };
  }, [injectedJavaScript, onMessage]);
};
