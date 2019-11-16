// Describing the shape of the players's slice of state

export enum Suit {
    NA = 1,
    Clubs,
    Diamonds,
    Hearts,
    Spades,
    Color,
    Black
}

export enum Rank {
    NA = 1,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Jack,
    Queen,
    King,
    Ace,
    Joker
}

export interface Player {
    name: string;
    bennies: number;
    woundsTaken: number;
    fatigueTaken: number;
    notes: string;
    done: boolean;
    rank: number;
    suit: number;
}

export interface PlayersState {
    count: number;
    list: Player[];
}

// Describing the different ACTION NAMES available  
export const ADD_PLAYER = "ADD_PLAYER";
export const DELETE_PLAYER = "DELETE_PLAYER";
export const TOGGLE_PLAYER_DONE = "TOGGLE_PLAYER_DONE";
export const UPDATE_PLAYER_SUIT = "UPDATE_PLAYER_SUIT";
export const UPDATE_PLAYER_RANK = "UPDATE_PLAYER_RANK";
export const UPDATE_PLAYER_BEN = "UPDATE_PLAYER_BEN";
export const UPDATE_PLAYER_WT = "UPDATE_PLAYER_WT";
export const UPDATE_PLAYER_FT = "UPDATE_PLAYER_FT";
export const UPDATE_PLAYER_NOTES = "UPDATE_PLAYER_NOTES";
export const SORT_INIT = "SORT_INIT";
export const RESET_INIT = "RESET_INIT";

export interface AddPlayerAction {
    type: typeof ADD_PLAYER;
    payload: string;
}

export interface DeletePlayerAction {
    type: typeof DELETE_PLAYER;
    payload: number;
}

export interface TogglePlayerDoneAction {
    type: typeof TOGGLE_PLAYER_DONE;
    payload: number;
}

export interface PlayerNumberPayload {
    player: number;
    num: number;
}

export interface PlayerStringPayload {
    player: number;
    str: string;
}

export interface UpdatePlayerSuitAction {
    type: typeof UPDATE_PLAYER_SUIT;
    payload: PlayerNumberPayload;
}

export interface UpdatePlayerRankAction {
    type: typeof UPDATE_PLAYER_RANK;
    payload: PlayerNumberPayload;
}

export interface UpdatePlayerBenAction {
    type: typeof UPDATE_PLAYER_BEN;
    payload: PlayerNumberPayload;
}

export interface UpdatePlayerFtAction {
    type: typeof UPDATE_PLAYER_FT;
    payload: PlayerNumberPayload;
}

export interface UpdatePlayerWtAction {
    type: typeof UPDATE_PLAYER_WT;
    payload: PlayerNumberPayload;
}

export interface UpdatePlayerNotesAction {
    type: typeof UPDATE_PLAYER_NOTES;
    payload: PlayerStringPayload;
}

export interface ResetInitAction {
    type: typeof RESET_INIT;
}

export interface SortInitAction {
    type: typeof SORT_INIT;
}

export type PlayerActionTypes = 
AddPlayerAction | DeletePlayerAction | TogglePlayerDoneAction | UpdatePlayerRankAction | UpdatePlayerSuitAction
| UpdatePlayerRankAction | UpdatePlayerBenAction 
| UpdatePlayerFtAction | UpdatePlayerWtAction | UpdatePlayerNotesAction | ResetInitAction | SortInitAction ;