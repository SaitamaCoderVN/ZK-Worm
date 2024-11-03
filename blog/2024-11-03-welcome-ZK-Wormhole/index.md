---
slug: building-a-zero-knowledge-cross-chain-bridge
title: Building a Zero-Knowledge Cross-Chain Bridge with Wormhole and ZK-SNARK 😃
authors: [LoanCrypto]
tags: [crypto, blockchain, wormhole, zk-snark]
---

# Introduction

**“Another day, another bridge hack”** 😄 - This might be a familiar saying in the Crypto community in 2023, as bridge hacks have seemingly become a "snack" for hackers 😂.

![meme2 (2).png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6287db08-37d7-4bac-b701-7283460101af/eacfa7b7-24bc-46f2-acd5-9d6390a26f5d/meme2_(2).png)

Famous bridge hacks have become a nightmare for the Crypto community. The year 2022 was indeed a “memorable” year for bridges. 💀 The Ronin Bridge of Axie Infinity had to take a “year off” with $625M disappearing in March 2022 after hackers took control of 5 out of 9 validators, causing the project to halt operations and Sky Mavis to raise funds to cover the losses. 🤦‍♀️

Wormhole, the elder brother in the bridge world, had an “unexpected date” with hackers, resulting in $325M going on an indefinite vacation in February 2022. Fortunately, Jump Crypto appeared like Iron Man in the movie Endgame and “snapped” everything back to normal. 😅 

Nomad Bridge continued to “give without expecting anything in return” with $190M lost in August 2022. Harmony Bridge also joined the fun, “contributing” an additional $100M in June 2022 to the “Bridge Hack 2022” collection. 😂

> *"The security of bridges right now is like locking a bicycle with a string - it looks safe until someone really wants to take it." - Some stubborn old developer.* 💩

![meme1.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6287db08-37d7-4bac-b701-7283460101af/03230be3-8b32-4ecc-9699-914d48dd7af0/meme1.png)

Come on, don’t laugh too soon! While other blockchains are struggling to connect with each other, just like you’re trying to find a way into your crush’s heart, Wormhole has appeared and seamlessly connected over 20 different blockchains (wormhole.com). But there’s something interesting - their Guardian system operates on a “democratic” mechanism that requires 13 out of 19 members to agree before allowing a cross-chain message to pass through. Sound familiar? Yes, exactly! It’s like when you’re trying to gather your friends to go out, and everyone has to agree before you can finalize anything, which rarely happens 😗.

Then ZK-SNARK came into the picture, like your crush suddenly texting “Heyy” at 2 AM. This technology promises significant improvements in security and performance for the bridge system. It’s like being able to keep your secrets while proving to your mom that you’ve done your homework without having to show her the specific content 😽.

According to Polygon, this technology helps reduce verification costs by 90% - even more than turning off the lights when leaving a room. StarkWare proudly announced that finality time has decreased from 15 minutes to 2-3 minutes - so fast that by the time you hit F5 to check Bitcoin prices, your transaction is already completed 😅.

![meme3.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6287db08-37d7-4bac-b701-7283460101af/3d369c43-441b-4c20-89cb-887354b43e32/meme3.png)

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

![meme4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/6287db08-37d7-4bac-b701-7283460101af/2def1b32-2506-4aa0-a5d5-869851830345/meme4.png)

Sounds complex, right? But don’t worry, that’s why Wormhole exists, to make cross-chain asset transfers as easy as sending a package! The only difference is that instead of waiting 3-5 days, everything happens in minutes, and instead of regular shippers, there are Guardians with top-notch “security credentials” :)).

## Overview of ZK-SNARK

If Wormhole is the "highway" for transferring assets, then ZK-SNARK is the state-of-the-art security system for this highway - where you can prove you have the right to use the highway, have enough "fees" to travel, and that your transactions are valid without revealing any sensitive information. It’s like passing through an ETC toll booth - your vehicle is confirmed and charged, but no one knows who you are or where you’re going 🙉.

Sounds a bit vague, so let’s start with the definition =))

Zero-Knowledge Succinct Non-Interactive Argument of Knowledge - a name as long as a Korean menu, but the idea is simple:

- Zero-Knowledge: "I can prove I know something without telling you what it is."
- Succinct: "I do it concisely, without rambling."
- Non-Interactive: "Just say it once, no back and forth."
- Argument of Knowledge: "And ensure no one can cheat."

![meme5.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/6287db08-37d7-4bac-b701-7283460101af/34df79f4-3b38-400a-b280-0dca63cb2410/meme5.jpg)

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
