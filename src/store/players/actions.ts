import {ADD_PLAYER, AddPlayerAction, DELETE_PLAYER, DeletePlayerAction, UpdatePlayerSuitAction, UpdatePlayerRankAction,
     UPDATE_PLAYER_SUIT,
     UPDATE_PLAYER_RANK,
     UpdatePlayerWtAction,
     UpdatePlayerFtAction,
     UpdatePlayerBenAction,
     UPDATE_PLAYER_BEN,
     UPDATE_PLAYER_WT, UPDATE_PLAYER_FT, SortInitAction, SORT_INIT, ResetInitAction, RESET_INIT, UpdatePlayerNotesAction, UPDATE_PLAYER_NOTES} from "./types";

export function addPlayer(name: string): AddPlayerAction {
    return {
        type: ADD_PLAYER,
        payload: name
    };
}

export function deletePlayer(num: number): DeletePlayerAction {
    return {
        type: DELETE_PLAYER,
        payload: num
    };
}

export function updateSuit(player: number, suit: number): UpdatePlayerSuitAction {
    return {
        type: UPDATE_PLAYER_SUIT,
        payload: {
            player: player,
            num: suit
        }
    };
}

export function updateRank(player: number, rank: number): UpdatePlayerRankAction {
    return {
        type: UPDATE_PLAYER_RANK,
        payload: {
            player: player,
            num: rank
        }
    };
}

export function updateWt(player: number, wt: number): UpdatePlayerWtAction {
    return {
        type: UPDATE_PLAYER_WT,
        payload: {
            player: player,
            num: wt
        }
    };
}

export function updateFt(player: number, ft: number): UpdatePlayerFtAction {
    return {
        type: UPDATE_PLAYER_FT,
        payload: {
            player: player,
            num: ft
        }
    };
}

export function updateBen(player: number, ben: number): UpdatePlayerBenAction {
    return {
        type: UPDATE_PLAYER_BEN,
        payload: {
            player: player,
            num: ben
        }
    };
}

export function updateNotes(player: number, notes: string): UpdatePlayerNotesAction {
    return {
        type: UPDATE_PLAYER_NOTES,
        payload: {
            player: player,
            str: notes
        }
    };
}

export function sortInit(): SortInitAction {
    return {
        type: SORT_INIT
    };
}

export function resetInit(): ResetInitAction {
    return {
        type: RESET_INIT
    };
}