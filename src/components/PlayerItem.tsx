import * as React from "react";
import Select from "react-select"
import {Player, Rank, Suit} from "../store/players/types"
var NumericInput = require('react-numeric-input');

interface PlayerItemProps {
  player: Player;
  idx: number;
  handleDelete: (idx: number) => void;
  updateSuit: (idx: number, num: number) => void;
  updateRank: (idx: number, num: number) => void;
  updateWt: (idx: number, num: number) => void;
  updateFt: (idx: number, num: number) => void;
  updateBen: (idx: number, num: number) => void;
  updateNotes: (idx: number, notes: string) => void;
}

export const PlayerItem: React.FC<PlayerItemProps> = props => {
  return (
    <tr>
      <td><button onClick={() => props.handleDelete(props.idx)}>X</button></td>
      <td>{props.player.done}</td>
      <td>{props.player.name}</td>
      <td>{rankDropdown(props)}</td>
      <td>{suitDropdown(props)}</td>
      <td><NumericInput min={0} max={100} value={props.player.bennies} onChange={(val: any) => props.updateBen(props.idx, val)}/></td>
      <td><NumericInput min={0} max={100} value={props.player.woundsTaken} onChange={(val: any) => props.updateWt(props.idx, val)}/></td>
      <td><NumericInput min={0} max={100} value={props.player.fatigueTaken} onChange={(val: any) => props.updateFt(props.idx, val)}/></td>
      <td>
      <input
            type="text"
            value={props.player.notes}
            onChange={e => props.updateNotes(props.idx, e.target.value)}
         />
      </td>
    </tr>
  );
};

interface option {
  value: number,
  label: string
}

const rankDropdown: React.FC<PlayerItemProps> = props => {
  let options = []

  let i = 0;
  for (let item in Object.keys(Rank)) {
    if (i >= Object.keys(Rank).length/2) {
      break;
    }
    options.push({value: Number(item), label: transformRankWord(Rank[item])})
    i++;
  }

  const selectedOption = {value: props.player.rank, label: transformRankWord(Rank[props.player.rank])}

  return (
    <Select
      value={selectedOption}
      onChange={(opt: any)=>props.updateRank(props.idx, opt.value)}
      options={options}
    />
  );
}

const transformRankWord = (word: string): string => {
  switch(word) {
    case "Two":
      return '2';
    case "Three":
      return '3';
    case "Four":
      return '4';
    case "Five":
      return '5';
    case "Six":
      return '6';
    case "Seven":
      return '7';
    case "Eight":
      return '8';
    case "Nine":
      return '9';
    case "Ten":
      return '10';          
    default:
      return word;
  }
}

const suitDropdown: React.FC<PlayerItemProps> = props => {
  let options: option[] = []

  let i = 0;
  for (let item in Object.keys(Suit)) {
    if (i >= Object.keys(Suit).length/2) {
      break;
    }
    options.push({value: Number(item), label: Suit[item]})
    i++;
  }

  const selectedOption: option = {value: props.player.suit, label: Suit[props.player.suit]}

  return (
    <Select
      value={selectedOption}
      onChange={(opt: any)=>props.updateSuit(props.idx, opt.value)}
      options={options}
    />
  );
}