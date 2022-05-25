const { assert } = require("chai");

describe("Game5", function() {
  it("should be a winner", async function() {
    const Game = await ethers.getContractFactory("Game5");
    const game = await Game.deploy();
    await game.deployed();

    // good luck
    const allAcc = await ethers.provider.listAccounts();
    let x;
    for (let i=0; i<allAcc.length; i++) {
      if (Number(allAcc[i]) > Number("0x00FfFFfFFFfFFFFFfFfFfffFFFfffFfFffFfFFFf")) {
        return x = i;
      }
    }
    const signer = ethers.provider.getSigner(x);
    await game.connect(signer).win();

    // leave this assertion as-is
    assert(await game.isWon(), "You did not win the game");
  });
});
