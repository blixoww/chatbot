import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    PIXI: typeof PIXI;
  }
}
import * as PIXI from 'pixi.js';
import { Live2DModel } from 'pixi-live2d-display-lipsyncpatch';

window.PIXI = PIXI;

const Live2DDisplay: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const initPixi = async () => {
      if (!canvasRef.current) {
        console.error("Canvas élément introuvable.");
        return;
      }

      const app = new PIXI.Application({
        view: canvasRef.current,
        width: window.innerWidth,
        height: window.innerHeight,
        autoDensity: true,
        antialias: true,
      });

      try {
        const model = await Live2DModel.from('/models/02saki_normal/02saki_normal.model3.json');
        console.log("Modèle chargé avec succès", model);

        // Adjust scale and position
        model.scale.set(0.2); // Adjust scale to make the model smaller
        model.anchor.set(0.5, 0.5); // Anchor to the center
        model.x = app.screen.width / 2;
        model.y = app.screen.height / 2;

        // Add the model to the stage
        app.stage.addChild(model);

        // Interaction
        model.on('hit', (hitAreas: string[]) => {
          if (hitAreas.includes('body')) {
            model.motion('tap_body');
          }
        });

        console.log("Dimensions du modèle :", model.width, model.height);
        console.log('Position:', model.x, model.y);
      } catch (error) {
        console.error('Failed to load model:', error);
      }
    };

    initPixi();
  }, []);

  // Return the canvas element for PixiJS
  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
      <div className="chatBox">
        {/* Chatbox content goes here */}
      </div>
    </div>
  );
};

export default Live2DDisplay;