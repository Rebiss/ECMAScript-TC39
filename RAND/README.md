# Linear congruential generator

A **linear congruential generator (LCG)** is an algorithm that yields a sequence of pseudo-randomized numbers calculated with a discontinuous piecewise linear equation. The method represents one of the oldest and best-known pseudorandom number generator algorithms. The theory behind them is relatively easy to understand, and they are easily implemented and fast, especially on computer hardware which can provide modulo arithmetic by storage-bit truncation.

The generator is defined by recurrence relation:

![alt text](https://wikimedia.org/api/rest_v1/media/math/render/svg/3a40cd0032b03626a091a5a0e1b4684b3d5eb406)

where X is the sequence of pseudorandom values, and

![alt-text](https://wikimedia.org/api/rest_v1/media/math/render/svg/d4ede7bedbdf2b8a8c7a8f6bf240b04bdf71515e)

![alt-text](https://wikimedia.org/api/rest_v1/media/math/render/svg/d4ede7bedbdf2b8a8c7a8f6bf240b04bdf71515e)

![alt-text](https://wikimedia.org/api/rest_v1/media/math/render/svg/5054822029125050b7a7ad66c6d67237200ce199)

![alt-text](https://wikimedia.org/api/rest_v1/media/math/render/svg/8cfbbbe2ead58cc66054f343ae20f4d7ab8b7bed)



are integer constants that specify the generator. If c = 0, the generator is often called a multiplicative congruential generator (MCG), or Lehmer RNG. If c ≠ 0, the method is called a mixed congruential generator.

![alt-text](https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Linear_congruential_generator_visualisation.svg/480px-Linear_congruential_generator_visualisation.svg.png)

# Period length

A benefit of LCGs is that with appropriate choice of parameters, the period is known and long. Although not the only criterion, too short a period is a fatal flaw in a pseudorandom number generator.

While LCGs are capable of producing pseudorandom numbers which can pass formal tests for randomness, this is extremely sensitive to the choice of the parameters m and a. For example, a = 1 and   c = 1 produces a simple modulo-m counter, which has a long period, but is obviously non-random.

Historically, poor choices for a have led to ineffective implementations of LCGs. A particularly illustrative example of this is RANDU, which was widely used in the early 1970s and led to many results which are currently being questioned because of the use of this poor LCG.

There are three common families of parameter choice: **m prime, c = 0**

This is the original Lehmer RNG construction. The period is m−1 if the multiplier a is chosen to be a primitive element of the integers modulo m. The initial state must be chosen between 1 and m−1.

One disadvantage of a prime modulus is that the modular reduction requires a double-width product and an explicit reduction step. Often a prime just less than a power of 2 is used (the Mersenne primes 231−1 and 261−1 are popular), so that the reduction modulo m = 2e − d can be computed as (ax mod 2e) + d ⌊ax/2e⌋. This must be followed by a conditional subtraction of m if the result is too large, but the number of subtractions is limited to ad/m, which can be easily limited to one if d is small.

If a double-width product is unavailable, and the multiplier is chosen carefully, Schrage's method may be used. To do this, factor m = qa+r, i.e. q = ⌊m/a⌋ and r = m mod a. Then compute ax mod m = a(x mod q) − r ⌊x/q⌋. Since x mod q < q ≤ m/a, the first term is strictly less than am/a = m. If a is chosen so that r ≤ q (and thus r/q ≤ 1), then the second term is also less than m: r ⌊x/q⌋ ≤ rx/q = x(r/q) ≤ x < m. Thus, both products can be computed with a single-width product, and the difference between them lies in the range [1−m, m−1], so can be reduced to [0, m−1] with a single conditional add.

A second disadvantage is that it is awkward to convert the value 1 ≤ x < m to uniform random bits. If a prime just less than a power of 2 is used, sometimes the missing values are simply ignored.

**m a power of 2, c = 0**

Choosing m to be a power of 2, most often m = 232 or m = 264, produces a particularly efficient LCG, because this allows the modulus operation to be computed by simply truncating the binary representation. In fact, the most significant bits are usually not computed at all. There are, however, disadvantages.

This form has maximal period m/4, achieved if a ≡ 3 or a ≡ 5 (mod 8). The initial state X0 must be odd, and the low three bits of X alternate between two states and are not useful. It can be shown that this form is equivalent to a generator with a modulus a quarter the size and c ≠ 0.

A more serious issue with the use of a power-of-two modulus is that the low bits have a shorter period than the high bits. The lowest-order bit of X never changes (X is always odd), and the next two bits alternate between two states. (If a ≡ 5 (mod 8), then bit 1 never changes and bit 2 alternates. If a ≡ 3 (mod 8), then bit 2 never changes and bit 1 alternates.) Bit 3 repeats with a period of 4, bit 4 has a period of 8, and so on. Only the most significant bit of X achieves the full period.

**c ≠ 0** when c ≠ 0, correctly chosen parameters allow a period equal to m, for all seed values. This will occur if and only if

```
  1. m and c are relatively prime,
  2. a-1 is divisible by all prime factors of {\displaystyle m} m,
  3. a-1 is divisible by 4 if {\displaystyle m} m is divisible by 4.
```

These three requirements are referred to as the Hull–Dobell Theorem.

This form may be used with any m, but only works well for m with many repeated prime factors, such as a power of 2; using a computer's word size is the most common choice. If m were a square-free integer, this would only allow a ≡ 1 (mod m), which makes a very poor PRNG; a selection of possible full-period multipliers is only available when m has repeated prime factors.

Although the Hull–Dobell theorem provides maximum period, it is not sufficient to guarantee a good generator. For example, it is desirable for a−1 to not be any more divisible by prime factors of m than necessary. Thus, if m is a power of 2, then a−1 should be divisible by 4 but not divisible by 8, i.e. a ≡ 5 (mod 8).

Indeed, most multipliers produce a sequence which fails one test for non-randomness or another, and finding a multiplier which is satisfactory to all applicable criteria is quite challenging. The spectral test is one of the most important tests.

Note that a power-of-2 modulus shares the problem as described above for c = 0: the low k bits form a generator with modulus 2k and thus repeat with a period of 2k; only the most significant bit achieves the full period. If a pseudorandom number less than r is desired, ⌊rX/m⌋ is a much higher-quality result than X mod r. Unfortunately, most programming languages make the latter much easier to write (X % r), so it is the more commonly used form.

The generator is not sensitive to the choice of c, as long as it is relatively prime to the modulus (e.g. if m is a power of 2, then c must be odd), so the value c=1 is commonly chosen.

The series produced by other choices of c can be written as a simple function of the series when c=1. Specifically, if Y is the prototypical series defined by Y0 = 0 and Yn+1 = aYn+1 mod m, then a general series Xn+1 = aXn+c mod m can be written as an affine function of Y:

![alt-text](https://wikimedia.org/api/rest_v1/media/math/render/svg/3cb567e2cfe84e4948885bbfb5e348f96293be70)

More generally, any two series X and Z with the same multiplier and modulus are related by

![alt-tetx](https://wikimedia.org/api/rest_v1/media/math/render/svg/9fa2bc1661dea63ca58ad116344e71dd488871b6)


