import { expect } from "chai";

function evaluate(
  observed: bigint,
  target: bigint,
  comparator: string
) {
  if (
    comparator === "GT"
  ) {
    return observed > target;
  }

  if (
    comparator === "GTE"
  ) {
    return observed >= target;
  }

  if (
    comparator === "LT"
  ) {
    return observed < target;
  }

  if (
    comparator === "LTE"
  ) {
    return observed <= target;
  }

  throw new Error(
    "Unknown comparator"
  );
}

describe("Resolution rule examples", function () {
  it("matches a GTE prediction", function () {
    expect(
      evaluate(
        4000n,
        4000n,
        "GTE"
      )
    ).to.equal(true);
  });

  it("rejects a GTE prediction below target", function () {
    expect(
      evaluate(
        3999n,
        4000n,
        "GTE"
      )
    ).to.equal(false);
  });

  it("matches a GT prediction above target", function () {
    expect(
      evaluate(
        4001n,
        4000n,
        "GT"
      )
    ).to.equal(true);
  });

  it("rejects equality for GT", function () {
    expect(
      evaluate(
        4000n,
        4000n,
        "GT"
      )
    ).to.equal(false);
  });

  it("matches an LT prediction below target", function () {
    expect(
      evaluate(
        3999n,
        4000n,
        "LT"
      )
    ).to.equal(true);
  });

  it("matches LTE at the boundary", function () {
    expect(
      evaluate(
        4000n,
        4000n,
        "LTE"
      )
    ).to.equal(true);
  });
});
