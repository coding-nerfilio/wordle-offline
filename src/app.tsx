import Block from "@/components/Block";
import { GUESS_RESULT } from "./types";

export function App() {
  return (
    <>
      <div>
        <Block state={{ Letter: "A", Status: GUESS_RESULT.CORRECT }} />
      </div>
    </>
  );
}
