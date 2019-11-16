import * as React from "react";
import { connect } from "react-redux";
import { PlayerItem } from "../components";

import { deletePlayer, addPlayer, updateSuit, updateRank, updateBen, updateFt, updateWt, sortInit, resetInit, updateNotes } from "../store/players/actions"
import {Player} from "../store/players/types"
import { AppState } from "../store"


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
      playerJSX = <p>No players</p>;
    } else {
      playerJSX = this.props.playerList.map((item, idx) => {
        return (
          <PlayerItem player={item} key={idx} idx={idx} handleDelete={this.handleDeleteButtonClick}
          updateSuit={this.props.updateSuit} updateRank={this.props.updateRank}
          updateBen={this.props.updateBen} updateFt={this.props.updateFt}
          updateWt={this.props.updateWt}
          updateNotes={this.props.updateNotes} />
        );
      });
    }

    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th>Rank</th>
              <th>Suit</th>
              <th>Bennies</th>
              <th>WT</th>
              <th>FT</th>
              <th>Notes</th>
            </tr>
            {playerJSX}
          </tbody>
        </table>
        <input
          onChange={this.handleTextChange}
          placeholder={"New Player Here"}
          value={this.state.playerInput}
        />
        <button onClick={this.handleButtonClick}>Add Player</button>
        <button onClick={this.props.sortInit}>Sort Initiative</button>
        <button onClick={this.props.resetInit}>Next Round</button>
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
  updateSuit: (idx: number, num: number) => dispatch(updateSuit(idx, num)),
  updateRank: (idx: number, num: number) => dispatch(updateRank(idx, num)),
  updateBen: (idx: number, num: number) => dispatch(updateBen(idx, num)),
  updateWt: (idx: number, num: number) => dispatch(updateWt(idx, num)),
  updateFt: (idx: number, num: number) => dispatch(updateFt(idx, num)),
  updateNotes: (idx: number, str: string) => dispatch(updateNotes(idx, str)),
  sortInit: () => dispatch(sortInit()),
  resetInit: () => dispatch(resetInit())
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(PlayersContainer);