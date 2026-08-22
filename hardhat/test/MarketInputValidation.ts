import { expect } from "chai";

function validDuration(
  value: bigint
) {
  return value > 0n;
}

function validResolveDelay(
  value: bigint
) {
  return value >= 0n;
}

function validText(
  value: string
) {
  return value.trim().length > 0;
}

describe("Market input validation", function () {
  it("accepts a normal betting duration", function () {
    expect(
      validDuration(3600n)
    ).to.equal(true);
  });

  it("rejects zero betting duration", function () {
    expect(
      validDuration(0n)
    ).to.equal(false);
  });

  it("rejects negative betting duration", function () {
    expect(
      validDuration(-1n)
    ).to.equal(false);
  });

  it("accepts zero resolve delay", function () {
    expect(
      validResolveDelay(0n)
    ).to.equal(true);
  });

  it("accepts positive resolve delay", function () {
    expect(
      validResolveDelay(600n)
    ).to.equal(true);
  });

  it("rejects negative resolve delay", function () {
    expect(
      validResolveDelay(-1n)
    ).to.equal(false);
  });

  it("accepts normal text", function () {
    expect(
      validText(
        "Will ETH/USD be above 4000?"
      )
    ).to.equal(true);
  });

  it("rejects whitespace-only text", function () {
    expect(
      validText("   ")
    ).to.equal(false);
  });
});
