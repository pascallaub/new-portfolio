import { useEffect, useRef, useCallback, useState } from "react";

function MorpheusScene({ onRedPillClick }) {
  const morpheusImgRef = useRef(null);
  const pill1Ref = useRef(null);
  const pill2Ref = useRef(null);
  const previewRef = useRef(null);
  const previewBlueRef = useRef(null); // Ref for blue preview
  const [isHoveringRedPill, setIsHoveringRedPill] = useState(false);
  const [isHoveringBluePill, setIsHoveringBluePill] = useState(false); // State for blue pill hover

  const previewWidth = 512;
  const previewHeight = 128;

  const updatePositions = useCallback(() => {
    const morpheusImg = morpheusImgRef.current;
    const pill1 = pill1Ref.current;
    const pill2 = pill2Ref.current;

    if (!morpheusImg || (!pill1 && !pill2)) return;

    const rect = morpheusImg.getBoundingClientRect();

    if (rect.width === 0 || rect.height === 0) {
      console.warn("Morpheus image dimensions not ready for positioning.");
      return;
    }

    // Position Pill 1
    if (pill1) {
      const topRatio = 0.67;
      const leftRatio = 0.22;
      pill1.style.position = "absolute";
      pill1.style.top =
        window.scrollY + rect.top + rect.height * topRatio + "px";
      pill1.style.left =
        window.scrollX + rect.left + rect.width * leftRatio + "px";
      pill1.style.zIndex = "20";
    }

    // Position Pill 2
    if (pill2) {
      const topRatio = 0.67;
      const leftRatio = 0.74;
      pill2.style.position = "absolute";
      pill2.style.top =
        window.scrollY + rect.top + rect.height * topRatio + "px";
      pill2.style.left =
        window.scrollX + rect.left + rect.width * leftRatio + "px";
      pill2.style.zIndex = "20";
    }
  }, []);

  useEffect(() => {
    const morpheusImg = morpheusImgRef.current;
    if (!morpheusImg) return;

    const handleUpdate = () => {
      // Check if image is loaded or cached and ready
      if (morpheusImg.complete && morpheusImg.naturalHeight !== 0) {
        console.log("Morpheus image already complete, updating positions.");
        updatePositions();
      } else {
        console.log("Morpheus image not complete, adding load listener.");
        morpheusImg.addEventListener("load", updatePositions, { once: true });
      }
    };

    window.addEventListener("resize", updatePositions);

    handleUpdate(); // Initial check/setup load listener
    updatePositions(); // Explicitly call again after initial setup

    // Cleanup function
    return () => {
      console.log("Cleaning up MorpheusScene effects.");
      window.removeEventListener("resize", updatePositions);
      // Ensure listener is removed if component unmounts before load
      morpheusImg.removeEventListener("load", updatePositions);
    };
  }, [updatePositions]);

  useEffect(() => {
    if (isHoveringRedPill) {
      const pill1 = pill1Ref.current;
      const previewImg = previewRef.current;

      if (pill1 && previewImg) {
        const pill1Rect = pill1.getBoundingClientRect();
        const pillWidth = pill1Rect.width || 25;

        const previewTop = window.scrollY + pill1Rect.top - previewHeight - 8;
        const previewLeft =
          window.scrollX +
          pill1Rect.left +
          pillWidth / 2 -
          previewWidth / 2 +
          140;

        previewImg.style.position = "absolute";
        previewImg.style.top = `${previewTop}px`;
        previewImg.style.left = `${previewLeft}px`;
        previewImg.style.zIndex = "30";
      }
    }
  }, [isHoveringRedPill, previewHeight, previewWidth]);

  useEffect(() => {
    if (isHoveringBluePill) {
      const pill2 = pill2Ref.current;
      const previewBlueImg = previewBlueRef.current;

      if (pill2 && previewBlueImg) {
        const pill2Rect = pill2.getBoundingClientRect();
        const pillWidth = pill2Rect.width || 25;

        const previewTop = window.scrollY + pill2Rect.top - previewHeight - 8;
        const previewLeft =
          window.scrollX +
          pill2Rect.left +
          pillWidth / 2 -
          previewWidth / 2 +
          150;

        previewBlueImg.style.position = "absolute";
        previewBlueImg.style.top = `${previewTop}px`;
        previewBlueImg.style.left = `${previewLeft}px`;
        previewBlueImg.style.zIndex = "30";
      }
    }
  }, [isHoveringBluePill, previewHeight, previewWidth]);

  const handleImageLoad = () => {
    console.log("handleImageLoad triggered.");
    updatePositions();
  };

  const handleBluePillClick = () => {
    window.location.href = "https://bbc.com"; // Navigate in the current window
  };

  return (
    <div className="flex justify-center items-center min-h-screen relative">
      <img
        ref={morpheusImgRef}
        src="/morpheus.png"
        alt="morpheus"
        className="max-w-2xl z-10"
        onLoad={handleImageLoad}
      />
      <div
        ref={pill1Ref}
        className="group bg-red-600 rounded-full cursor-pointer w-[25px] h-[40px]"
        onClick={onRedPillClick}
        onMouseEnter={() => setIsHoveringRedPill(true)}
        onMouseLeave={() => setIsHoveringRedPill(false)}
      ></div>
      <div
        ref={pill2Ref}
        className="group bg-blue-600 rounded-full cursor-pointer w-[25px] h-[40px]"
        onClick={handleBluePillClick}
        onMouseEnter={() => setIsHoveringBluePill(true)}
        onMouseLeave={() => setIsHoveringBluePill(false)}
      ></div>

      {isHoveringRedPill && (
        <img
          ref={previewRef}
          src="/portfolio.png"
          alt="Portfolio Preview"
          className="absolute w-128 h-32 rounded-full border-white border-2 pointer-events-none object-cover"
        />
      )}

      {isHoveringBluePill && (
        <img
          ref={previewBlueRef}
          src="/bbc.png"
          alt="BBC Preview"
          className="absolute w-128 h-32 rounded-full pointer-events-none object-cover"
        />
      )}
    </div>
  );
}

export default MorpheusScene;
