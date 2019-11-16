import * as React from "react";
import {Player, Rank, Suit} from "../store/players/types"
import {Delete, Check} from "@material-ui/icons"
import { Button, Select, TableCell, TableRow,TextField, MenuItem, FormControl, FormHelperText, InputLabel } from '@material-ui/core';
import { ToggleButton } from '@material-ui/lab';
import './PlayerItem.css';
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
  toggleDone: (idx: number) => void;
}


export const PlayerItem: React.FC<PlayerItemProps> = props => {
  const rowDoneClass = props.player.done ? "PlayerDone" : ""
  return (
    <TableRow className={rowDoneClass}>
      <TableCell className="PlayerButton">
      <Button
        className="DeletePlayerButton"
        color="secondary"
        onClick={() => props.handleDelete(props.idx)}><Delete/></Button>
      </TableCell>
      <TableCell className="PlayerButton">
        <ToggleButton
          className="TogglePlayerDoneButton"
          selected={props.player.done}
          onClick={() => props.toggleDone(props.idx)}><Check/></ToggleButton>
      </TableCell>
      <TableCell>{props.player.name}</TableCell>
      <TableCell>{rankDropdown(props)}</TableCell>
      <TableCell>{suitDropdown(props)}</TableCell>
      <TableCell>
        <TextField 
          type="number"
          label="Bennies"
          value={props.player.bennies}
          onChange={e => props.updateBen(props.idx, Number(e.target.value))}
          inputProps={{ min: "0", max: "100", step: "1" }} />
      </TableCell>
      <TableCell>
        <TextField 
          type="number"
          label="Wounds"
          value={props.player.woundsTaken}
          onChange={e => props.updateWt(props.idx, Number(e.target.value))}
          inputProps={{ min: "0", max: "100", step: "1" }} />
      </TableCell>
      <TableCell>
        <TextField 
          type="number"
          label="Fatigue"
          value={props.player.fatigueTaken}
          onChange={e => props.updateFt(props.idx, Number(e.target.value))}
          inputProps={{ min: "0", max: "100", step: "1" }} />
      </TableCell>
      <TableCell>
        <TextField
              type="text"
              label="Notes"
              value={props.player.notes}
              multiline
              rows="5"
              onChange={e => props.updateNotes(props.idx, e.target.value)}
          />
      </TableCell>
    </TableRow>
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
    <FormControl>
    <InputLabel id={"rank-label-" + props.idx}>Rank</InputLabel>
    <Select
      labelId={"rank-label-" + props.idx}
      value={selectedOption.value}
      onChange={(event: any) => props.updateRank(props.idx, event.target.value)}
    >
      {options.map((item: any) => {
      return <MenuItem value={item.value}>{item.label}</MenuItem>
      })}
    </Select>
  </FormControl>
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
    <FormControl>
    <InputLabel id={"suit-label-" + props.idx}>Suit</InputLabel>
    <Select
      labelId={"suit-label-" + props.idx}
      value={selectedOption.value}
      onChange={(event: any) => props.updateSuit(props.idx, event.target.value)}
    >
      {options.map((item: any) => {
      return <MenuItem value={item.value}>{item.label}</MenuItem>
      })}
    </Select>
  </FormControl>
);
}