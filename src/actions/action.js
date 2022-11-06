import { GET_LIST_POST, GET_LIST_POST_SUCCESS} from "../const/constant";

export const getListPost = (payload) => {
	return {
		type: GET_LIST_POST,
		payload: payload,
	}
};

export const getListPostSuccess = (payload) => {
	return {
		type: GET_LIST_POST_SUCCESS,
		payload: payload,
	}
};