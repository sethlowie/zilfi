import { describe, expect, it } from "vitest";
import { RoutesService } from "./RoutesService";

describe("RoutesService", () => {
  it("should default to home", () => {
    const srvc = new RoutesService();

    expect(srvc.getCurrentRoute().value.page).toEqual("Home");
  });

  it("should default to benchmark if starting on /benchmark", () => {
    const srvc = new RoutesService("/benchmark");

    expect(srvc.getCurrentRoute().value.page).toEqual("Benchmark");
  });

  it("should update the route on route change", () => {
    const srvc = new RoutesService();

    expect(srvc.getCurrentRoute().value.page).toEqual("Home");

    srvc.changeRoute("/benchmark");

    expect(srvc.getCurrentRoute().value.page).toEqual("Benchmark");
  });
});
