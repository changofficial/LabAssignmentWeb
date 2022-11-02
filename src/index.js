import React from "react";
import ReactDOM from "react-dom";
import { Note, Interval, Distance, Scale, Chord, transpose } from "tonal";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";

import "react-piano/dist/styles.css";
import "./styles.css";

import SoundfontProvider from "./SoundfontProvider";

function App() {
  // this.stave = new VF.Stave(10, 40, 400);
  // console.log(Scale.notes('Eb bebop'));
  // console.log(`Eb ${Scale.names()[5]}`);
  // console.log(Scale.notes(`Eb ${Scale.names()[5]}`));
  Scale.names().forEach((name, index) => {
    const mainNote = "Bb";
    const asd = Scale.notes(`${mainNote} ${Scale.names()[index]}`);
    console.log(name, asd);
    asd.map(note => console.log(Chord.notes(note)));
  });
  console.log(Note.midi(Note.name("C4")));
  // console.log(Chord.notes("Ab"));
  // Chord.names()
  //   .map(name => console.log(name));
  // console.log(transpose('C4', '8P'))

  return (
    <div id="App">
      <BasicPiano />
    </div>
  );
}

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = "https://d1pzp51pvbm36p.cloudfront.net";

const noteRange = {
  first: MidiNumbers.fromNote("c3"),
  last: MidiNumbers.fromNote("f4")
};
const keyboardShortcuts = KeyboardShortcuts.create({
  firstNote: noteRange.first,
  lastNote: noteRange.last,
  keyboardConfig: KeyboardShortcuts.HOME_ROW
});

function BasicPiano() {
  return (
    <SoundfontProvider
      playback={60}
      instrumentName="acoustic_grand_piano"
      audioContext={audioContext}
      hostname={soundfontHostname}
      render={({ isLoading, playNote, stopNote }) => (
        <Piano
          noteRange={noteRange}
          width={600}
          onPlayNote={playNote}
          onStopNote={stopNote}
          disabled={isLoading}
          keyboardShortcuts={keyboardShortcuts}
        />
      )}
    />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
