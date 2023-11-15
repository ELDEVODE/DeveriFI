import React, { useState } from "react";
import { useCanister } from "@connect2ic/react";

const Dip721NftMinter = () => {
  const [counter] = useCanister("dip721");
  const [imageLink, setImageLink] = useState("");
  const [mintedImage, setMintedImage] = useState("");

  const handleImageLinkChange = (event) => {
    setImageLink(event.target.value);
  };

  const mintNft = async () => {
    // You might want to add some validation to ensure imageLink is a valid URL
    const mintedTokenId = await counter.mint(imageLink);
    const mintedImageURI = await counter.tokenURI(mintedTokenId);
    setMintedImage(mintedImageURI);
  };

  return (
    <div className="nft-minter">
      <h2>NFT Minter</h2>
      <div className="upload-section">
        <label htmlFor="image-link">Image Link:</label>
        <input
          type="text"
          id="image-link"
          value={imageLink}
          onChange={handleImageLinkChange}
        />
        <button onClick={mintNft} disabled={!imageLink}>
          Mint NFT
        </button>
      </div>

      {mintedImage && (
        <div className="minted-image-section">
          <h3>Minted Image:</h3>
          <img src={mintedImage} alt="Minted NFT Image" />
        </div>
      )}
    </div>
  );
};

export default Dip721NftMinter;
