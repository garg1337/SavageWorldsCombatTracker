import { PlayerActionTypes, PlayersState, ADD_PLAYER, DELETE_PLAYER, UPDATE_PLAYER_SUIT, UPDATE_PLAYER_RANK,
     Player, Rank, Suit, UPDATE_PLAYER_BEN, UPDATE_PLAYER_WT, UPDATE_PLAYER_FT, SORT_INIT, RESET_INIT, UPDATE_PLAYER_NOTES, TOGGLE_PLAYER_DONE } from "./types"

const initialState: PlayersState = {
    count: 2,
    list: []
}

export function playersReducer(
    state = initialState,
    action: PlayerActionTypes
): PlayersState {
    switch (action.type) {
        case ADD_PLAYER:
            const player: Player = {
                name: action.payload,
                bennies: 0,
                done: false,
                woundsTaken: 0,
                fatigueTaken: 0,
                notes: "",
                rank: Rank.NA,
                suit: Suit.NA
            }
            return {
                ...state,
                count: state.count + 1,
                list: [...state.list, player]
            };
        case DELETE_PLAYER:
            const oldList = [...state.list];
            oldList.splice(action.payload, 1);
            const newList = oldList;

            return {
                ...state,
                count: state.count - 1,
                list: newList
            };
        case TOGGLE_PLAYER_DONE: 
            const doneList = [...state.list]; 
            doneList[action.payload].done = !doneList[action.payload].done;
            return {
                ...state,
                list: doneList
            };
        case UPDATE_PLAYER_SUIT:
            const suitList = [...state.list]; 
            suitList[action.payload.player].suit = action.payload.num;
            return {
                ...state,
                list: suitList
            };
        case UPDATE_PLAYER_RANK:
            const rankList = [...state.list]; 
            rankList[action.payload.player].rank = action.payload.num;
            return {
                ...state,
                list: rankList
            };
        case UPDATE_PLAYER_BEN:
            const benlist = [...state.list]; 
            benlist[action.payload.player].bennies = action.payload.num;
            return {
                ...state,
                list: benlist
            };
        case UPDATE_PLAYER_WT:
            const wtlist = [...state.list]; 
            wtlist[action.payload.player].woundsTaken = action.payload.num;
            return {
                ...state,
                list: wtlist
            };
        case UPDATE_PLAYER_FT:
            const ftlist = [...state.list]; 
            ftlist[action.payload.player].fatigueTaken = action.payload.num;
            return {
                ...state,
                list: ftlist
            };
        case UPDATE_PLAYER_NOTES:
            const notelist = [...state.list]; 
            notelist[action.payload.player].notes = action.payload.str;
            return {
                ...state,
                list: notelist
            };
        case RESET_INIT:
            const resetlist = [...state.list];
            resetlist.forEach(p => {
                p.rank = Rank.NA
                p.suit = Suit.NA
                p.done = false
            });

            return {
                ...state,
                list: resetlist
            };
        case SORT_INIT:
            const sortList = [...state.list];
            sortList.sort((a, b) => (a.rank > b.rank) ? -1 : (a.rank === b.rank) ? ((a.suit > b.suit) ? -1 : 1) : 1 )
            return {
                ...state,
                list: sortList
            };

        default:
            return state;
    }
}