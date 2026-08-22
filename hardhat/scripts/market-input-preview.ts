type Comparator =
  | "GT"
  | "GTE"
  | "LT"
  | "LTE";

type MarketInput = {
  question: string;
  oracleUrl: string;
  jsonPath: string;
  target: bigint;
  comparator: Comparator;
  bettingSeconds: bigint;
  resolveDelaySeconds: bigint;
};

function printInput(
  input: MarketInput
) {
  console.log(
    "=== Market Input ==="
  );

  console.log(
    "Question:",
    input.question
  );

  console.log(
    "Oracle URL:",
    input.oracleUrl
  );

  console.log(
    "JSON path:",
    input.jsonPath
  );

  console.log(
    "Target:",
    input.target.toString()
  );

  console.log(
    "Comparator:",
    input.comparator
  );

  console.log(
    "Betting seconds:",
    input.bettingSeconds.toString()
  );

  console.log(
    "Resolve delay seconds:",
    input.resolveDelaySeconds.toString()
  );

  console.log("");
}

function validate(
  input: MarketInput
) {
  const errors: string[] = [];

  if (
    input.question.trim()
      .length === 0
  ) {
    errors.push(
      "Question is empty"
    );
  }

  if (
    input.oracleUrl.trim()
      .length === 0
  ) {
    errors.push(
      "Oracle URL is empty"
    );
  }

  if (
    input.jsonPath.trim()
      .length === 0
  ) {
    errors.push(
      "JSON path is empty"
    );
  }

  if (
    input.bettingSeconds <= 0n
  ) {
    errors.push(
      "Betting duration must be positive"
    );
  }

  if (
    input.resolveDelaySeconds < 0n
  ) {
    errors.push(
      "Resolve delay cannot be negative"
    );
  }

  return errors;
}

async function main() {
  const input: MarketInput = {
    question:
      "Will ETH/USD be at least $4000?",
    oracleUrl:
      "https://example.com/eth",
    jsonPath:
      ".price",
    target:
      4000n,
    comparator:
      "GTE",
    bettingSeconds:
      3600n,
    resolveDelaySeconds:
      600n,
  };

  printInput(input);

  const errors =
    validate(input);

  if (errors.length > 0) {
    console.log(
      "Validation errors:"
    );

    for (
      const error of errors
    ) {
      console.log(
        "-",
        error
      );
    }

    process.exitCode = 1;
    return;
  }

  console.log(
    "Input looks valid."
  );
}

main().catch(
  console.error
);
