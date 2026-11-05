"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

export function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // 1. Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(
      42,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 6.8);

    // 3. Renderer Setup (High Performance, Capped Pixel Ratio)
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    currentMount.appendChild(renderer.domElement);

    // 4. Hierarchy Setup: mouseGroup -> floatGroup -> diceGroup
    const mouseGroup = new THREE.Group();
    scene.add(mouseGroup);

    const floatGroup = new THREE.Group();
    mouseGroup.add(floatGroup);

    const diceGroup = new THREE.Group();
    floatGroup.add(diceGroup);

    // 5. Materials
    // Primary Monolithic Body: Electric Blue with high clearcoat finish
    const diceMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x2457ff,
      roughness: 0.18,
      metalness: 0.12,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.88,
    });

    // Pips & Details: Acid / Lime Green with subtle emissive luminance
    const pipMaterial = new THREE.MeshStandardMaterial({
      color: 0xb9f227,
      emissive: 0xb9f227,
      emissiveIntensity: 0.35,
      roughness: 0.25,
      metalness: 0.45,
    });

    // 6. Geometries
    // Sculptural Rounded Cube (2.1 x 2.1 x 2.1 with 0.24 radius bevel)
    const diceGeometry = new RoundedBoxGeometry(2.1, 2.1, 2.1, 5, 0.24);
    const diceMesh = new THREE.Mesh(diceGeometry, diceMaterial);
    diceGroup.add(diceMesh);

    // Geometric Pip Geometry (flush precision cylinders)
    const pipGeometry = new THREE.CylinderGeometry(0.095, 0.095, 0.025, 32);
    const ringGeometry = new THREE.TorusGeometry(0.24, 0.014, 16, 48);

    // Helper to create and position precision pips on dice faces
    const halfSize = 1.051; // Just 0.001 above the 2.1 cube face to avoid z-fighting
    const spacing = 0.44;

    const addPip = (
      x: number,
      y: number,
      z: number,
      rx = 0,
      ry = 0,
      rz = 0
    ) => {
      const pip = new THREE.Mesh(pipGeometry, pipMaterial);
      pip.position.set(x, y, z);
      pip.rotation.set(rx, ry, rz);
      diceGroup.add(pip);
    };

    // Face 1 (+Z): Center focal mark with subtle concentric precision ring
    addPip(0, 0, halfSize, Math.PI / 2, 0, 0);
    const centerRing = new THREE.Mesh(ringGeometry, pipMaterial);
    centerRing.position.set(0, 0, halfSize);
    diceGroup.add(centerRing);

    // Face 6 (-Z): 2 columns of 3 pips
    [-spacing, spacing].forEach((x) => {
      [-spacing, 0, spacing].forEach((y) => {
        addPip(x, y, -halfSize, Math.PI / 2, 0, 0);
      });
    });

    // Face 2 (+Y): Clean diagonal
    addPip(-spacing, halfSize, -spacing, 0, 0, 0);
    addPip(spacing, halfSize, spacing, 0, 0, 0);

    // Face 5 (-Y): 4 corners + center pip
    [
      [-spacing, -spacing],
      [spacing, -spacing],
      [-spacing, spacing],
      [spacing, spacing],
      [0, 0],
    ].forEach(([x, z]) => {
      addPip(x, -halfSize, z, 0, 0, 0);
    });

    // Face 3 (+X): 3 pips diagonal
    addPip(halfSize, -spacing, -spacing, 0, 0, -Math.PI / 2);
    addPip(halfSize, 0, 0, 0, 0, -Math.PI / 2);
    addPip(halfSize, spacing, spacing, 0, 0, -Math.PI / 2);

    // Face 4 (-X): 4 corners
    [-spacing, spacing].forEach((y) => {
      [-spacing, spacing].forEach((z) => {
        addPip(-halfSize, y, z, 0, 0, Math.PI / 2);
      });
    });

    // 7. Refined Lighting Setup
    // Ambient light ensuring clean depth in both dark and light modes
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    // Key Light (sharp specular clearcoat highlight from top-right)
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    keyLight.position.set(4.5, 6.0, 5.0);
    scene.add(keyLight);

    // Fill Light (soft cool reflection from opposite side)
    const fillLight = new THREE.DirectionalLight(0xdce7ff, 0.7);
    fillLight.position.set(-4.0, -2.5, 3.5);
    scene.add(fillLight);

    // Blue Rim Light (defining sculptural silhouette)
    const rimLight = new THREE.PointLight(0x2457ff, 35, 14);
    rimLight.position.set(-3.5, 3.5, -4.0);
    scene.add(rimLight);

    // Acid Lime Bounce Light (subtle warm ground reflection)
    const bounceLight = new THREE.PointLight(0xb9f227, 22, 10);
    bounceLight.position.set(2.5, -3.5, 2.5);
    scene.add(bounceLight);

    // 8. Choreographed Multi-Axis Orientations (Slerp with Pauses)
    const poses = [
      new THREE.Euler(0.48, 0.65, 0.16), // Isometric 3/4 showing Face 1 (+Z), Face 2 (+Y), Face 3 (+X)
      new THREE.Euler(-0.46, 2.05, -0.22), // Turning to showcase Face 3 (+X), Face 5 (-Y), Face 6 (-Z)
      new THREE.Euler(0.62, 3.75, 0.25), // Rolling smoothly to Face 4 (-X), Face 2 (+Y), Face 6 (-Z)
      new THREE.Euler(-0.42, 5.25, -0.16), // Drifting to Face 5 (-Y), Face 4 (-X), Face 1 (+Z)
      new THREE.Euler(0.48, 0.65 + Math.PI * 2, 0.16), // Seamless loop back to initial angle
    ];

    const quaternions = poses.map((p) => new THREE.Quaternion().setFromEuler(p));
    const segmentCount = quaternions.length - 1;
    const segmentDuration = 6.0; // 6s per orientation segment
    const pauseDuration = 2.2; // 2.2s pause at each orientation
    const totalCycle = segmentCount * segmentDuration; // 24s full loop
    const currentQuat = new THREE.Quaternion();

    // 9. Subtle Mouse Tracking State
    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = currentMount.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetTiltX = x * 0.32;
      targetTiltY = y * 0.32;
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });

    // 10. Resize Handler
    const handleResize = () => {
      if (!currentMount) return;
      const width = currentMount.clientWidth;
      const height = currentMount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));

      // Mobile scale optimization
      if (width < 640) {
        diceGroup.scale.setScalar(0.88);
      } else {
        diceGroup.scale.setScalar(1.0);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // If reduced motion is requested, render clean static isometric view and exit loop
    if (prefersReducedMotion) {
      diceGroup.quaternion.copy(quaternions[0]);
      renderer.render(scene, camera);
      return () => {
        window.removeEventListener("mousemove", handlePointerMove);
        window.removeEventListener("resize", handleResize);
        if (currentMount.contains(renderer.domElement)) {
          currentMount.removeChild(renderer.domElement);
        }
        diceGeometry.dispose();
        pipGeometry.dispose();
        ringGeometry.dispose();
        diceMaterial.dispose();
        pipMaterial.dispose();
        renderer.dispose();
      };
    }

    // 11. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // 1. Gentle floating vertical oscillation
      floatGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.12;
      floatGroup.rotation.z = Math.sin(elapsedTime * 0.4) * 0.02;

      // 2. Choreographed multi-axis orientation interpolation
      const cycleTime = elapsedTime % totalCycle;
      const currentSegment = Math.floor(cycleTime / segmentDuration);
      const segmentTime = cycleTime % segmentDuration;

      const qA = quaternions[currentSegment];
      const qB = quaternions[currentSegment + 1];

      if (segmentTime < pauseDuration) {
        // Paused / Lingering phase: smoothly rest at target pose
        currentQuat.copy(qA);
      } else {
        // Smooth rotation phase between poses (Cosine ease-in-out)
        const t = (segmentTime - pauseDuration) / (segmentDuration - pauseDuration);
        const ease = 0.5 - 0.5 * Math.cos(Math.PI * t);
        currentQuat.slerpQuaternions(qA, qB, ease);
      }

      diceGroup.quaternion.copy(currentQuat);

      // 3. Smooth mouse-responsive tilt
      currentTiltX += (targetTiltX - currentTiltX) * 0.04;
      currentTiltY += (targetTiltY - currentTiltY) * 0.04;

      mouseGroup.rotation.y = currentTiltX;
      mouseGroup.rotation.x = -currentTiltY;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("resize", handleResize);

      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }

      diceGeometry.dispose();
      pipGeometry.dispose();
      ringGeometry.dispose();
      diceMaterial.dispose();
      pipMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] flex items-center justify-center">
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        aria-label="Abstract 3D Dice Sculpture — ZEN® Design × Technology"
      />
    </div>
  );
}
