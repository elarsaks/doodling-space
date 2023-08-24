import React, { useState } from "react";
import styled from "styled-components";

const CornerDiv = styled.div`
  position: absolute;
  top: 1vh;
  right: 1vw;
  font-size: 1.5em;
  font-weight: bold;
  padding: 0.5em;
  border-radius: 0.5em;
  background-color: #333;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  text-align: center;
`;

// Dummy data for existing rooms
const existingRooms = [
  { id: "hash1", name: "Room 1" },
  { id: "hash2", name: "Room 2" },
  { id: "hash3", name: "Room 3" },
];

const RoomMenu: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<string>(""); // Change here

  const handleRoomChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRoom(event.target.value);
  };

  const handleCreateRoom = () => {
    // Logic to create a new room
    console.log("Creating a new room...");
  };

  return (
    <CornerDiv>
      <div>R o o m s</div>
      <select value={selectedRoom} onChange={handleRoomChange}>
        <option value="" disabled>
          Select an existing room
        </option>
        {existingRooms.map((room) => (
          <option key={room.id} value={room.id}>
            {room.name}
          </option>
        ))}
      </select>
      <button onClick={handleCreateRoom}>Create New Room</button>
      <button onClick={handleCreateRoom}>Join a Room</button>
    </CornerDiv>
  );
};

export default RoomMenu;
