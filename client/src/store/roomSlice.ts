// roomSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface Room {
  id: string;
  name: string;
}

interface CanvasInput {
  // Define the structure of a canvas input here
}

interface RoomState {
  rooms: Room[];
  activeRoom: Room | null;
  canvasInputs: CanvasInput[];
  tool: "pencil" | "eraser" | "hand";
  color: string;
  thickness: number;
}

const initialState: RoomState = {
  rooms: JSON.parse(sessionStorage.getItem("rooms") || "[]"),
  activeRoom: null,
  canvasInputs: [],
  tool: "pencil",
  color: "black",
  thickness: 1,
};

export const createRoom = createAsyncThunk<Room, void>(
  "rooms/create",
  async () => {
    const newRoom: Room = {
      id: uuidv4(),
      name: `Room ${initialState.rooms.length + 1}`,
    };
    const updatedRooms = [...initialState.rooms, newRoom];
    sessionStorage.setItem("rooms", JSON.stringify(updatedRooms));
    return newRoom;
  }
);

const roomSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    joinRoom: (state, action: PayloadAction<Room>) => {
      state.activeRoom = action.payload;
    },
    redoCanvas: (state) => {
      // Implement redo logic
    },
    undoCanvas: (state) => {
      // Implement undo logic
    },
    removeAllCanvasInputs: (state) => {
      state.canvasInputs = [];
    },
    setTool: (state, action: PayloadAction<"pencil" | "eraser" | "hand">) => {
      state.tool = action.payload;
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    setThickness: (state, action: PayloadAction<number>) => {
      state.thickness = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      createRoom.fulfilled,
      (state, action: PayloadAction<Room>) => {
        state.rooms.push(action.payload);
      }
    );
  },
});

export const {
  joinRoom,
  redoCanvas,
  undoCanvas,
  removeAllCanvasInputs,
  setTool,
  setColor,
  setThickness,
} = roomSlice.actions;

export default roomSlice.reducer;
