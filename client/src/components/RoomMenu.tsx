import React, { useState } from "react";
import styled from "styled-components";

const RoomMenuContainer = styled.div<{ center: boolean }>`
  position: absolute;
  z-index: 1;
  top: ${({ center }) => (center ? "50%" : "1vh")};
  left: ${({ center }) => (center ? "50%" : "1vw")};
  transform: ${({ center }) => (center ? "translate(-50%, -50%)" : "none")};
  transition: top 0.5s, left 0.5s;
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

const Overlay = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ show }) => (show ? "block" : "none")};
  z-index: 1;
`;

const StyledSelect = styled.select<{ center: boolean }>`
  padding: 0.5em 1em;
  border: 1px solid #fff;
  border-radius: 0.3em;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: ${({ center }) => (center ? "0.8em" : "0.5em")};

  &:hover {
    background-color: rgba(1, 14, 33, 0.7);
  }
`;

const StyledInput = styled.input<{ center: boolean }>`
  padding: 0.5em 1em;
  border: 1px solid #fff;
  border-radius: 0.3em;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: ${({ center }) => (center ? "0.8em" : "0.5em")};
  margin-top: 0.5em; // To give some space between the select and the input

  &:hover {
    background-color: rgba(1, 14, 33, 0.7);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const existingRooms = [
  // { id: "hash1", name: "Room 1" },
  // { id: "hash2", name: "Room 2" },
  // { id: "hash3", name: "Room 3" },
  { id: "NEW_ROOM", name: "Create New Room" },
  { id: "JOIN_ROOM", name: "Join a Room" },
];

const RoomMenu: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<string>("");
  const [isNewRoomCreated, setIsNewRoomCreated] = useState<boolean>(false);
  const [showJoinInput, setShowJoinInput] = useState<boolean>(false);

  const handleRoomChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRoom(event.target.value);
    if (event.target.value === "NEW_ROOM") {
      handleCreateRoom();
    } else if (event.target.value === "JOIN_ROOM") {
      setShowJoinInput(true);
    } else {
      setShowJoinInput(false);
    }
  };

  const handleCreateRoom = () => {
    console.log("Creating a new room...");
    setIsNewRoomCreated(true);
  };

  return (
    <>
      <Overlay show={!isNewRoomCreated} />
      <RoomMenuContainer center={!isNewRoomCreated}>
        <div> D O O D L E </div>

        <StyledSelect
          value={selectedRoom}
          center={!isNewRoomCreated}
          onChange={handleRoomChange}
        >
          <option value="" disabled>
            Select a room
          </option>

          {existingRooms.map((room) => (
            <option key={room.id} value={room.id}>
              {room.name}
            </option>
          ))}
        </StyledSelect>

        {showJoinInput && (
          <StyledInput
            type="text"
            placeholder="Enter room ID to join"
            center={!isNewRoomCreated}
          />
        )}
      </RoomMenuContainer>
    </>
  );
};

export default RoomMenu;
