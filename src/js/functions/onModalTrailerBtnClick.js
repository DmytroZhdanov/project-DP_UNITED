import { modalMovieDetailsClose } from "./modalMovieDetailsClose";
import { openModalTrailer } from "./openModalTrailer";

export function onModalTrailerBtnClick(id) {
  openModalTrailer(id);
  modalMovieDetailsClose();
}