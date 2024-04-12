import React, { useState, useEffect } from 'react';
import './Cube.css';
import { CubeSideContainer, SkillItem } from './styled';

export const SkillsCube = ({
  selectedId, setSelectedId, skills
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [rotation, setRotation] = useState({ x: 0, y: 45 });
  const [autoRotation, setAutoRotation] = useState(true)

  useEffect(() => {
    if (selectedId == 1) {
      setRotation({ x: 0, y: 0 })
    }
    if (selectedId == 2) {
      setRotation({ x: 0, y: 90 })
    }
    if (selectedId == 3) {
      setRotation({ x: 0, y: 180 })
    }
    if (selectedId == 4) {
      setRotation({ x: 0, y: 270 })
    }
  }, [selectedId, setSelectedId])

  useEffect(() => {
    if (rotation.y > -30 && rotation.y < 30) {
      setSelectedId(1)
    }
    if (rotation.y > -120 && rotation.y < -60) {
      setSelectedId(2)
    }
    if (rotation.y > -210 && rotation.y < -150) {
      setSelectedId(3)
    }
    if (rotation.y > -300 && rotation.y < -240) {
      setSelectedId(4)
    }
  }, [rotation, setRotation])

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const deltaX = event.clientX - startX;

    const newRotation = {
      x: rotation.x,
      y: rotation.y + deltaX * 0.5, // Adjusting Y-axis rotation based on horizontal movement
    };

    setRotation(newRotation);
    setStartX(event.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const autoRotationSpeed = 0.1; // in degrees per frame

  // useEffect(() => {
  //   if (autoRotation == true) {
  //     const intervalId = setInterval(() => {
  //       // Update rotation on each frame
  //       setRotation(prevRotation => ({
  //         ...prevRotation,
  //         y: prevRotation.y + autoRotationSpeed,
  //       }));
  //     }, 16); // 60 frames per second 
  //     return () => clearInterval(intervalId); // Cleanup on component unmount
  //   }
  // }, [autoRotation]);

  return (
    <div
      className="scene"
      // onMouseMove={handleMouseMove}
      // onMouseUp={handleMouseUp}
      // onMouseDownCapture={() => setSelectedId(0)}
      // onMouseOutCapture={() => setIsDragging(false)}
      onMouseOut={() => setAutoRotation(true)}
      onMouseOver={() => setAutoRotation(false)}
    >
      <div
        className="box"
        style={{
          transform: `translateZ(-50px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
        onMouseDown={handleMouseDown}
      >
        <div className="box__face box__face--front">
          <CubeSideContainer>
            {skills[0].skills.map((item) => (
              <SkillItem
                key={item.title}
                sx={{
                  width: skills[0].skills.length == 5 || skills[0].skills.length == 9 ? 'calc(100% / 4)' : 'calc(100% / 5 - 36px)'
                }}
              >
                {item.icon}
                {item.title}
              </SkillItem>
            ))}
          </CubeSideContainer>
        </div>
        <div className="box__face box__face--back">
          <CubeSideContainer>
            {skills[2].skills.map((item) => (
              <SkillItem
                key={item.title}
                sx={{
                  width: skills[2].skills.length == 5 || skills[2].skills.length == 9 ? 'calc(100% / 4)' : 'calc(100% / 5 - 36px)'
                }}
              >
                {item.icon}
                {item.title}
              </SkillItem>
            ))}
          </CubeSideContainer>
        </div>
        <div className="box__face box__face--right">
          <CubeSideContainer>
            {skills[3].skills.map((item) => (
              <SkillItem
                key={item.title}
                sx={{
                  width: skills[3].skills.length == 5 || skills[3].skills.length == 9 ? 'calc(100% / 4)' : 'calc(100% / 5 - 36px)'
                }}
              >
                {item.icon}
                {item.title}
              </SkillItem>
            ))}
          </CubeSideContainer>
        </div>
        <div className="box__face box__face--left">
          <CubeSideContainer>
            {skills[1].skills.map((item) => (
              <SkillItem
                key={item.title}
                sx={{
                  width: skills[1].skills.length == 5 || skills[1].skills.length == 9 ? 'calc(100% / 4)' : 'calc(100% / 5 - 36px)'
                }}
              >
                {item.icon}
                {item.title}
              </SkillItem>
            ))}
          </CubeSideContainer>
        </div>
      </div>
    </div>
  );
};
