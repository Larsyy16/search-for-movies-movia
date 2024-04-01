import { useRef } from "react";

const MobileMenu = () => {
  const inputRef = useRef(null);

  const moveCursorToInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Click the button to move cursor"
      />
      <button onClick={moveCursorToInput}>Move Cursor to Input</button>
    </div>
  );
};

export default MobileMenu;
