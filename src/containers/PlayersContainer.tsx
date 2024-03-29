import * as React from "react";
import { connect } from "react-redux";
import { PlayerItem } from "../components";

import { deletePlayer, addPlayer, updateSuit, updateRank, updateBen, updateFt, updateWt, sortInit, resetInit, updateNotes, togglePlayerDone } from "../store/players/actions"
import {Player} from "../store/players/types"
import { AppState } from "../store"
import { Button, Table, TableBody, TableRow, TableHead, TextField, TableCell, TableFooter } from '@material-ui/core';
import './PlayersContainer.css';

interface PlayersContainerState {
  playerInput: string;
}

interface PlayersContainerProps {
  count: number;
  playerList: Player[];
  addPlayer: (item: string) => object;
  deletePlayer: (idx: number) => object;
  sortInit: () => object;
  resetInit: () => object;
  toggleDone: (idx: number) => object;
  updateSuit: (idx: number, num: number) => object;
  updateRank: (idx: number, num: number) => object;
  updateWt: (idx: number, num: number) => object;
  updateFt: (idx: number, num: number) => object;
  updateBen: (idx: number, num: number) => object;
  updateNotes: (idx: number, str: string) => object;
}

class PlayersContainer extends React.Component<PlayersContainerProps, PlayersContainerState> {
  constructor(props: PlayersContainerProps) {
    super(props);
    this.state = {
      playerInput: ""
    };
  }

  handleTextChange = (e: any) => {
    this.setState({
      playerInput: e.target.value
    });
  };

  handleButtonClick = () => {
    this.props.addPlayer(this.state.playerInput);
    this.setState({
      playerInput: ""
    });
  };

  handleDeleteButtonClick = (idx: number) => {
    console.log("deleting", idx);
    this.props.deletePlayer(idx);
  };

  render() {
    let playerJSX: JSX.Element[] | JSX.Element;
    if (!this.props.playerList.length) {
      playerJSX = <></>;
    } else {
      playerJSX = this.props.playerList.map((item, idx) => {
        return (
          <PlayerItem player={item} key={idx} idx={idx} handleDelete={this.handleDeleteButtonClick}
          toggleDone={this.props.toggleDone}
          updateSuit={this.props.updateSuit} updateRank={this.props.updateRank}
          updateBen={this.props.updateBen} updateFt={this.props.updateFt}
          updateWt={this.props.updateWt}
          updateNotes={this.props.updateNotes} />
        );
      });
    }

    return (
      <div>
        <div className="TableWrapper">
          <Table size="small" stickyHeader>
              <colgroup>
                  <col width="1%" />
                  <col width="1%" />
                  <col width="1%" />
                  <col width="1%" />
                  <col width="1%" />
                  <col width="1%" />
                  <col width="1%" />
                  <col width="1%" />
                  <col width="92%" />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>Rank</TableCell>
                  <TableCell>Suit</TableCell>
                  <TableCell>Bennies</TableCell>
                  <TableCell>Wounds</TableCell>
                  <TableCell>Fatigue</TableCell>
                  <TableCell>Notes</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {playerJSX}
            </TableBody>
          </Table>
        </div>
        <div className="PlayerControls">
          <div className="PlayerControl">
            <TextField
              onChange={this.handleTextChange}
              placeholder={"New Player Here"}
              value={this.state.playerInput}
            />
            <Button variant="contained" color="primary" onClick={this.handleButtonClick}>Add Player</Button>
          </div>
          <div className="PlayerControl">
            <Button variant="contained" color="primary" onClick={this.props.sortInit}>Sort Initiative</Button>
          </div>
          <div className="PlayerControl">
            <Button variant="contained" color="primary" onClick={this.props.resetInit}>Next Round</Button>
          </div>
        </div>
      </div>
    );
  }
}

const MapStateToProps = (store: AppState) => {
  return {
    count: store.players.count,
    playerList: store.players.list
  };
};

const MapDispatchToProps = (dispatch: any) => ({
  addPlayer: (item: string) => dispatch(addPlayer(item)),
  deletePlayer: (idx: number) => dispatch(deletePlayer(idx)),
  toggleDone: (idx: number) => dispatch(togglePlayerDone(idx)),
  updateSuit: (idx: number, num: number) => dispatch(updateSuit(idx, num)),
  updateRank: (idx: number, num: number) => dispatch(updateRank(idx, num)),
  updateBen: (idx: number, num: number) => dispatch(updateBen(idx, num)),
  updateWt: (idx: number, num: number) => dispatch(updateWt(idx, num)),
  updateFt: (idx: number, num: number) => dispatch(updateFt(idx, num)),
  updateNotes: (idx: number, str: string) => dispatch(updateNotes(idx, str)),
  sortInit: () => dispatch(sortInit()),
  resetInit: () => dispatch(resetInit()),
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(PlayersContainer);
