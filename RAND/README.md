# Linear congruential generator

A linear congruential generator (LCG) is an algorithm that yields a sequence of pseudo-randomized numbers calculated with a discontinuous piecewise linear equation. The method represents one of the oldest and best-known pseudorandom number generator algorithms. The theory behind them is relatively easy to understand, and they are easily implemented and fast, especially on computer hardware which can provide modulo arithmetic by storage-bit truncation.

The generator is defined by recurrence relation:
![alt text](https://wikimedia.org/api/rest_v1/media/math/render/svg/3a40cd0032b03626a091a5a0e1b4684b3d5eb406)
where X is the sequence of pseudorandom values, and
![alt-text](https://wikimedia.org/api/rest_v1/media/math/render/svg/d4ede7bedbdf2b8a8c7a8f6bf240b04bdf71515e)
are integer constants that specify the generator. If c = 0, the generator is often called a multiplicative congruential generator (MCG), or Lehmer RNG. If c ≠ 0, the method is called a mixed congruential generator

