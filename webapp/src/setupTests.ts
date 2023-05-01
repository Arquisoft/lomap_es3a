// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { TextDecoder, TextEncoder } from "util";

if (
    typeof globalThis.TextEncoder === "undefined" ||
    typeof globalThis.TextDecoder === "undefined"
) {
    (globalThis as any).TextEncoder = TextEncoder;
    (globalThis as any).TextDecoder = TextDecoder;
    globalThis.Uint8Array = Uint8Array;
}
