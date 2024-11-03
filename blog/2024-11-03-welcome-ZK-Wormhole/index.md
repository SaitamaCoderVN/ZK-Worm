---
slug: building-a-zero-knowledge-cross-chain-bridge
title: Building a Zero-Knowledge Cross-Chain Bridge with Wormhole and ZK-SNARK 😃
authors: [LoanCrypto]
tags: [crypto, blockchain, wormhole, zk-snark]
---

# Introduction

**“Another day, another bridge hack”** 😄 - This might be a familiar saying in the Crypto community in 2023, as bridge hacks have seemingly become a "snack" for hackers 😂.

![meme2 (2).png](https://peach-realistic-spider-498.mypinata.cloud/ipfs/QmQ1j4m3zGivxaEfGkMhn5UuGik1SbWipJZSoLtU2mJNjt)

Famous bridge hacks have become a nightmare for the Crypto community. The year 2022 was indeed a “memorable” year for bridges. 💀 The Ronin Bridge of Axie Infinity had to take a “year off” with $625M disappearing in March 2022 after hackers took control of 5 out of 9 validators, causing the project to halt operations and Sky Mavis to raise funds to cover the losses. 🤦‍♀️

Wormhole, the elder brother in the bridge world, had an “unexpected date” with hackers, resulting in $325M going on an indefinite vacation in February 2022. Fortunately, Jump Crypto appeared like Iron Man in the movie Endgame and “snapped” everything back to normal. 😅 

Nomad Bridge continued to “give without expecting anything in return” with $190M lost in August 2022. Harmony Bridge also joined the fun, “contributing” an additional $100M in June 2022 to the “Bridge Hack 2022” collection. 😂

> *"The security of bridges right now is like locking a bicycle with a string - it looks safe until someone really wants to take it." - Some stubborn old developer.* 💩

![meme1.png](https://peach-realistic-spider-498.mypinata.cloud/ipfs/Qmf3LRz27W43HH5MedibNK5CqTSLdE7ppNj9WW9E6mTEhX)

Come on, don’t laugh too soon! While other blockchains are struggling to connect with each other, just like you’re trying to find a way into your crush’s heart, Wormhole has appeared and seamlessly connected over 20 different blockchains (wormhole.com). But there’s something interesting - their Guardian system operates on a “democratic” mechanism that requires 13 out of 19 members to agree before allowing a cross-chain message to pass through. Sound familiar? Yes, exactly! It’s like when you’re trying to gather your friends to go out, and everyone has to agree before you can finalize anything, which rarely happens 😗.

Then ZK-SNARK came into the picture, like your crush suddenly texting “Heyy” at 2 AM. This technology promises significant improvements in security and performance for the bridge system. It’s like being able to keep your secrets while proving to your mom that you’ve done your homework without having to show her the specific content 😽.

According to Polygon, this technology helps reduce verification costs by 90% - even more than turning off the lights when leaving a room. StarkWare proudly announced that finality time has decreased from 15 minutes to 2-3 minutes - so fast that by the time you hit F5 to check Bitcoin prices, your transaction is already completed 😅.

![meme3.png](https://peach-realistic-spider-498.mypinata.cloud/ipfs/QmVjQGiycbec3Xatrc2MmouRwprMmfNMVhFKtVNpR8PJF8)

# Overview of Wormhole and ZK-SNARK

## Wormhole - The Tireless Cross-Chain Worm 🪱

So, do you know what Wormhole is yet? A wormhole? 😹 That’s what Google Translate tells me, but in reality… if you picture a worm digging through different blockchains, then… congratulations, you’re almost right 🥴. Wormhole is a protocol that allows different blockchains to “chat” with each other securely and reliably (wormhole.com).

You can think of it as a "highway" that allows data and assets to move safely between blockchains. The architecture of Wormhole includes three main parts, similar to sending a package internationally:

### Source Chain - The Sending Point

Just like when you take a package to the post office, the Source Chain is where the journey begins. The Smart Contract Runtime acts like the postal worker checking your package, while the Wormhole Core Contract ensures the package is stamped and labeled correctly. Then, the package is "Published Message" - just like when you receive a shipping receipt 😌.

### Off Chain - The Sorting Point

This is the most intense part! The Guardian Network is like a team of 19 careful staff members, needing 13 to confirm “This package is good!” before it can be forwarded. It’s like 13 people checking a product on Shopee to see if it’s genuine 😅.

The Relayer acts like a premium shipper, ensuring the package is sent through the correct channels (SPY and API) without getting lost along the way.

### Target Chain - The Destination

Finally, the Target Contract is like the postal worker receiving the package, carefully checking if everything is intact. The Wormhole Core Contract will verify the VAA - similar to checking the order number and recipient’s signature.

![meme4.png](https://peach-realistic-spider-498.mypinata.cloud/ipfs/QmT1QuvrGEjGh53Q1yktKCc8Nf6zKVwGg2YAjjXbGmLrqo)

Sounds complex, right? But don’t worry, that’s why Wormhole exists, to make cross-chain asset transfers as easy as sending a package! The only difference is that instead of waiting 3-5 days, everything happens in minutes, and instead of regular shippers, there are Guardians with top-notch “security credentials” :)).

## Overview of ZK-SNARK

If Wormhole is the "highway" for transferring assets, then ZK-SNARK is the state-of-the-art security system for this highway - where you can prove you have the right to use the highway, have enough "fees" to travel, and that your transactions are valid without revealing any sensitive information. It’s like passing through an ETC toll booth - your vehicle is confirmed and charged, but no one knows who you are or where you’re going 🙉.

Sounds a bit vague, so let’s start with the definition =))

