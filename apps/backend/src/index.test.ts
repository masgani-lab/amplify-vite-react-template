import { describe, expect, it } from "vitest"
import { getHealthMessage } from "./index"

describe("getHealthMessage", () => {
  it("returns health message", () => {
    expect(getHealthMessage()).toBe("Backend is healthy")
  })
})