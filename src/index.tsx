declare global {
  interface Window {
    Intercom: Intercom;
  }
}

interface Intercom {
  (command: 'boot', settings?: IntercomSettings): void;
  (command: 'update', settings?: IntercomSettings): void;
  // Add other Intercom commands as needed
}

interface IntercomSettings {
  app_id?: string;
  // Add other Intercom settings as needed
}

import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { App } from "./App"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"

// Intercom script
(() => {let w=window;let ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{let d=document;let i=(args) => {i.c(args);};i.q=[];i.c=(args) => {i.q.push(args);};w.Intercom=i;let l=() => {let s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/ce8fl00z';let x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();


const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <App />
  // Intercom script
  (function(){var w=window as any;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args:any){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/ce8fl00z';var x=d.getElementsByTagName('script')[0];if(x && x.parentNode){x.parentNode.insertBefore(s,x);}};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
  
  // Intercom initialization
  window.Intercom("boot", {
    app_id: "ce8fl00z"
  });
  
  // Intercom update
  window.Intercom("update");
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// Intercom update
window.Intercom("update");

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()