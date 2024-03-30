const { cleanup } = require("@testing-library/react");
const { afterEach } = require("vitest");
import "@testing-library/jest-dom/vitest";

afterEach(()=>{
    cleanup();
})