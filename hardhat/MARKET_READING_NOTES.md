# My Market Reading Notes

I wanted to understand the market from the input side before looking too much
at the execution side.

The market creation parameters are easier for me to think about as three
groups.

## Question

This is the human-readable prediction.

For example:

Will ETH/USD be at least $4000?

## Resolution Data

The contract also stores:

- oracle URL
- JSON path
- target
- comparator

Together these describe how the market will eventually decide the result.

## Timing

There are also two durations:

- betting duration
- resolution delay

These eventually become block-based deadlines.

## Why I Added a Preview Script

When I was reading the contract, I kept mentally mixing up these parameters.

The preview script lets me print them together before thinking about the
actual transaction.

It is a very small tool, but it helped me understand what is fixed at market
creation.

## One Important Detail

The market does not need a separate backend process to calculate the final
answer.

The resolution rule is stored on-chain and used later when the Scheduler wakes
the contract.

That was the part that made the workshop different from a normal web app for
me.
