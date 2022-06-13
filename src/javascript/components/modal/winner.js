import { showModal } from './modal';
import { createFighterImage } from '../fighterPreview';

export function showWinnerModal(fighter) {
  // call showModal function
  const imgFighter = createFighterImage(fighter);
  showModal({
    title: `${fighter.name} won`,
    bodyElement: imgFighter,
    onClose: () => { location.reload(); }
  });
}
