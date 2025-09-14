/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react
  
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export function Call() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"coffee-chat"});
      cal("floatingButton", {"calLink":"chandrashekher1/coffee-chat","config":{"layout":"month_view","theme":"auto"},"buttonText":"Book a Call","buttonColor":"#ffffff","buttonTextColor":"#000000"});
      cal("ui", {"theme":"auto","hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
};
  