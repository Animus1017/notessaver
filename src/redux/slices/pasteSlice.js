import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};
const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addPaste: (state, action) => {
      const paste = action.payload;
      if (state.pastes.findIndex((p) => p.title === paste.title) >= 0) {
        toast.error("Paste with the same title already exists");
      } else {
        state.pastes.push(paste);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste created successfully");
      }
    },
    deletePaste: (state, action) => {
      const pasteId = action.payload;
      const index = state.pastes.findIndex((p) => p.id === pasteId);
      if (index >= 0) {
        state.pastes.splice(index, 1);
        if (!state.pastes.length) localStorage.removeItem("pastes");
        else localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste deleted");
      } else {
        toast.error("Paste not found");
      }
    },
    resetPaste: (state) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      toast.success("Pastes reset successfully");
    },
    updatePaste: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((p) => p.id === paste.id);
      if (index >= 0) {
        state.pastes[index] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste updated successfully");
      } else {
        toast.error("Paste not found");
      }
    },
  },
});

export const { addPaste, deletePaste, resetPaste, updatePaste } =
  pasteSlice.actions;
export default pasteSlice.reducer;
