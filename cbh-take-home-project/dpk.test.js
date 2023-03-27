const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("returns a trivial partition key if no event is provided", () => {
    expect(deterministicPartitionKey()).toEqual("0");
  });

  it("returns the provided partition key if it exists", () => {
    const event = { partitionKey: "abc123" };
    expect(deterministicPartitionKey(event)).toEqual("abc123");
  });

  it("returns a deterministic partition key if no partition key is provided", () => {
    const event = { foo: "bar" };
    expect(deterministicPartitionKey(event)).toEqual(
      "2b7d69c20b256f7b0336c74a6d0cddbf940b6a284a0eafe584d703b8f697871ec"
    );
  });

  it("returns a string partition key if the candidate is not a string", () => {
    const event = { partitionKey: 123 };
    expect(deterministicPartitionKey(event)).toEqual('"123"');
  });

  it("returns a truncated partition key if it exceeds the max length", () => {
    const candidate = "a".repeat(300);
    expect(deterministicPartitionKey({ foo: candidate })).toEqual(
      "6d12c6d30c6c3d6f83dd6de138b6af19d6e9f72f845b6c509292e7a8c1d55038"
    );
  });
});
