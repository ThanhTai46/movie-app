import React, { useState } from "react";
import ReactPlayer from "react-player";
import { VscMute, VscUnmute } from "react-icons/vsc";
import styled from "styled-components";
import { useEffect } from "react";

const Intro = () => {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <IntroContainer className="bg-slate-900">
      {
        <ReactPlayer
          playing={true}
          light={true}
          width="100%"
          height="100%"
          muted={isMuted}
          volume={1}
          url="https://player.vimeo.com/video/638417165?h=2d8156ad96&autoplay=1&loop=1"
          className="w-full h-full videoIntro opacity-90"
        />
      }

      <div className="infoIntro">
        <h1 className="headingIntro md:hidden break-words max-w-3xl">
          Unlimited movies, TV shows, and more.
        </h1>
        <p className="text-base overviewIntro md:hidden">
          Watch anywhere. Cancel anytime.
        </p>
      </div>
      {isMuted ? (
        <VscMute
          className="btnVolume"
          onClick={() => setIsMuted((pre) => !pre)}
        />
      ) : (
        <VscUnmute
          className="btnVolume"
          onClick={() => setIsMuted((pre) => !pre)}
        ></VscUnmute>
      )}
      <div className="fadeBottom"></div>
    </IntroContainer>
  );
};

export default Intro;
const IntroContainer = styled.div`
  color: white;
  position: relative;
  padding-top: 56%;
  .videoIntro {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .infoIntro {
    position: absolute;
    top: 50%;
    transform: translateY(-100%);
    left: 100px;
    @media screen and (max-width: 800px) {
      top: 120px;
      left: 25px;
    }
    @media screen and (max-width: 600px) {
      top: 100px;
      left: 15px;
    }
    .headingIntro {
      font-size: 60px;
      transition: all 0.3s ease;
      font-weight: 600;
      @media screen and (max-width: 800px) {
        font-size: 40px;
      }
      @media screen and (max-width: 600px) {
        font-size: 24px;
      }
    }
    .overviewIntro {
      max-width: 550px;
      width: 100%;
      line-height: 1.3;
      padding-top: 25px;
      font-size: 25px;
      @media screen and (max-width: 800px) {
        font-size: 16px;
      }
      @media screen and (max-width: 600px) {
        font-size: 14px;
      }
    }
  }
  .btnVolume {
    position: absolute;
    width: 40px;
    height: 40px;
    right: 10%;
    top: 50%;
    cursor: pointer;
    border-radius: 50%;
    padding: 6px;
    color: #bbb;
    border: 1px solid #fff;
    transition: all 0.3s ease;
    transform: scale(1);
    &:hover {
      color: #fff;
      transform: scale(1.2);
      background-color: rgba(211, 211, 211, 0.18);
    }
    @media screen and (max-width: 800px) {
      width: 30px;
      height: 30px;
      padding: 4px;
    }
    @media screen and (max-width: 600px) {
      width: 20px;
      height: 20px;
      padding: 1px;
    }
  }
  .fadeBottom {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(15, 15, 15, 0.6) 40%,
      rgb(17, 17, 17),
      rgb(17, 17, 17)
    );
  }
`;
