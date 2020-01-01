import { ActionType } from "redux-actions-type";
import * as actions from "./creators";

export type Action = ActionType<typeof actions>;
