type Comparator =
  | "GT"
  | "GTE"
  | "LT"
  | "LTE";

function describeRule(
  target: bigint,
  comparator: Comparator
) {
  switch (comparator) {
    case "GT":
      return `observed > ${target}`;

    case "GTE":
      return `observed >= ${target}`;

    case "LT":
      return `observed < ${target}`;

    case "LTE":
      return `observed <= ${target}`;
  }
}

function evaluate(
  observed: bigint,
  target: bigint,
  comparator: Comparator
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

  return observed <= target;
}

async function main() {
  const target = 4000n;

  const comparator:
    Comparator = "GTE";

  const observations = [
    3990n,
    3999n,
    4000n,
    4001n,
    4010n,
  ];

  console.log(
    "Resolution rule:"
  );

  console.log(
    describeRule(
      target,
      comparator
    )
  );

  console.log("");

  for (
    const observed
    of observations
  ) {
    const result =
      evaluate(
        observed,
        target,
        comparator
      );

    console.log(
      observed.toString(),
      "=>",
      result ? "YES" : "NO"
    );
  }
}

main().catch(
  console.error
);
