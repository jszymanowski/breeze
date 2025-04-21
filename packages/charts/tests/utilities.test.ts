import { getTickValues } from "@/utilities";
import { describe, expect, test } from "vitest";

describe("chart utility functions", () => {
  describe("getTickValues", () => {
    test("with a fully positive domain", () => {
      expect(getTickValues([10, 1000])).toEqual([0, 500, 1000]);
      expect(getTickValues([10, 1000], 5)).toEqual([0, 250, 500, 750, 1000]);
    });

    test("with a fully negative domain", () => {
      expect(getTickValues([-1000, -10])).toEqual([-1000, -500, 0]);
      expect(getTickValues([-1000, -10], 5)).toEqual([-1000, -750, -500, -250, 0]);
    });

    test("with a positive and negative domain", () => {
      expect(getTickValues([-800, 1000])).toEqual([-800, 0, 1000]);
      expect(getTickValues([-800, 1000], 5)).toEqual([-800, -350, 0, 100, 550, 1000]);

      expect(getTickValues([-30_000, 40_000])).toEqual([-30_000, 0, 40_000]);
      expect(getTickValues([-30_000, 40_000], 5)).toEqual([-30_000, -12_500, 0, 5_000, 22500, 40_000]);
    });

    test("with an irregular domain", () => {
      expect(getTickValues([120, 16890])).toEqual([0, 10_000, 20_000]);
      expect(getTickValues([120, 16890], 5)).toEqual([0, 5_000, 10_000, 15_000, 20_000]);

      expect(getTickValues([0, 35047])).toEqual([0, 20_000, 40_000]);
      expect(getTickValues([0, 35047], 5)).toEqual([0, 10_000, 20_000, 30_000, 40_000]);
    });

    test("with a very small domain", () => {
      expect(getTickValues([0, 35])).toEqual([0, 20, 40]);
      expect(getTickValues([0, 35], 5)).toEqual([0, 10, 20, 30, 40]);
    });
  });
});
