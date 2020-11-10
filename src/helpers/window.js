//https://github.com/nolimits4web/ssr-window
import { getWindow, getDocument } from "ssr-window";

// utility for better handling window object in SSR environment
export const window = getWindow();

// utility for better handling document object in SSR environment
export const document = getDocument();