Zero-Knowledge Succinct Non-Interactive Argument of Knowledge - a name as long as a Korean menu, but the idea is simple:

- Zero-Knowledge: "I can prove I know something without telling you what it is."
- Succinct: "I do it concisely, without rambling."
- Non-Interactive: "Just say it once, no back and forth."
- Argument of Knowledge: "And ensure no one can cheat."

![meme5.jpg](https://peach-realistic-spider-498.mypinata.cloud/ipfs/QmVQjae4WSjcwm4UeDsXqijmr8R721En6bVGQHP2LuboUW)

### How ZK-SNARK Works

Imagine ZK-SNARK as a game with three main characters:

1. **Prover**
   - Like a magician wanting to prove they know the secret behind their trick.
   - But instead of revealing the secret, they just show you proof of their knowledge.
   
2. **Verifier**
   - Like an audience member watching the magic trick.
   - Can confirm the trick is real without knowing the secret.
   
3. **Setup Phase**
   - Like preparing the stage and props.
   - Creating "parameters" for the Prover and Verifier to "communicate".

### Why Do We Need ZK-SNARK?

In the crypto world, privacy is as important as setting a password for your phone. ZK-SNARK helps you:

- Prove you have enough money to buy a Lambo without showing your wallet balance.
- Confirm a transaction is valid without disclosing sensitive information.
- And most importantly, no one knows you just all-in on a meme coin! 🤫

---


# The Technical Nature of ZK-SNARK

If you've been imagining it for a while, it might be a bit overwhelming, so let’s break it down technically. ZK-SNARK (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge) is a cryptographic proof that allows one party (the prover) to prove to another party (the verifier) that a statement is true without revealing any additional information beyond the truth of the statement itself.

Behind ZK-SNARK lies a complex world of mathematics, a seamless blend of math and cryptography. Let's go over some key mathematical and cryptographic concepts and protocols before diving deeper into ZK-SNARK.

## Arithmetic Circuit

Every computation in ZK-SNARK must be broken down into simple components, similar to dismantling a Ferrari into individual parts. Here's a simple example: proving that you know the value of x in the equation 
𝑥
3
+
𝑥
+
5
=
35
x 
3
 +x+5=35.

Phase 1: Analyzing the computation (“Dismantling the Car”)

𝑤
1
=
𝑥
w 
1
​
 =x
𝑤
2
=
𝑥
∗
𝑥
w 
2
​
 =x∗x (or 
𝑥
2
x 
2
 )
𝑤
3
=
𝑤
2
∗
𝑥
w 
3
​
 =w 
2
​
 ∗x (or 
𝑥
3
x 
3
 )
𝑤
4
=
𝑤
3
+
𝑥
w 
4
​
 =w 
3
​
 +x (or 
𝑥
3
+
𝑥
x 
3
 +x)
𝑤
5
=
𝑤
4
+
5
w 
5
​
 =w 
4
​
 +5 (or 
𝑥
3
+
𝑥
+
5
x 
3
 +x+5)
Phase 2: Building constraints (“Quality Control”)

𝑤
2
−
𝑤
1
∗
𝑤
1
=
0
w 
2
​
 −w 
1
​
 ∗w 
1
​
 =0
𝑤
3
−
𝑤
2
∗
𝑤
1
=
0
w 
3
​
 −w 
2
​
 ∗w 
1
​
 =0
𝑤
4
−
𝑤
3
−
𝑤
1
=
0
w 
4
​
 −w 
3
​
 −w 
1
​
 =0
𝑤
5
−
𝑤
4
−
5
=
0
w 
5
​
 −w 
4
​
 −5=0
𝑤
5
−
35
=
0
w 
5
​
 −35=0
R1CS
"Welcome to R1CS, where everything is a matrix but there’s no Keanu Reeves."

After "dismantling the car" into individual pieces, R1CS (Rank-1 Constraint System) turns everything into a matrix—not for flying around like in movies, but to make calculations easier.

R1CS transforms the constraints into a matrix form. Each constraint has the form:

⟨
𝑎
,
𝑤
⟩
∗
⟨
𝑏
,
𝑤
⟩
=
⟨
𝑐
,
𝑤
⟩
⟨a,w⟩∗⟨b,w⟩=⟨c,w⟩
Where 
𝑤
=
(
1
,
𝑤
1
,
𝑤
2
,
𝑤
3
,
𝑤
4
,
𝑤
5
)
w=(1,w 
1
​
 ,w 
2
​
 ,w 
3
​
 ,w 
4
​
 ,w 
5
​
 ) is a "super VIP" vector containing all values. For the first constraint 
𝑤
2
=
𝑤
1
∗
𝑤
1
w 
2
​
 =w 
1
​
 ∗w 
1
​
 :

𝑎
=
(
0
,
1
,
0
,
0
,
0
,
0
)
a=(0,1,0,0,0,0) // Coefficients for 
𝑤
1
w 
1
​
 
𝑏
=
(
0
,
1
,
0
,
0
,
0
,
0
)
b=(0,1,0,0,0,0) // Coefficients for 
𝑤
1
w 
1
​
 
𝑐
=
(
0
,
0
,
1
,
0
,
0
,
0
)
c=(0,0,1,0,0,0) // Coefficients for 
𝑤
2
w 
2
​
 
Why do we need matrices? 🤔

Easy Computation:
Computers handle matrices well.
It only requires linear algebra!
Easy Verification:
A matrix multiplication = checking all constraints.
Faster than checking each one individually.
Easy Conversion:
A stepping stone to QAP.
Matrix → Polynomial → ZK Magic! ✨
QAP
The transition from R1CS to QAP is one of the most important parts of ZK-SNARK. Let's analyze it step-by-step.

Step 1: Interpolation Points
For each constraint in R1CS, we select a unique point on the finite field:

Constraint 1: 
𝑟
1
r 
1
​
 
Constraint 2: 
𝑟
2
r 
2
​
 
Constraint 3: 
𝑟
3
r 
3
​
  ...
For example, with the constraint 
𝑤
2
=
𝑤
1
∗
𝑤
1
w 
2
​
 =w 
1
​
 ∗w 
1
​
 :

At 
𝑟
1
r 
1
​
 : Vector 
𝑎
=
(
0
,
1
,
0
,
0
,
0
,
0
)
a=(0,1,0,0,0,0) has value 
𝑣
1
v 
1
​
 
At 
𝑟
1
r 
1
​
 : Vector 
𝑏
=
(
0
,
1
,
0
,
0
,
0
,
0
)
b=(0,1,0,0,0,0) has value 
𝑣
2
v 
2
​
 
At 
𝑟
1
r 
1
​
 : Vector 
𝑐
=
(
0
,
0
,
1
,
0
,
0
,
0
)
c=(0,0,1,0,0,0) has value 
𝑣
3
v 
3
​
 
Step 2: Constructing Lagrange Polynomials
Lagrange polynomials 
𝐿
𝑖
(
𝑥
)
L 
i
​
 (x) are built so that:

𝐿
𝑖
(
𝑟
𝑗
)
=
1
L 
i
​
 (r 
j
​
 )=1 if 
𝑖
=
𝑗
i=j
𝐿
𝑖
(
𝑟
𝑗
)
=
0
L 
i
​
 (r 
j
​
 )=0 if 
𝑖
≠
𝑗
i

=j
Formula:

𝐿
𝑖
(
𝑥
)
=
∏
𝑗
≠
𝑖
(
𝑥
−
𝑟
𝑗
)
(
𝑟
𝑖
−
𝑟
𝑗
)
L 
i
​
 (x)= 
j

=i
∏
​
  
(r 
i
​
 −r 
j
​
 )
(x−r 
j
​
 )
​
 
Step 3: Building Three Main Polynomials
𝐴
(
𝑥
)
=
∑
𝑎
𝑖
𝐿
𝑖
(
𝑥
)
A(x)=∑a 
i
​
 L 
i
​
 (x) // Polynomial for the left input
𝐵
(
𝑥
)
=
∑
𝑏
𝑖
𝐿
𝑖
(
𝑥
)
B(x)=∑b 
i
​
 L 
i
​
 (x) // Polynomial for the right input
𝐶
(
𝑥
)
=
∑
𝑐
𝑖
𝐿
𝑖
(
𝑥
)
C(x)=∑c 
i
​
 L 
i
​
 (x) // Polynomial for the output
Key property:

At each point 
𝑟
𝑖
r 
i
​
 , 
(
𝐴
(
𝑟
𝑖
)
,
𝐵
(
𝑟
𝑖
)
,
𝐶
(
𝑟
𝑖
)
)
(A(r 
i
​
 ),B(r 
i
​
 ),C(r 
i
​
 )) corresponds to constraint 
𝑖
i.
These polynomials "encode" the entire computation circuit.
Step 4: Satisfaction Condition

𝐴
(
𝑥
)
𝐵
(
𝑥
)
−
𝐶
(
𝑥
)
=
𝐻
(
𝑥
)
𝑃
(
𝑥
)
A(x)B(x)−C(x)=H(x)P(x)
Where:

𝑃
(
𝑥
)
=
∏
(
𝑥
−
𝑟
𝑖
)
P(x)=∏(x−r 
i
​
 ) is the target polynomial.
𝐻
(
𝑥
)
H(x) is the quotient polynomial.
This condition ensures 
𝐴
(
𝑥
)
𝐵
(
𝑥
)
=
𝐶
(
𝑥
)
A(x)B(x)=C(x) at every point 
𝑟
𝑖
r 
i
​
 .
⇒ If the computation satisfies all constraints, 
𝐴
(
𝑥
)
𝐵
(
𝑥
)
−
𝐶
(
𝑥
)
A(x)B(x)−C(x) must be divisible by 
𝑃
(
𝑥
)
P(x). This is how all constraints are encapsulated in a single condition.

Elliptic Curve Pairing
Uses bilinear pairing 
𝑒
:
𝐺
1
×
𝐺
2
→
𝐺
𝑡
e:G 
1
​
 ×G 
2
​
 →G 
t
​
  with the property:

𝑒
(
𝑎
𝑃
,
𝑏
𝑄
)
=
𝑒
(
𝑃
,
𝑄
)
𝑎
𝑏
e(aP,bQ)=e(P,Q) 
ab
 
Where 
𝑃
∈
𝐺
1
P∈G 
1
​
 , 
𝑄
∈
𝐺
2
Q∈G 
2
​
 , and 
𝑎
,
𝑏
a,b are scalars.

Setup Phase (Trusted Setup)
Think of the Trusted Setup as a birth ritual for ZK-SNARK. Like forging a master key that opens every door but must be destroyed to ensure no one can replicate it. Steps in the Trusted Setup:

Generate toxic waste: 
𝜏
,
𝛼
,
𝛽
,
𝛾
,
𝛿
←
random
τ,α,β,γ,δ←random
Compute proving key: 
𝜏
𝑖
⋅
𝑃
1
𝑖
∈
[
𝑛
]
,
𝛼
⋅
𝜏
𝑖
⋅
𝑃
1
𝑖
∈
[
𝑛
]
,
.
.
.
τ 
i
 ⋅P 
1
​
  
i
​
 ∈[n],α⋅τ 
i
 ⋅P 
1
​
  
i
​
 ∈[n],...
Compute verification key: 
𝛼
⋅
𝑃
1
,
𝛽
⋅
𝑃
2
,
𝛾
⋅
𝑃
2
,
𝛿
⋅
𝑃
2
α⋅P 
1
​
 ,β⋅P 
2
​
 ,γ⋅P 
2
​
 ,δ⋅P 
2
​
 
Delete toxic waste 
(
𝜏
,
𝛼
,
𝛽
,
𝛾
,
𝛿
)
(τ,α,β,γ,δ)
In the setup phase, special parameters are created: 
𝜏
,
𝛼
,
𝛽
,
𝛾
,
𝛿
τ,α,β,γ,δ. These are called "toxic waste" for a reason:

They’re extremely dangerous if in the wrong hands.
Must be "safely buried."
If leaked, the entire system could collapse.
From the toxic waste, we create a proving key, a powerful toolkit for generating proofs:

Powers of tau 
𝜏
𝑖
⋅
𝑃
1
τ 
i
 ⋅P 
1
​
 : Like a toolkit, each tool stronger than the last.
Alpha terms 
𝛼
⋅
𝜏
𝑖
⋅
𝑃
1
α⋅τ 
i
 ⋅P 
1
​
 : The first layer of protection against cheating.
Beta terms 
𝛽
⋅
𝜏
𝑖
⋅
𝑃
1
β⋅τ 
i
 ⋅P 
1
​
 : The second layer of protection, enhancing security.
The verification key is simpler but equally important:

𝛼
⋅
𝑃
1
,
𝛽
⋅
𝑃
2
α⋅P 
1
​
 ,β⋅P 
2
​
 : Like keys to verify authenticity.
𝛾
⋅
𝑃
2
,
𝛿
⋅
𝑃
2
γ⋅P 
2
​
 ,δ⋅P 
2
​
 : Ensures no one can guess secret information.
The most crucial part: after creating the keys, all toxic waste must be destroyed. Like burning blueprints after building a secure structure:

No trace is left.
No backup or storage.
Even the creator cannot retain it.
To ensure maximum security, major projects often hold a "Powers of Tau Ceremony":

Hundreds of participants from around the world.
Each person adds their own layer of randomness.
If even one participant is honest, the system remains secure.
Like a ritual where everyone contributes to a "protective charm" for the system.

Modern Algorithms
Groth16

Proving:

Input: witness 
𝑤
w, CRS
Output: 
(
𝐴
,
𝐵
,
𝐶
)
∈
𝐺
1
×
𝐺
2
×
𝐺
1
(A,B,C)∈G 
1
​
 ×G 
2
​
 ×G 
1
​
 
Verification: 
𝑒
(
𝐴
,
𝐵
)
=
𝑒
(
𝐶
,
𝑃
2
)
⋅
𝑒
(
verification terms
)
e(A,B)=e(C,P 
2
​
 )⋅e(verification terms)

Complexity:

Proving: 
𝑂
(
𝑛
log
⁡
𝑛
)
O(nlogn)
Verification: 
𝑂
(
1
)
O(1)
Proof size: 3 group elements (~256 bytes)
Groth16, created by Jens Groth in 2016, is like the Ferrari of the ZK-SNARK world. It’s famous for its lightning-fast verification speed and super-compact proof size.

How It Works:

Input is a witness (secret information) and CRS (parameters generated from a trusted setup)
Output includes just three elements (A, B, C) - as compact as a tweet!
Verification is simply checking 
𝑒
(
𝐴
,
𝐵
)
=
𝑒
(
𝐶
,
𝑃
2
)
⋅
𝑒
(
verification terms
)
e(A,B)=e(C,P 
2
​
 )⋅e(verification terms)
Outstanding Advantages:

Proof is only ~256 bytes - as light as a message
Verification is lightning-fast with 
𝑂
(
1
)
O(1) complexity
Proving is fast with 
𝑂
(
𝑛
log
⁡
𝑛
)
O(nlogn) complexity
Drawbacks:

Requires a trusted setup for each circuit
Similar to needing a new key for every lock
PLONK

PLONK (Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge) - a name as long as a poem but with extremely impressive technology!

Breakthroughs:

Universal Setup: Set it up once, use it for life
SRS = (G, [τ]₁, [τ²]₁, ..., [τᵈ]₁) - like a multi-functional toolset
Cool Features:

One-time Trusted Setup
Set up once, use it forever
Like having a master key for every door
Dynamic Circuit
Freely change circuits without redoing the setup
Like a LEGO set, you can create as you like
Recursive Proofs
Can verify a proof inside another proof
It’s like Inception in the ZK world!
"Learning ZK-SNARK is not a sprint, it's a marathon" - Cryptography Community

If this makes your brain hurt, understanding and implementing these algorithms requires deep knowledge of math and cryptography, high-level abstract thinking, patience, a passion for cryptography, significant time investment, and a hefty dose of advanced math.

"Don’t be discouraged if you don’t understand it immediately. Remember, even Vitalik Buterin took years to master ZK-SNARKs."

Mechanism of Integrating ZK-SNARK into Wormhole
Mechanism
The integration process acts like a "revolution" in the current Guardian system:

Guardian Flow Changes:

Before: 13 out of 19 Guardians had to sign to validate each message
After: Guardians create a ZK proof for each batch of messages
New Batching Mechanism:

Gather multiple transactions into a batch
Create a single proof for the entire batch
Significantly reduces verification costs and time
Challenges of Integrating ZK-SNARK into Wormhole
Technical Challenges
Performance Issues:

Optimizing the proof creation process
Balancing between batch size and latency
Managing proof generation time issues
Circuit Design:

Designing effective circuits for cross-chain verification
Optimizing computation
Ensuring security with minimal overhead
Integration Complexity:

Modifying Guardian network architecture
Upgrading smart contracts on multiple chains
Maintaining backward compatibility
Benefits and Potential Applications
Enhanced Privacy:

Fully private cross-chain transactions
Protects user information
Mitigates MEV and front-running
Improved Scalability:

10-100x improvement in throughput
Reduces verification costs
Accelerates processing speed
New Use Cases:

Private cross-chain DeFi
Anonymous bridge transfers
Compliant privacy solutions
Conclusion
ZK-SNARK x Wormhole is not just an upgrade, but an important step toward building the future of cross-chain infrastructure:

Privacy by default
Scalability by design
Security at its core
"The future of cross-chain bridges isn't just about connecting blockchains; it's about connecting them privately, efficiently, and securely."