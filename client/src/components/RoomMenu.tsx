import React, { useState } from "react";
import styled from "styled-components";

const RoomMenuContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 1vh;
  right: 1vw;
  font-size: 1.5em;
  font-weight: bold;
  padding: 0.5em;
  border: 2px solid rgba(3, 14, 33, 1);
  border-radius: 0.5em;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  text-align: center;
`;

const StyledButton = styled.button`
  padding: 0.5em 1em;
  border: 1px solid #fff;
  border-radius: 0.3em;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(1, 14, 33, 0.7);
  }
`;

const StyledSelect = styled.select`
  padding: 0.5em 1em;
  border: 1px solid #fff;
  border-radius: 0.3em;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(1, 14, 33, 0.7);
  }
`;

// Dummy data for existing rooms
const existingRooms = [
  { id: "hash1", name: "Room 1" },
  { id: "hash2", name: "Room 2" },
  { id: "hash3", name: "Room 3" },
];

const RoomMenu: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<string>("");

  const handleRoomChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRoom(event.target.value);
  };

  const handleCreateRoom = () => {
    console.log("Creating a new room...");
  };

  return (
    <RoomMenuContainer>
      <div>R o o m s</div>
      <StyledSelect value={selectedRoom} onChange={handleRoomChange}>
        <option value="" disabled>
          Select an existing room
        </option>
        {existingRooms.map((room) => (
          <option key={room.id} value={room.id}>
            {room.name}
          </option>
        ))}
      </StyledSelect>
      <StyledButton onClick={handleCreateRoom}>Create New Room</StyledButton>
      <StyledButton onClick={handleCreateRoom}>Join a Room</StyledButton>
    </RoomMenuContainer>
  );
};

export default RoomMenu;
