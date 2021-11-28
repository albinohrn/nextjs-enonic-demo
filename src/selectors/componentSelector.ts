
import BasePart from "../components/pageeditor/parts/_BasePart";
import ImageView from "../components/pageeditor/_Image";
import TextView from "../components/pageeditor/_Text";

import {PropsProcessor, ReactView, SelectedQueryMaybeVariablesFunc} from "./contentSelector";


export type ComponentSelection = {
    //query?: SelectedQueryMaybeVariablesFunc,
    //props?: PropsProcessor,
    view?: ReactView
}

export type ComponentSelector = {
    [fullContentType: string]: ComponentSelection
}

const componentSelector: ComponentSelector = {
    'text': {
        view: TextView
    },
    'part': {
        view: BasePart
    },
    'image': {
        view: ImageView
    }
};

export default componentSelector;
