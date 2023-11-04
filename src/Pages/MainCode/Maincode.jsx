import React, { useEffect } from "react";
import 'aframe';
import 'aframe-ar';
import { Howl } from 'howler';

import drumsrc from "../MainCode/audio/drums.mp3"
import guitarsrc from "../MainCode/audio/guitar.mp3"
import micsrc from "../MainCode/audio/mic.mp3"
import pianosrc from "../MainCode/audio/piano.mp3"

import drumimg from "../MainCode/assets/drums.png"
import guitarimg from "../MainCode/assets/guitar.png"
import micimg from "../MainCode/assets/mic.png"
import pianoimg from "../MainCode/assets/piano.png"

function MainCode() {
    const drums = new Howl({
      src: [drumsrc],
    });

    const guitar = new Howl({
      src: [guitarsrc],
    });

    const mic = new Howl({
      src: [micsrc],
    });

    const piano = new Howl({
      src: [pianosrc],
    });

    useEffect(() => {
      drums.play();
      guitar.play();
      mic.play();
      piano.play();

      const guitarMarker = document.getElementById('guitar-marker');
      guitarMarker.addEventListener('markerFound', () => {
        // Start playing or UNMUTE
        guitar.mute(false);
      });
      guitarMarker.addEventListener('markerLost', () => {
        // Stop playing or MUTE
        guitar.mute(true);
      });

      const drumsMarker = document.getElementById('drums-marker');
      drumsMarker.addEventListener('markerFound', () => {
        // Start playing or UNMUTE
        drums.mute(false);
      });
      drumsMarker.addEventListener('markerLost', () => {
        // Stop playing or MUTE
        drums.mute(true);
      });

      const micMarker = document.getElementById('mic-marker');
      micMarker.addEventListener('markerFound', () => {
        // Start playing or UNMUTE
        mic.mute(false);
      });
      micMarker.addEventListener('markerLost', () => {
        // Stop playing or MUTE
        mic.mute(true);
      });

      const pianoMarker = document.getElementById('piano-marker');
      pianoMarker.addEventListener('markerFound', () => {
        // Start playing or UNMUTE
        piano.mute(false);
      });
      pianoMarker.addEventListener('markerLost', () => {
        // Stop playing or MUTE
        piano.mute(true);
      });
    }, []);

    return (
      <a-scene embedded arjs="detectionMode: mono_and_matrix; matrixCodeType: 3x3;">
        <a-assets>
          <img id="drums" src={drumimg} />
          <img id="guitar" src={guitarimg} />
          <img id="mic" src={micimg} />
          <img id="piano" src={pianoimg} />
        </a-assets>

        <a-marker id="drums-marker" type="barcode" value="0">
          <a-image src="#drums" rotation="90 0 0"></a-image>
        </a-marker>

        <a-marker id="guitar-marker" type="barcode" value="1">
          <a-image src="#guitar" rotation="90 0 0"></a-image>
        </a-marker>

        <a-marker id="mic-marker" type="barcode" value="2">
          <a-image src="#mic" rotation="90 0 0"></a-image>
        </a-marker>

        <a-marker id="piano-marker" type="barcode" value="3">
          <a-image src="#piano" rotation="90 0 0"></a-image>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    );
}

export default MainCode;
