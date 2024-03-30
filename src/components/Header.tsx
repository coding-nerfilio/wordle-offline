import "@/styles/globals.css";
import Button from "./Button";
import useSwitch from "@/hooks/useSwitch";
import Dialog from "./Dialog";
import Block from "./Block";
import { GUESS_LETTER_RESULT } from "@/hooks/useGame";

const AboutDialog = ({ sw }: { sw: ReturnType<typeof useSwitch> }) => {
  return (
    <Dialog
      active={sw.isOn}
      title="About"
      content={
        <div>
          <h1 className={"text-center text-2xl mb-2"}>Offline Wordle</h1>
          <div>
            This project replicates the functionality of the popular game
            Wordle. It's a PWA, it could be installed as a native app and also
            works without internet!
          </div>
          <div className={"text-center mt-5"}>
            <div className={"text-xl"}>Made using</div>
            <div className={"flex flex-row justify-center mt-3"}>
              <img
                className={"mr-4"}
                src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
              />
              <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" />
            </div>
          </div>
          <div className={"text-center mt-5"}>
            <div className={"text-xl"}>Source code here:</div>
            <div className={"flex flex-row justify-center mt-3"}>
              <a
                className="text-blue-700"
                href={"https://github.com/coding-nerfilio/wordle-offline"}
              >
                https://github.com/coding-nerfilio/wordle-offline
              </a>
            </div>
          </div>
        </div>
      }
      onClose={sw.toggle}
    />
  );
};

const HelpDialog = ({ sw }: { sw: ReturnType<typeof useSwitch> }) => {
  return (
    <Dialog
      active={sw.isOn}
      title="Help"
      content={
        <div>
          <div className={"mb-5"}>
            You have to guess the hidden word in 6 tries and the color of the
            letters changes to show how close you are.
          </div>
          <div className={"flex flex-row items-center"}>
            <Block
              state={{ selected: false }}
              guess={{
                letter: "A",
                status: GUESS_LETTER_RESULT.UNUSED,
              }}
            />
            <div>Is not in the target word at all</div>
          </div>
          <div className={"flex flex-row items-center"}>
            <Block
              state={{ selected: false }}
              guess={{
                letter: "B",
                status: GUESS_LETTER_RESULT.BAD_POSITION,
              }}
            />
            <div>Is in the word but in the wrong spot</div>
          </div>
          <div className={"flex flex-row items-center"}>
            <Block
              state={{ selected: false }}
              guess={{
                letter: "C",
                status: GUESS_LETTER_RESULT.CORRECT,
              }}
            />
            <div>Is in the word and in the correct spot</div>
          </div>
        </div>
      }
      onClose={sw.toggle}
    />
  );
};

const Header = () => {
  const helpSwitch = useSwitch();
  const aboutSwitch = useSwitch();

  return (
    <div className="flex flex-col pb-3" style={{ backgroundColor: "#d7d1cb" }}>
      <h1 className="antialiased text-xl text-center my-3">Offline Wordle</h1>
      <div className="flex flex-row justify-center">
        <Button
          className="mx-1"
          onclick={() => helpSwitch.toggle()}
          text="Help"
        />
        <HelpDialog sw={helpSwitch} />
        <Button
          className="mx-1"
          onclick={() => aboutSwitch.toggle()}
          text="About"
        />
        <AboutDialog sw={aboutSwitch} />
      </div>
    </div>
  );
};

export default Header;
